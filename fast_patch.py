import urllib.parse
import base64

replacements = {
    "Titan": "Student",
    "  Principal Product Designer......2026-Present": "  M.Kumarasamy College of Eng.....2023-2027",
    "zeta": "Projects",
    "  Principal Product Designer......2026": "  LSTM Scalping Bot...............2024",
    "  Sr. UX Designer.................2024-2025": "  Advanced Trading AI.............2024",
    "  UX Designer II..................2021-2023": "  Retail Management System........2023",
    "  Sr. Motion Graphic Designer.....2021": "  UI/UX Designer..................2023",
    "  Motion Graphic Designer.........2018-2021": "  Quantative Trader.............2023",
    "  Video Intern....................2017": "  Python, HTML&CSS, C#............2023"
}

def custom_encode(s):
    b64 = base64.b64encode(urllib.parse.quote(s, safe='~()*!.\'').encode()).decode()
    custom = ''
    for c in b64:
        if 'A' <= c <= 'Z': custom += c.lower()
        elif 'a' <= c <= 'z': custom += c.upper()
        else: custom += c
    return custom.replace('=', '')

with open('OS/js/os-app.js', 'r') as f:
    content = f.read()

count = 0
for orig, new_str in replacements.items():
    orig_enc = custom_encode(orig)
    new_enc = custom_encode(new_str)
    
    if orig_enc in content:
        content = content.replace(f"'{orig_enc}'", f"'{new_enc}'")
        print(f"Replaced {orig} with {new_str}")
        count += 1
    else:
        print(f"Warning: {orig_enc} ({orig}) not found in os-app.js!")

with open('OS/js/os-app.js', 'w') as f:
    f.write(content)

print(f"Total replacements: {count}")
