import re
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

def custom_decode(s):
    alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='
    std_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    trans = str.maketrans(alphabet, std_alphabet)
    
    std_b64 = s.translate(trans)
    # Add padding if needed
    std_b64 += '=' * (4 - len(std_b64) % 4)
    
    try:
        decoded = base64.b64decode(std_b64).decode()
        return urllib.parse.unquote(decoded)
    except Exception:
        return ""

with open('OS/js/os-app.js', 'r') as f:
    content = f.read()

match = re.search(r'(_0x[a-zA-Z0-9]*=\[)([^\]]*)(\])', content)
if match:
    prefix = match.group(1)
    array_str = match.group(2)
    suffix = match.group(3)
    
    # split by ',' (including quotes, but wait, the string is `'a','b','c'`)
    # let's just strip the first and last quote, then split by "','", then modify, then join with "','"
    if array_str.startswith("'") and array_str.endswith("'"):
        items = array_str[1:-1].split("','")
        
        modified = False
        for i, item in enumerate(items):
            dec = custom_decode(item)
            if dec in replacements:
                items[i] = custom_encode(replacements[dec])
                modified = True
                print(f"Replaced: {dec} -> {replacements[dec]}")
                
        if modified:
            new_array_str = "'" + "','".join(items) + "'"
            
            # literal string replace of array_str with new_array_str
            # note: there should only be one occurrence of array_str if it's huge
            new_content = content.replace(prefix + array_str + suffix, prefix + new_array_str + suffix, 1)
            
            with open('OS/js/os-app.js', 'w') as f:
                f.write(new_content)
            print("Successfully patched OS/js/os-app.js!")
        else:
            print("No matches found.")
    else:
        print("Array string doesn't start and end with quotes.")
else:
    print("No array match found.")

