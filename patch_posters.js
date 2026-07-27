const fs = require('fs');
const path = require('path');

const configPath = 'OS/config.js';
const postersDir = 'OS/file_sys/my_computer/posters';

let configContent = fs.readFileSync(configPath, 'utf8');
const files = fs.readdirSync(postersDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));

const payloadItems = files.map((f, index) => {
    return {
        id: `poster-file-${index}`,
        name: f,
        iconType: "imageFile",
        description: "",
        iconSVG: "",
        action: {
            type: "openImage",
            payload: `file_sys/my_computer/posters/${f}`,
            title: f
        }
    };
});

const payloadString = JSON.stringify(payloadItems, null, 24).replace(/\\n/g, '\n');
// We need to inject this into the config.js for window-posters
const targetRegex = /("window-posters"\s*:\s*\{[\s\S]*?"content"\s*:\s*\{[\s\S]*?"type"\s*:\s*"storage"\s*,\s*"payload"\s*:\s*)\[\s*\](\s*\})/m;

if (targetRegex.test(configContent)) {
    // Generate the indented payload string
    const indentedPayload = '[\n' + payloadItems.map(item => {
        return '                        {\n' +
               `                            "id": ${JSON.stringify(item.id)},\n` +
               `                            "name": ${JSON.stringify(item.name)},\n` +
               `                            "iconType": "imageFile",\n` +
               `                            "description": "",\n` +
               `                            "iconSVG": "",\n` +
               `                            "action": {\n` +
               `                                "type": "openImage",\n` +
               `                                "payload": ${JSON.stringify(item.action.payload)},\n` +
               `                                "title": ${JSON.stringify(item.action.title)}\n` +
               `                            }\n` +
               `                        }`;
    }).join(',\n') + '\n                    ]';
    
    configContent = configContent.replace(targetRegex, `$1${indentedPayload}$2`);
    fs.writeFileSync(configPath, configContent, 'utf8');
    console.log("Successfully updated window-posters payload!");
} else {
    console.log("Failed to find window-posters payload: [] array to replace.");
}
