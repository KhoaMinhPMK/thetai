import re

file_path = '/Users/admin/Desktop/workspace/Khach_hang/tai/index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ("Personal Portfolio", "Personal Portfolio 📂"),
    ("Supply Chain & Operations Trainee Candidate</p>", "Supply Chain & Operations Trainee Candidate 📦</p>"),
    ("A disciplined operator-builder trained across international business, logistics, supply chain,\n            venture execution, and research-based problem solving.", 
     "A disciplined operator-builder trained across international business 🌍, logistics 🚚, supply chain 🔗,\n            venture execution 🚀, and research-based problem solving 🔬."),
    ("Academic achievements", "Academic achievements 🏆"),
    ("Top-tier degrees", "Top-tier degrees 🎓"),
    ("Venture startups", "Venture startups 🏢"),
    ("System Overview", "System Overview 🖥️"),
    ("Portfolio Intelligence Layer", "Portfolio Intelligence Layer 🧠"),
    ("Một lớp tổng quan giúp người xem nắm nhanh năng lực lõi trước khi đi vào từng tab chi tiết:\n            học thuật, dự án, venture, journal và liên hệ.",
     "Một lớp tổng quan giúp người xem nắm nhanh năng lực lõi trước khi đi vào từng tab chi tiết 📊:\n            học thuật 📚, dự án 💼, venture 🚀, journal ✍️ và liên hệ 📞."),
    (">Operations Strategy<", ">Operations Strategy ⚙️<"),
    ("Thiết kế quy trình, tối ưu nguồn lực, quản lý sprint và biến bài toán phức tạp thành hệ thống có thể vận hành.",
     "Thiết kế quy trình, tối ưu nguồn lực, quản lý sprint và biến bài toán phức tạp thành hệ thống có thể vận hành 📈."),
    (">Supply Chain Execution<", ">Supply Chain Execution ⛓️<"),
    ("Gắn logistics, tài chính, cold chain, procurement và fulfillment vào cùng một mô hình tăng trưởng.",
     "Gắn logistics, tài chính, cold chain, procurement và fulfillment vào cùng một mô hình tăng trưởng 🚛."),
    (">Venture Building<", ">Venture Building 🚀<"),
    ("Xây dựng Unistay, EduTynker và nhiều đội dự án từ ý tưởng đến traction, tài chính và vận hành thực tế.",
     "Xây dựng Unistay, EduTynker và nhiều đội dự án từ ý tưởng đến traction, tài chính và vận hành thực tế 💡."),
    (">Research Thinking<", ">Research Thinking 🔬<"),
    ("Kết hợp dữ liệu định lượng, mô hình hành vi, business insight và khuyến nghị ứng dụng cho doanh nghiệp.",
     "Kết hợp dữ liệu định lượng, mô hình hành vi, business insight và khuyến nghị ứng dụng cho doanh nghiệp 📊."),
    (">Current Focus<", ">Current Focus 🎯<"),
    ("Portfolio này được tổ chức như một dashboard năng lực: mỗi tab là một cụm bằng chứng riêng,\n              có hình ảnh, tài liệu và nội dung đầy đủ để kiểm chứng.",
     "Portfolio này được tổ chức như một dashboard năng lực 🎛️: mỗi tab là một cụm bằng chứng riêng 📁,\n              có hình ảnh 🖼️, tài liệu 📄 và nội dung đầy đủ để kiểm chứng ✅."),
    ("Awards in 2025", "Awards in 2025 🏆"),
    ("Users onboarded", "Users onboarded 👥"),
    ("Occupancy rate", "Occupancy rate 📈"),
    ("Community members", "Community members 🌟"),
    ("01. Index", "01. Index 📑"),
    (">Profile & Overview<", ">Profile & Overview 👤<"),
    ("The front layer of the portfolio gives recruiters a fast read on profile, evidence, skills,\n            and contact information before moving into the complete project archive.",
     "The front layer of the portfolio gives recruiters a fast read on profile 🧑‍💼, evidence 📄, skills 🛠️,\n            and contact information 📬 before moving into the complete project archive 🗄️."),
    ("Editorial Biography & Profile", "Editorial Biography & Profile 📝"),
    ("A high-discipline learner and operator with strong foundations in international business,\n              logistics, entrepreneurship, and research-driven problem solving.",
     "A high-discipline learner and operator with strong foundations in international business 🌐,\n              logistics 📦, entrepreneurship 🚀, and research-driven problem solving 🔍."),
    (">Key Performance Indicators<", ">Key Performance Indicators 📊<"),
    ("<strong>Academic Achievements:</strong>", "<strong>Academic Achievements 🏆:</strong>"),
    ("I believe 2025 will be a landmark year for my\n                achievements, as winning 10 awards in one year across two semesters at UEH University\n                truly requires overcoming many obstacles.",
     "I believe 2025 will be a landmark year for my\n                achievements, as winning 10 awards in one year across two semesters at UEH University\n                truly requires overcoming many obstacles 🏔️."),
    ("<strong>Top-Tier Degrees:</strong>", "<strong>Top-Tier Degrees 🎓:</strong>"),
    ("<strong>Venture Startups:</strong>", "<strong>Venture Startups 🚀:</strong>"),
    ("Global Product Marketing & Game Optimization Strategy", "Global Product Marketing & Game Optimization Strategy 🎮"),
    ("Preserving the cultural identity, history, and heritage of\n                11 Southeast Asian countries by finding the intersection between RPG and MMORPG mechanics.",
     "Preserving the cultural identity, history, and heritage of\n                11 Southeast Asian countries by finding the intersection between RPG and MMORPG mechanics 🌍."),
    ("Automated Container Defect Inspection Simulation", "Automated Container Defect Inspection Simulation 🤖"),
    ("Slashing average container scanning and validation times\n                from 25 minutes down to 5 minutes per container compared to traditional manual checks.",
     "Slashing average container scanning and validation times\n                from 25 minutes down to 5 minutes per container compared to traditional manual checks ⏱️."),
    ("End-to-end scalable supply chain model", "End-to-end scalable supply chain model 🔄"),
    ("Formulated an end-to-end business and scalable logistics\n                model, onboarding 500+ active users in month 1 and restructuring workflows to project a\n                20% net profit margin.",
     "Formulated an end-to-end business and scalable logistics\n                model, onboarding 500+ active users in month 1 and restructuring workflows to project a\n                20% net profit margin 📈."),
    ("02. Academics", "02. Academics 🎓"),
    (">Academic Foundation<", ">Academic Foundation 🏛️<"),
    (">2.1. University Overview<", ">2.1. University Overview 🏫<"),
    ("The University of Economics Ho Chi Minh City (UEH) is one of the key national universities,\n              with nearly 50 years of development, a high-quality faculty, and a wide-ranging\n              international cooperation network with over 125 partners worldwide.",
     "The University of Economics Ho Chi Minh City (UEH) is one of the key national universities,\n              with nearly 50 years of development, a high-quality faculty, and a wide-ranging\n              international cooperation network with over 125 partners worldwide 🌏."),
    (">Enterprise Resource Planning<", ">Enterprise Resource Planning 💻<"),
    (">International Business Project<", ">International Business Project 🌍<"),
    (">Business Simulation<", ">Business Simulation 🕹️<"),
    (">Scientific Research<", ">Scientific Research 🔬<"),
    ("Research portfolio with empirical methods, business impact, and applied strategy.", "Research portfolio with empirical methods, business impact, and applied strategy 📊."),
    (">Logistics Xanh Chặng Cuối & Kỷ Nguyên Logistics 5.0<", ">Logistics Xanh Chặng Cuối & Kỷ Nguyên Logistics 5.0 🍃<"),
    (">Tâm Lý Hành Vi Gen Z & Thị Trường Hàng Giả Cao Cấp<", ">Tâm Lý Hành Vi Gen Z & Thị Trường Hàng Giả Cao Cấp 🧠<"),
    ("03. Cases", "03. Cases 💼"),
    (">Project Dossiers<", ">Project Dossiers 📁<"),
    ("Each dossier pairs the supplied long-form narrative with the closest matching visual material.\n            The text is rendered from the full source file without removing sections.",
     "Each dossier pairs the supplied long-form narrative with the closest matching visual material 🖼️.\n            The text is rendered from the full source file without removing sections 📄."),
    ("04. Ventures", "04. Ventures 🚀"),
    (">Ventures & Leadership Logs<", ">Ventures & Leadership Logs 🚢<"),
    ("05. Journal", "05. Journal ✍️"),
    (">Long-form Journal<", ">Long-form Journal 📖<"),
    (">Full Text<", ">Full Text 📚<"),
    (">Complete Source Archive<", ">Complete Source Archive 🗄️<"),
    ("This area renders the complete source files in-page for review and verification.", "This area renders the complete source files in-page for review and verification ✅."),
    (">Contact Information<", ">Contact Information 📞<"),
    (">1.4. Skills, Tools & Global Credentials<", ">1.4. Skills, Tools & Global Credentials 🛠️<"),
    ("Languages:</strong>", "Languages 🗣️:</strong>"),
    ("Certifications:</strong>", "Certifications 📜:</strong>")
]

for old, new in replacements:
    content = content.replace(old, new)

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done index.html!")
