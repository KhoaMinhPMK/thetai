import re

file_path = '/Users/admin/Desktop/workspace/Khach_hang/tai/script.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ('navProfile: "Hồ sơ"', 'navProfile: "Hồ sơ 👤"'),
    ('navAcademics: "Học thuật"', 'navAcademics: "Học thuật 🎓"'),
    ('navCases: "Dự án"', 'navCases: "Dự án 💼"'),
    ('navVentures: "Khởi nghiệp"', 'navVentures: "Khởi nghiệp 🚀"'),
    ('navJournal: "Nhật ký"', 'navJournal: "Nhật ký 📖"'),
    ('navContact: "Liên hệ"', 'navContact: "Liên hệ 📞"'),
    ('heroLabel: "Portfolio cá nhân"', 'heroLabel: "Portfolio cá nhân 📂"'),
    ('heroCopy:\n      "Một operator-builder có kỷ luật, được đào tạo qua kinh doanh quốc tế, logistics, supply chain, vận hành khởi nghiệp và giải quyết vấn đề dựa trên nghiên cứu."',
     'heroCopy:\n      "Một operator-builder có kỷ luật, được đào tạo qua kinh doanh quốc tế 🌍, logistics 🚚, supply chain 🔗, vận hành khởi nghiệp 🚀 và giải quyết vấn đề dựa trên nghiên cứu 🔬."'),
    ('heroCases: "Xem dự án"', 'heroCases: "Xem dự án 💼"'),
    ('heroArchive: "Nội dung đầy đủ"', 'heroArchive: "Nội dung đầy đủ 📚"'),
    ('statAchievements: "Thành tích học thuật"', 'statAchievements: "Thành tích học thuật 🏆"'),
    ('statDegrees: "Bằng cấp trọng điểm"', 'statDegrees: "Bằng cấp trọng điểm 🎓"'),
    ('statVentures: "Dự án khởi nghiệp"', 'statVentures: "Dự án khởi nghiệp 🏢"'),
    ('profileTitle: "Hồ sơ & Tổng quan"', 'profileTitle: "Hồ sơ & Tổng quan 👤"'),
    ('profileIntro:\n      "Lớp đầu của portfolio giúp nhà tuyển dụng nắm nhanh hồ sơ, bằng chứng, kỹ năng và thông tin liên hệ trước khi đi vào toàn bộ archive dự án."',
     'profileIntro:\n      "Lớp đầu của portfolio giúp nhà tuyển dụng nắm nhanh hồ sơ 🧑‍💼, bằng chứng 📄, kỹ năng 🛠️ và thông tin liên hệ 📬 trước khi đi vào toàn bộ archive dự án 🗄️."'),
    ('bioSentence:\n      "Một người học có kỷ luật cao và năng lực vận hành thực chiến, với nền tảng mạnh về kinh doanh quốc tế, logistics, khởi nghiệp và giải quyết vấn đề dựa trên nghiên cứu."',
     'bioSentence:\n      "Một người học có kỷ luật cao và năng lực vận hành thực chiến, với nền tảng mạnh về kinh doanh quốc tế 🌐, logistics 📦, khởi nghiệp 🚀 và giải quyết vấn đề dựa trên nghiên cứu 🔍."'),
    ('academicsTitle: "Nền tảng học thuật"', 'academicsTitle: "Nền tảng học thuật 🏛️"'),
    ('casesTitle: "Hồ sơ dự án"', 'casesTitle: "Hồ sơ dự án 📁"'),
    ('casesIntro:\n      "Mỗi hồ sơ ghép narrative dài bạn cung cấp với tư liệu hình ảnh tương ứng. Văn bản được render từ source đầy đủ và không bỏ section."',
     'casesIntro:\n      "Mỗi hồ sơ ghép narrative dài bạn cung cấp với tư liệu hình ảnh tương ứng 🖼️. Văn bản được render từ source đầy đủ và không bỏ section 📄."'),
    ('venturesTitle: "Ventures & Leadership Logs"', 'venturesTitle: "Ventures & Leadership Logs 🚢"'),
    ('journalTitle: "Long-form Journal"', 'journalTitle: "Long-form Journal 📖"'),
    ('archiveTitle: "Complete Source Archive"', 'archiveTitle: "Complete Source Archive 🗄️"'),
    ('archiveIntro: "Khu vực này render toàn bộ source file ngay trong trang để kiểm tra và đối chiếu."', 'archiveIntro: "Khu vực này render toàn bộ source file ngay trong trang để kiểm tra và đối chiếu ✅."'),
    ('contactTitle: "Thông tin liên hệ"', 'contactTitle: "Thông tin liên hệ 📞"'),
    ('readFull: "Đọc toàn bộ nội dung"', 'readFull: "Đọc toàn bộ nội dung 🔍"'),
    ('openAsset: "Mở tư liệu"', 'openAsset: "Mở tư liệu 📂"'),
    ('sourceFile: "Source file"', 'sourceFile: "Source file 📄"'),

    ('navProfile: "Profile"', 'navProfile: "Profile 👤"'),
    ('navAcademics: "Academics"', 'navAcademics: "Academics 🎓"'),
    ('navCases: "Cases"', 'navCases: "Cases 💼"'),
    ('navVentures: "Ventures"', 'navVentures: "Ventures 🚀"'),
    ('navJournal: "Journal"', 'navJournal: "Journal 📖"'),
    ('navContact: "Contact"', 'navContact: "Contact 📞"'),
    ('heroLabel: "Personal Portfolio"', 'heroLabel: "Personal Portfolio 📂"'),
    ('heroCopy:\n      "A disciplined operator-builder trained across international business, logistics, supply chain, venture execution, and research-based problem solving."',
     'heroCopy:\n      "A disciplined operator-builder trained across international business 🌍, logistics 🚚, supply chain 🔗, venture execution 🚀, and research-based problem solving 🔬."'),
    ('heroCases: "View Cases"', 'heroCases: "View Cases 💼"'),
    ('heroArchive: "Full Content"', 'heroArchive: "Full Content 📚"'),
    ('statAchievements: "Academic achievements"', 'statAchievements: "Academic achievements 🏆"'),
    ('statDegrees: "Top-tier degrees"', 'statDegrees: "Top-tier degrees 🎓"'),
    ('statVentures: "Venture startups"', 'statVentures: "Venture startups 🏢"'),
    ('profileTitle: "Profile & Overview"', 'profileTitle: "Profile & Overview 👤"'),
    ('profileIntro:\n      "The front layer of the portfolio gives recruiters a fast read on profile, evidence, skills, and contact information before moving into the complete project archive."',
     'profileIntro:\n      "The front layer of the portfolio gives recruiters a fast read on profile 🧑‍💼, evidence 📄, skills 🛠️, and contact information 📬 before moving into the complete project archive 🗄️."'),
    ('bioSentence:\n      "A high-discipline learner and operator with strong foundations in international business, logistics, entrepreneurship, and research-driven problem solving."',
     'bioSentence:\n      "A high-discipline learner and operator with strong foundations in international business 🌐, logistics 📦, entrepreneurship 🚀, and research-driven problem solving 🔍."'),
    ('academicsTitle: "Academic Foundation"', 'academicsTitle: "Academic Foundation 🏛️"'),
    ('casesTitle: "Project Dossiers"', 'casesTitle: "Project Dossiers 📁"'),
    ('casesIntro:\n      "Each dossier pairs the supplied long-form narrative with the closest matching visual material. The text is rendered from the full source file without removing sections."',
     'casesIntro:\n      "Each dossier pairs the supplied long-form narrative with the closest matching visual material 🖼️. The text is rendered from the full source file without removing sections 📄."'),
    ('contactTitle: "Contact Information"', 'contactTitle: "Contact Information 📞"'),
    ('readFull: "Read full content"', 'readFull: "Read full content 🔍"'),
    ('openAsset: "Open material"', 'openAsset: "Open material 📂"')
]

for old, new in replacements:
    content = content.replace(old, new)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done script.js!")
