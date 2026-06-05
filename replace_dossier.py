import re

with open('/Users/admin/Desktop/workspace/Khach_hang/tai/styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Delete old .dossier related blocks to ensure clean injection
blocks_to_remove = [
    r'\.dossier \{[^}]*\}',
    r'\.dossier:nth-child\(even\) \{[^}]*\}',
    r'\.dossier:nth-child\(even\) \.dossier-media \{[^}]*\}',
    r'\.compact-dossiers \.dossier \{[^}]*\}',
    r'\.compact-dossiers \.dossier:nth-child\(even\) \{[^}]*\}',
    r'\.dossier-media \{[^}]*\}',
    r'\.dossier-media-frame \{[^}]*\}',
    r'\.compact-dossiers \.dossier-media-frame \{[^}]*\}',
    r'\.dossier-media-caption \{[^}]*\}',
    r'\.dossier-content h3 \{[^}]*\}',
    r'\.dossier-summary \{[^}]*\}',
    r'\.dossier-links \{[^}]*\}',
    r'\.details-panel \{[^}]*\}',
    r'\.details-panel summary \{[^}]*\}',
    r'\.details-panel summary::after \{[^}]*\}',
    r'\.details-panel\[open\] summary::after \{[^}]*\}',
    r'\.details-panel\[open\] summary \{[^}]*\}'
]

for b in blocks_to_remove:
    css = re.sub(b, '', css, flags=re.MULTILINE)

# Clean up empty lines
css = re.sub(r'\n\s*\n\s*\n', '\n\n', css)

new_dossier_css = """
.dossier {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: #111827; /* Dark background similar to ref */
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin-bottom: 24px;
}

.dossier-media {
  flex: 0 0 45%;
  position: relative;
}

.dossier-media img, .dossier-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.dossier-featured {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #a855f7;
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 12px;
  z-index: 2;
}

.dossier-content {
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dossier-meta {
  color: #94a3b8;
  font-size: 13px;
  margin-bottom: 12px;
  font-family: "Plus Jakarta Sans", sans-serif;
}

.dossier-title {
  color: #ffffff;
  margin: 0 0 12px;
  font-family: "Fraunces", Georgia, serif;
  font-size: clamp(21px, 2.8vw, 32px);
  line-height: 1.2;
}

.dossier-summary {
  color: #94a3b8;
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 24px;
  text-align: justify;
}

.details-panel {
  border: none;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  margin-top: auto;
  width: 100%;
}

.dossier-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  list-style: none;
}
.dossier-footer::-webkit-details-marker {
  display: none;
}

.dossier-tags {
  display: flex;
  gap: 8px;
}

.dossier-tag {
  background: #06b6d4;
  color: #0f172a;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 12px;
  text-transform: capitalize;
}

.dossier-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.dossier-asset-link, .dossier-read-more {
  color: #c084fc;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.dossier-asset-link:hover, .dossier-read-more:hover {
  opacity: 0.8;
}

.dossier-body {
  margin-top: 24px;
  color: #cbd5e1;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
}

@media (max-width: 900px) {
  .dossier {
    flex-direction: column;
  }
  .dossier-media {
    flex: auto;
    width: 100%;
    aspect-ratio: 16/9;
  }
  .dossier-content {
    padding: 24px;
  }
}
"""

# Insert new css at the end of .dossier-list
css = css.replace('.dossier-list {\n  display: grid;\n  gap: 34px;\n}', '.dossier-list {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n' + new_dossier_css)

with open('/Users/admin/Desktop/workspace/Khach_hang/tai/styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Styles replaced.")
