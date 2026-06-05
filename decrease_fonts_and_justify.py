import re

file_path = '/Users/admin/Desktop/workspace/Khach_hang/tai/styles.css'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Justify all text paragraphs
# Find where p is defined and add text-align: justify
if 'p {\n  overflow-wrap: anywhere;' in content:
    content = content.replace(
        'p {\n  overflow-wrap: anywhere;\n}',
        'p {\n  overflow-wrap: anywhere;\n  text-align: justify;\n}'
    )
elif 'h3,\nh4,\np {\n  overflow-wrap: anywhere;\n}' in content:
    content = content.replace(
        'h3,\nh4,\np {\n  overflow-wrap: anywhere;\n}',
        'h3,\nh4,\np {\n  overflow-wrap: anywhere;\n}\n\np {\n  text-align: justify;\n}'
    )

# 2. Scale font sizes for titles
def scale_font_size(match):
    prefix = match.group(1)
    val = match.group(2)
    
    # Check if it's clamp
    if 'clamp' in val:
        def scale_clamp(m_clamp):
            min_val = float(m_clamp.group(1)) * 0.7
            mid_val = float(m_clamp.group(2)) * 0.7
            max_val = float(m_clamp.group(3)) * 0.7
            # round min and max, keep 1 decimal for vw
            return f"clamp({int(round(min_val))}px, {round(mid_val, 1)}vw, {int(round(max_val))}px)"
        
        new_val = re.sub(r'clamp\(\s*([\d.]+)px\s*,\s*([\d.]+)vw\s*,\s*([\d.]+)px\s*\)', scale_clamp, val)
    else:
        # Check if it's px
        m_px = re.search(r'([\d.]+)px', val)
        if m_px:
            new_val = f"{int(round(float(m_px.group(1)) * 0.7))}px"
        else:
            new_val = val
            
    return f"{prefix}{new_val}"

# Target specific title classes or tags to reduce font size
targets = [
    r'(h3 \{[^}]*font-size:\s*)([^;]+)',
    r'(\.large-copy \{[^}]*font-size:\s*)([^;]+)',
    r'(\.hero h1 \{[^}]*font-size:\s*)([^;]+)',
    r'(\.section-intro h2 \{[^}]*font-size:\s*)([^;]+)',
    r'(\.home-tile h3 \{[^}]*font-size:\s*)([^;]+)',
    r'(\.home-signal-panel h3 \{[^}]*font-size:\s*)([^;]+)',
    r'(\.masterpiece-rail h3 \{[^}]*font-size:\s*)([^;]+)',
    r'(\.research-heading h3 \{[^}]*font-size:\s*)([^;]+)',
    r'(\.ventures-hero h2 \{[^}]*font-size:\s*)([^;]+)',
    r'(\.dossier-title \{[^}]*font-size:\s*)([^;]+)',
    r'(\.site-footer h2 \{[^}]*font-size:\s*)([^;]+)',
    r'(footer h2 \{[^}]*font-size:\s*)([^;]+)'
]

for t in targets:
    content = re.sub(t, scale_font_size, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Font sizes reduced and text justified!")
