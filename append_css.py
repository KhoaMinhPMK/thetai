css = """
/* Single Post View Styles */
#single-post-view {
  background-color: #0f172a;
  min-height: 100vh;
  color: #f8fafc;
  padding-bottom: 80px;
}
.post-header {
  padding: 24px 5%;
  max-width: 1000px;
  margin: 0 auto;
}
.post-back-btn {
  background: transparent;
  border: none;
  color: #38bdf8;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 0;
  font-family: inherit;
  font-weight: 600;
  transition: color 0.2s;
}
.post-back-btn:hover {
  color: #7dd3fc;
}
.post-hero {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 5%;
}
.post-media-container {
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  background: #1e293b;
  aspect-ratio: 16/9;
}
.post-media-container img, .post-media-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post-content-wrapper {
  max-width: 760px;
  margin: 0 auto;
  padding: 48px 5% 0;
}
.post-meta {
  color: #94a3b8;
  font-size: 14px;
  margin-bottom: 16px;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.post-title {
  color: #ffffff;
  font-family: "Fraunces", Georgia, serif;
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.1;
  margin: 0 0 24px;
}
.post-tags {
  display: flex;
  gap: 12px;
  margin-bottom: 48px;
}
.post-body {
  color: #cbd5e1;
  font-size: 18px;
  line-height: 1.8;
  text-align: justify;
}
.post-body p {
  margin-bottom: 24px;
}
"""
with open('/Users/admin/Desktop/workspace/Khach_hang/tai/styles.css', 'a', encoding='utf-8') as f:
    f.write(css)
print("CSS appended.")
