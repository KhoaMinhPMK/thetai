import json
import os

with open('/Users/admin/Desktop/workspace/SANKIT/tai/content/cases.txt', 'r', encoding='utf-8') as f:
    cases = f.read()

with open('/Users/admin/Desktop/workspace/SANKIT/tai/content/ventures.txt', 'r', encoding='utf-8') as f:
    ventures = f.read()

content_data = {
    "cases": cases,
    "ventures": ventures
}

js_content = "window.PORTFOLIO_CONTENT = " + json.dumps(content_data) + ";\n"

with open('/Users/admin/Desktop/workspace/SANKIT/tai/content-data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
print("Updated content-data.js successfully.")
