import base64
import re

with open('js/startup.js') as f:
    content = f.read()

# find the array _0x18fa24=['...']
match = re.search(r"_0x18fa24=\[(.*?)\];", content)
if match:
    items = match.group(1).split("','")
    for i, item in enumerate(items):
        item = item.strip("'")
        try:
            # The script uses a custom base64-like alphabet if needed, but let's try standard base64 first.
            decoded = base64.b64decode(item + "===").decode('utf-8')
            if 'Titan' in decoded or 'Principal' in decoded:
                print(f"Found at index {i}: {decoded}")
        except Exception:
            pass
