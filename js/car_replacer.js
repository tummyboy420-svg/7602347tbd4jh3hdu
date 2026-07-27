import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const originalAdd = THREE.Scene.prototype.add;
const scenes = new Set();

THREE.Scene.prototype.add = function(...objects) {
    scenes.add(this);
    return originalAdd.apply(this, objects);
};

let carReplaced = false;

function checkScenes() {
    if (carReplaced) return;
    
    for (const scene of scenes) {
        let bodyNode = null;
        scene.traverse((child) => {
            if (child.name === '86body' && child.visible !== false) {
                bodyNode = child;
            }
        });
        
        if (bodyNode) {
            carReplaced = true;
            bodyNode.visible = false;
            
            console.log("Found 86body, hiding it and loading Mustang...");
            const loader = new GLTFLoader();
            loader.load('1965_ford_mustang_shelby_gt350.glb', (gltf) => {
                const mustang = gltf.scene;
                window.mustangModel = mustang;
                
                mustang.position.copy(bodyNode.position);
                mustang.rotation.copy(bodyNode.rotation);
                mustang.rotation.y += Math.PI / 2; // turn to right side
                
                // Temporarily make 86body visible to compute its true world size if needed
                bodyNode.visible = true;
                const box86 = new THREE.Box3().setFromObject(bodyNode);
                const size86 = box86.getSize(new THREE.Vector3());
                bodyNode.visible = false;

                const boxMustang = new THREE.Box3().setFromObject(mustang);
                const sizeMustang = boxMustang.getSize(new THREE.Vector3());
                
                const max86 = Math.max(size86.x, size86.y, size86.z);
                const maxMustang = Math.max(sizeMustang.x, sizeMustang.y, sizeMustang.z);
                let scaleFactor = max86 / maxMustang;
                
                mustang.scale.set(scaleFactor, scaleFactor, scaleFactor);
                
                mustang.traverse((c) => {
                    if (c.isMesh) {
                        c.castShadow = true;
                        c.receiveShadow = true;
                    }
                });
                
                bodyNode.parent.add(mustang);
                console.log("Mustang successfully added with scaleFactor:", scaleFactor);
            });
            break;
        }
    }
    
    if (!carReplaced) {
        requestAnimationFrame(checkScenes);
    }
}

requestAnimationFrame(checkScenes);
