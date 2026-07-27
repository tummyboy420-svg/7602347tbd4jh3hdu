import os
import json
import urllib.request
import urllib.parse

BASE_URL = "https://ishantp.com"
FILES = [
    "/OS/boot/1.png",
    "/OS/boot/2.png",
    "/OS/frontpane.webp",
    "/OS/icons/favicon.png",
    "/OS/icons/workfile.png",
    "/OS/index.html",
    "/OS/openAssets/pdfs/Ishant_ProductDesigner_Resume.pdf",
    "/OS/sfx/bomb-defused.mp3",
    "/OS/sfx/bomb.mp3",
    "/OS/sfx/boot.mp3",
    "/OS/sfx/crack.mp3",
    "/OS/sfx/cupslide.mp3",
    "/OS/sfx/fanambient.mp3",
    "/OS/sfx/floppy.mp3",
    "/OS/sfx/focusmode.mp3",
    "/OS/sfx/glitch.mp3",
    "/OS/sfx/horn.mp3",
    "/OS/sfx/hover.mp3",
    "/OS/sfx/keyboard/keypress_1.mp3",
    "/OS/sfx/keyboard/keypress_2.mp3",
    "/OS/sfx/keyboard/keypress_3.mp3",
    "/OS/sfx/keyboard/keypress_4.mp3",
    "/OS/sfx/keyboard/keypress_5.mp3",
    "/OS/sfx/keyboard/keypress_6.mp3",
    "/OS/sfx/pour.mp3",
    "/OS/sfx/select.mp3",
    "/OS/sfx/sip.mp3",
    "/OS/sfx/spacebar.mp3",
    "/OS/sfx/welcome.m4a",
    "/OS/sfx/wobble.mp3",
    "/OS/sfx/zoom.mp3",
    "/assets/Polaroid/ishu_1.jpg",
    "/assets/Polaroid/ishu_2.jpg",
    "/assets/Polaroid/ishu_3.jpg",
    "/assets/instagram.svg",
    "/assets/linkedin.svg",
    "/assets/mail.svg",
    "/assets/noise.png",
    "/assets/reflection.png",
    "/assets/screen-crack.webp",
    "/assets/screen-crack2.webp",
    "/assets/screensaver/1.png",
    "/assets/screensaver/glitch-screen.mp4",
    "/assets/screensaver/minimal%20glitch.mp4",
    "/assets/shimmer.png",
    "/assets/startup-cursors/cursor.png",
    "/assets/startup-cursors/cursor@2x.png",
    "/assets/sticky%20notes/explore1.png",
    "/assets/sticky%20notes/explore2.png",
    "/assets/sticky%20notes/explore3.png",
    "/assets/sticky%20notes/grid%20blur.svg",
    "/assets/sticky%20notes/grid.svg",
    "/assets/sticky%20notes/polaroid1.png",
    "/assets/windows%20on%20startup/sunOnStartup.png",
    "/baseScreenshot/login.png",
    "/bee.glb",
    "/hdri/nightsky.hdr",
    "/optimized/cup%20model/just%20the%20cup.gltf",
    "/optimized/floppy%20model/floppy.gltf",
    "/optimized/mainscene-png/scene.gltf"
]

def download_file(url_path):
    url_path = url_path.strip()
    if not url_path or url_path == "404,":
        return
    
    # decode URL path to local path
    local_path = "." + urllib.parse.unquote(url_path)
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    
    if os.path.exists(local_path):
        print(f"Skipping {local_path} (already exists)")
        return
        
    # Full URL (don't unquote for request)
    # the server might need %20 instead of space
    # The paths from log might already have %20, let's keep them
    # But wait, python's url_path from list is exact string. Let's make sure it handles spaces.
    # The paths in the array have `%20`, which is good for the URL.
    full_url = BASE_URL + url_path
    
    print(f"Downloading {full_url} -> {local_path}")
    try:
        req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
        import ssl
        context = ssl._create_unverified_context()
        with urllib.request.urlopen(req, context=context) as response, open(local_path, 'wb') as out_file:
            out_file.write(response.read())
            
        # If it's a gltf file, parse it and download its assets
        if local_path.endswith('.gltf'):
            with open(local_path, 'r') as f:
                gltf_data = json.load(f)
            
            base_dir = os.path.dirname(url_path)
            
            # check buffers
            if 'buffers' in gltf_data:
                for b in gltf_data['buffers']:
                    if 'uri' in b and not b['uri'].startswith('data:'):
                        download_file(base_dir + "/" + urllib.parse.quote(b['uri']))
                        
            # check images
            if 'images' in gltf_data:
                for i in gltf_data['images']:
                    if 'uri' in i and not i['uri'].startswith('data:'):
                        download_file(base_dir + "/" + urllib.parse.quote(i['uri']))
                        
    except Exception as e:
        print(f"Failed to download {full_url}: {e}")

if __name__ == "__main__":
    for f in FILES:
        download_file(f)
