import re

with open('/Users/admin/Desktop/workspace/Khach_hang/tai/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

post_view_html = """
    <div id="single-post-view" style="display: none;">
      <header class="post-header">
        <button id="post-back-btn" class="post-back-btn" aria-label="Go back">&larr; Back to Portfolio</button>
      </header>
      <div class="post-hero">
        <div id="post-media-container" class="post-media-container"></div>
      </div>
      <div class="post-content-wrapper">
        <div id="post-meta" class="post-meta"></div>
        <h1 id="post-title" class="post-title"></h1>
        <div id="post-tags" class="post-tags"></div>
        <div id="post-body" class="post-body"></div>
      </div>
    </div>
"""

if '<div id="single-post-view"' not in html:
    html = html.replace('    <script src="./content-data.js"></script>', post_view_html + '\n    <script src="./content-data.js"></script>')
    with open('/Users/admin/Desktop/workspace/Khach_hang/tai/index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Added single-post-view to index.html")
else:
    print("Already exists")
