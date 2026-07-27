import os
import re
import urllib.request
import urllib.parse
import ssl
import time

BASE_URL = "https://ishantp.com/"

def download_file(url_path, local_path):
    if not url_path or url_path == '404,': return
    
    parts = url_path.split('/')
    quoted_parts = [urllib.parse.quote(p) for p in parts]
    url_to_fetch = BASE_URL + '/'.join(quoted_parts)
    
    local_path = os.path.normpath(local_path)
    if os.path.exists(local_path) and os.path.getsize(local_path) > 0:
        return
        
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    
    print(f"Downloading {url_to_fetch} -> {local_path}")
    try:
        req = urllib.request.Request(url_to_fetch, headers={'User-Agent': 'Mozilla/5.0'})
        context = ssl._create_unverified_context()
        with urllib.request.urlopen(req, context=context, timeout=15) as response:
            with open(local_path, 'wb') as out_file:
                out_file.write(response.read())
    except Exception as e:
        print(f"Failed to download {url_to_fetch}: {e}")

def scan_file(filepath, prefixes, base_local_dir):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    pattern = r'[\"\']((?:' + '|'.join(prefixes) + r')[^\"\']*\.(?:png|svg|webp|jpg|jpeg|mp3|mp4|m4a|gltf|glb|hdr|pdf|js|css))[\"\']'
    matches = re.findall(pattern, content)
    
    for m in matches:
        url_path = base_local_dir + "/" + m
        local_path = os.path.join(".", base_local_dir, m)
        url_path = url_path.replace('//', '/').strip('/')
        download_file(url_path, local_path)

os_prefixes = ['file_sys/', 'icons/', 'openAssets/', 'sfx/', 'css/', 'js/', 'frontpane']
for root, dirs, files in os.walk('./OS'):
    for file in files:
        if file.endswith(('.html', '.js', '.css', '.json')):
            scan_file(os.path.join(root, file), os_prefixes, 'OS')

root_prefixes = ['assets/', 'css/', 'js/', 'optimized/', 'images/', 'hdri/', 'OS/']
for root, dirs, files in os.walk('.'):
    if 'OS/' in root: continue
    for file in files:
        if file.endswith(('.html', '.js', '.css')):
            scan_file(os.path.join(root, file), root_prefixes, '')

print("Done scanning and downloading!")
