import re

with open('OS/config.js', 'r') as f:
    content = f.read()

# Replace geeksforgeeks with skills
content = re.sub(r'geeksforgeeks', 'skills', content, flags=re.IGNORECASE)
content = re.sub(r'\[2019-2021\]', '[2023-Present]', content, flags=re.IGNORECASE)

# Replace titan with student
content = re.sub(r'titan', 'student', content, flags=re.IGNORECASE)
content = re.sub(r'\[2026-now\]', '[2023-2027]', content, flags=re.IGNORECASE)

# Replace zeta with projects
content = re.sub(r'zeta', 'projects', content, flags=re.IGNORECASE)
content = re.sub(r'\[2021-2026\]', '[2023-2024]', content, flags=re.IGNORECASE)

with open('OS/config.js', 'w') as f:
    f.write(content)

print("Patched config.js successfully")
