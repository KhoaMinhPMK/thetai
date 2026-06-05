import re

with open('/Users/admin/Desktop/workspace/Khach_hang/tai/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Add state.sections
if 'loadedSources: {},' in js:
    js = js.replace('loadedSources: {},', 'loadedSources: {},\n  sections: {},')

# 2. Update renderDossiers to save sections and pass source.key
render_dossier_old = """      const sections = splitIntoSections(text, source.key, source.title);
      const target = document.getElementById(source.target);
      target.innerHTML = "";
      sections.forEach((section, index) => {
        target.appendChild(createDossier(section, index));
      });"""
render_dossier_new = """      const sections = splitIntoSections(text, source.key, source.title);
      state.sections[source.key] = sections;
      const target = document.getElementById(source.target);
      target.innerHTML = "";
      sections.forEach((section, index) => {
        target.appendChild(createDossier(section, index, source.key));
      });"""
js = js.replace(render_dossier_old, render_dossier_new)

# 3. Update createDossier signature and logic
# Old: function createDossier(section, index) {
# New: function createDossier(section, index, sourceKey) {
js = js.replace('function createDossier(section, index) {', 'function createDossier(section, index, sourceKey) {')

# Remove <details> and <summary> from createDossier.
# Wait, let's just rewrite the end of createDossier via regex or replacing string.
old_create_dossier_end = """  const details = document.createElement("details");
  details.className = "details-panel";
  if (index < 2) details.open = true;

  const summaryToggle = document.createElement("summary");
  summaryToggle.className = "dossier-footer";"""

new_create_dossier_end = """  const summaryToggle = document.createElement("div");
  summaryToggle.className = "dossier-footer";
  summaryToggle.onclick = () => {
    window.location.hash = `#post-${sourceKey}-${index}`;
  };"""
js = js.replace(old_create_dossier_end, new_create_dossier_end)

# Also remove appending body to details, and details to content.
old_body_append = """  const body = document.createElement("div");
  body.className = "dossier-body";
  appendTextLines(body, section.lines);

  details.append(summaryToggle, body);
  content.append(metaRow, title, summary, details);"""

new_body_append = """  content.append(metaRow, title, summary, summaryToggle);"""
js = js.replace(old_body_append, new_body_append)

# Also remove the action link prevent default / stopPropagation
js = js.replace('assetLink.onclick = (e) => e.stopPropagation();', '')

# Remove assetLink completely since user requested to remove the "Mở tư liệu" button
js = js.replace("""  const assetLink = document.createElement("a");
  assetLink.className = "dossier-asset-link";
  assetLink.href = media.url;
  assetLink.target = "_blank";
  assetLink.rel = "noreferrer";
  assetLink.dataset.openAsset = "";
  assetLink.textContent = translations[state.lang].openAsset;

  const readMore = document.createElement("span");""", """  const readMore = document.createElement("span");""")

js = js.replace('actions.append(assetLink, readMore);', 'actions.append(readMore);')

# 4. Add openSinglePost logic
single_post_logic = """
function openSinglePost(sourceKey, index) {
  const section = state.sections[sourceKey]?.[index];
  if (!section) return;

  const main = document.getElementById("home");
  const postView = document.getElementById("single-post-view");
  main.style.display = "none";
  postView.style.display = "block";
  window.scrollTo(0, 0);

  const media = findMedia(section);
  const mediaContainer = document.getElementById("post-media-container");
  mediaContainer.innerHTML = "";
  mediaContainer.appendChild(renderMediaElement(media));

  const readTime = Math.max(1, Math.floor(section.lines.length / 4));
  document.getElementById("post-meta").innerHTML = `📅 Dossier ${String(index + 1).padStart(2, "0")} <span style="opacity: 0.5; margin: 0 8px;">|</span> ⏱️ ${readTime} phút đọc`;
  
  document.getElementById("post-title").textContent = normalizeHeading(section.title);

  const tagStr = (section.title.split(" ")[0] || "Portfolio").replace(/[^a-zA-Z]/g, '').toLowerCase() || "portfolio";
  document.getElementById("post-tags").innerHTML = `<span class="dossier-tag">${tagStr}</span><span class="dossier-tag">case study</span>`;

  const body = document.getElementById("post-body");
  body.innerHTML = "";
  appendTextLines(body, section.lines);
}

function closeSinglePost() {
  document.getElementById("home").style.display = "block";
  document.getElementById("single-post-view").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("post-back-btn");
  if (backBtn) {
    backBtn.onclick = () => {
      // Go back to the previous section hash or home
      window.history.back();
    };
  }
});
"""

js += '\n' + single_post_logic

# 5. Update hashchange listener
hashchange_old = """function handleHash() {
  const hash = window.location.hash.slice(1) || "home";
  navigate(hash);
}"""
hashchange_new = """function handleHash() {
  const hash = window.location.hash.slice(1) || "home";
  if (hash.startsWith("post-")) {
    const parts = hash.split("-");
    if (parts.length >= 3) {
      const sourceKey = parts[1];
      const index = parseInt(parts[2], 10);
      openSinglePost(sourceKey, index);
      return;
    }
  }
  closeSinglePost();
  navigate(hash);
}"""
js = js.replace(hashchange_old, hashchange_new)

with open('/Users/admin/Desktop/workspace/Khach_hang/tai/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("script.js patched for single post view")
