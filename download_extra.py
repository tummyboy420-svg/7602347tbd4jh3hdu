import os
import urllib.request
import urllib.parse
import ssl

BASE_URL = "https://ishantp.com"
FILES = [
    "/OS/config.js",
    "/OS/cursors/cursor.svg",
    "/OS/icons/hourglass.svg",
    "/OS/openAssets/avatar.png",
    "/OS/openAssets/misc/energyStar.svg",
    "/OS/openAssets/misc/bootscreen.svg",
    "/OS/icons/crash.png",
    "/OS/icons/badge/locked.png",
    "/OS/icons/affinity.png",
    "/OS/icons/folder.png",
    "/OS/icons/blender.png",
    "/OS/icons/plasticity.png",
    "/OS/icons/cavalry.png",
    "/OS/openAssets/albumArts/baseCD.png",
    "/OS/icons/ae.png"
]

def download_file(url_path):
    local_path = "." + urllib.parse.unquote(url_path)
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    if os.path.exists(local_path):
        print(f"Skipping {local_path} (already exists)")
        return
    full_url = BASE_URL + url_path
    print(f"Downloading {full_url} -> {local_path}")
    try:
        req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
        context = ssl._create_unverified_context()
        with urllib.request.urlopen(req, context=context) as response, open(local_path, 'wb') as out_file:
            out_file.write(response.read())
    except Exception as e:
        print(f"Failed to download {full_url}: {e}")

for f in FILES:
    download_file(f)
