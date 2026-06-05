import re

file_path = '/Users/admin/Desktop/workspace/Khach_hang/tai/index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('<span>Contact</span>', '<span>Contact 📧</span>'),
    ('<span class="footer-kicker">Portfolio System</span>', '<span class="footer-kicker">Portfolio System 🌟</span>'),
    ('<p>Supply Chain & Operations portfolio built with bilingual content, project evidence and full source archive.</p>', '<p>Supply Chain & Operations portfolio built with bilingual content, project evidence and full source archive 🚀.</p>')
]

for old, new in replacements:
    content = content.replace(old, new)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done index.html (more)!")
