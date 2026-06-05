import re
import os
import urllib.parse

def check_file(filepath):
    try:
        decoded = urllib.parse.unquote(filepath)
        if decoded.startswith('./'):
            decoded = decoded[2:]
        full_path = os.path.join('/Users/admin/Desktop/workspace/Khach_hang/tai', decoded)
        return os.path.exists(full_path), full_path
    except Exception as e:
        return False, str(e)

with open('/Users/admin/Desktop/workspace/Khach_hang/tai/content-data.js', 'r', encoding='utf-8') as f:
    js = f.read()

urls = re.findall(r'(?:url|poster):\s*"([^"]+)"', js)
urls += re.findall(r'<img[^>]+src="([^"]+)"', js)

urls = list(set(urls))
print("Missing files in content-data.js:")
for url in urls:
    if url.startswith('http'): continue
    if url.endswith('.js') or url.endswith('.css'): continue
    exists, path = check_file(url)
    if not exists:
        print(f"MISSING: {url} (checked {path})")
print("Done checking content.")
