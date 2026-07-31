import os
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

doc = docx.Document()

# Set tight margins to guarantee exact 1-page fit
for section in doc.sections:
    section.top_margin = Inches(0.32)
    section.bottom_margin = Inches(0.32)
    section.left_margin = Inches(0.40)
    section.right_margin = Inches(0.40)

COLOR_PRIMARY = RGBColor(15, 23, 42)    # #0f172a
COLOR_ACCENT = RGBColor(37, 99, 235)   # #2563eb
COLOR_MUTED = RGBColor(71, 85, 105)    # #475569

def set_para_spacing(p, before=0, after=1, line_spacing=1.05):
    p.paragraph_format.space_before = Pt(before)
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.line_spacing = line_spacing

def add_heading(text):
    p = doc.add_paragraph()
    set_para_spacing(p, 4, 1.5, 1.0)
    r = p.add_run(text.upper())
    r.font.name = 'Calibri'
    r.font.size = Pt(8.8)
    r.font.bold = True
    r.font.color.rgb = COLOR_PRIMARY

def add_body(text):
    p = doc.add_paragraph()
    set_para_spacing(p, 0, 1.5, 1.05)
    r = p.add_run(text)
    r.font.name = 'Calibri'
    r.font.size = Pt(8)
    r.font.color.rgb = COLOR_PRIMARY

def add_bullet(bold_prefix, text):
    p = doc.add_paragraph(style='List Bullet')
    set_para_spacing(p, 0, 1, 1.05)
    p.paragraph_format.left_indent = Inches(0.16)
    if bold_prefix:
        r1 = p.add_run(bold_prefix)
        r1.font.name = 'Calibri'
        r1.font.size = Pt(8)
        r1.font.bold = True
        r1.font.color.rgb = COLOR_PRIMARY
    r2 = p.add_run(text)
    r2.font.name = 'Calibri'
    r2.font.size = Pt(8)
    r2.font.color.rgb = COLOR_PRIMARY

def add_subhead(left_text, right_text=""):
    p = doc.add_paragraph()
    set_para_spacing(p, 2, 0.5, 1.0)
    r1 = p.add_run(left_text)
    r1.font.name = 'Calibri'
    r1.font.size = Pt(8.5)
    r1.font.bold = True
    r1.font.color.rgb = COLOR_PRIMARY
    if right_text:
        r2 = p.add_run("   " + right_text)
        r2.font.name = 'Calibri'
        r2.font.size = Pt(8)
        r2.font.italic = True
        r2.font.color.rgb = COLOR_MUTED

def add_project_header(title, overview, live_url, github_url):
    p = doc.add_paragraph()
    set_para_spacing(p, 2.5, 0.5, 1.0)
    
    r_t = p.add_run(title + " ")
    r_t.font.name = 'Calibri'
    r_t.font.size = Pt(8.5)
    r_t.font.bold = True
    r_t.font.color.rgb = COLOR_PRIMARY
    
    r_ov = p.add_run(f"({overview})  —  ")
    r_ov.font.name = 'Calibri'
    r_ov.font.size = Pt(8)
    r_ov.font.italic = True
    r_ov.font.color.rgb = COLOR_MUTED
    
    r_l = p.add_run("Live Demo  |  ")
    r_l.font.name = 'Calibri'
    r_l.font.size = Pt(8)
    r_l.font.bold = True
    r_l.font.color.rgb = COLOR_ACCENT
    
    r_g = p.add_run("GitHub")
    r_g.font.name = 'Calibri'
    r_g.font.size = Pt(8)
    r_g.font.bold = True
    r_g.font.color.rgb = COLOR_ACCENT

def add_project_stack(stack_str):
    p = doc.add_paragraph()
    set_para_spacing(p, 0, 1, 1.0)
    r = p.add_run(stack_str)
    r.font.name = 'Calibri'
    r.font.size = Pt(7.5)
    r.font.bold = True
    r.font.color.rgb = COLOR_ACCENT

# 1. HEADING
p_head = doc.add_paragraph()
p_head.alignment = WD_ALIGN_PARAGRAPH.CENTER
set_para_spacing(p_head, 0, 1, 1.0)

r_name = p_head.add_run("MIZBAUR RAHMAN ZIHAD\n")
r_name.font.name = 'Calibri'
r_name.font.size = Pt(14.5)
r_name.font.bold = True
r_name.font.color.rgb = COLOR_PRIMARY

r_title = p_head.add_run("Junior Full-Stack Developer\n")
r_title.font.name = 'Calibri'
r_title.font.size = Pt(9.5)
r_title.font.bold = True
r_title.font.color.rgb = COLOR_ACCENT

r_contact = p_head.add_run("Sylhet, Bangladesh  |  +8801865662482  |  zihad.pilot18@gmail.com  |  GitHub: github.com/Zihad-1883  |  LinkedIn  |  Portfolio: zihad-portfolio.vercel.app")
r_contact.font.name = 'Calibri'
r_contact.font.size = Pt(8)
r_contact.font.color.rgb = COLOR_MUTED

# 2. CAREER OBJECTIVE
add_heading("1. Career Objective")
add_body("Passionate web developer aiming to grow into a full-stack and backend developer, continuously exploring modern technologies along the way. I aspire to contribute to impactful projects in the tech industry while expanding my skills in system design and scalable architecture. In the long term, I plan to venture into AI and Machine Learning, which aligns naturally with my academic background in Mathematics.")

# 3. SKILLS
add_heading("2. Technical & Interpersonal Skills")
add_bullet("Frontend & Styling: ", "HTML5, CSS3, JavaScript ES6+, TypeScript, React.js, Next.js, Tailwind CSS, DaisyUI, HeroUI, Framer Motion")
add_bullet("Backend & Database: ", "Node.js, Express.js, PostgreSQL, Prisma ORM, MongoDB, NeonDB, REST API, JWT, Better Auth, Bcrypt, RBAC")
add_bullet("Tools & Deployment: ", "Git, GitHub, VS Code, Vite, npm, Postman, Figma, Vercel, Netlify, Render")
add_bullet("AI Workflow: ", "ChatGPT, Gemini, Claude, Antigravity, AI-assisted debugging, documentation support, prompt engineering")
add_bullet("Interpersonal Skills: ", "Logical reasoning, Problem Solving, Growth Mindset, Effective Communication")

# 4. PROFESSIONAL EXPERIENCE
add_heading("3. Professional Experience")
add_subhead("FlyRank AI  —  Back-End AI Engineering Intern", "July 2026 – Sept 2026")
add_bullet("", "Architected backend API routes using Express.js & Node.js to stream LLM responses and manage asynchronous background tasks.")
add_bullet("", "Integrated vector search workflows and AI prompt pipelines utilizing PostgreSQL, TypeScript, and cloud infrastructure.")
add_bullet("", "Enforced strict API contract testing, schema validation, and remote-first version control standards.")

# 5. PROJECTS
add_heading("4. Projects")

add_project_header("GearUp", "Peer-to-Peer Rental API", "https://gearup-backend-4eca.onrender.com/", "https://github.com/Zihad-1883/L2-A4-Gear-Up")
add_project_stack("Tech Stack: Node.js, Express.js, TypeScript, PostgreSQL, Prisma ORM, SSLCommerz, JWT, Bcrypt")
add_bullet("", "Built a peer-to-peer equipment rental API supporting a 5-stage order lifecycle state machine (PENDING ➔ APPROVED ➔ PAID ➔ PICKED_UP ➔ RETURNED).")
add_bullet("", "Implemented Multi-Role Access Control (RBAC) separating CUSTOMER bookings, PROVIDER equipment controls, and ADMIN system oversight.")
add_bullet("", "Integrated two-step SSLCommerz payment validation with server-to-server verification APIs and IPN webhooks.")

add_project_header("ErythroShare", "Healthcare & Donation Portal", "https://l1-a10-erythro-share-client.vercel.app/", "https://github.com/Zihad-1883/L1-A10-ErythroShare-Client")
add_project_stack("Tech Stack: Next.js 16 (App Router), Express.js, MongoDB, Better Auth, Tailwind CSS, JWT")
add_bullet("", "Engineered a multi-role healthcare coordination portal managing permissions for ADMIN, VOLUNTEER, and DONOR users.")
add_bullet("", "Built protected Express REST API endpoints with session caching and real-time blood request dispatch tracking.")
add_bullet("", "Implemented donor search indexing by blood group, district, and availability status to streamline emergency requests.")

add_project_header("NextKey", "Property Rental Platform", "https://project-next-key.vercel.app/", "https://github.com/Zihad-1883/Project-Next-Key")
add_project_stack("Tech Stack: Next.js 16 (App Router), Express 5, TypeScript, MongoDB, Monorepo Architecture")
add_bullet("", "Designed a full-stack monorepo property rental platform sharing TypeScript interfaces between Next.js App Router client and Express TS backend.")
add_bullet("", "Developed a dynamic multi-parameter database query engine for property filtering (price range, category, bed/bath count, location).")
add_bullet("", "Built a dedicated Landlord rental management dashboard with request tracking and tenant approval workflows.")

# 6. EDUCATION
add_heading("5. Education")
add_subhead("Shahjalal University of Science and Technology (SUST), Sylhet  —  B.Sc. in Mathematics (3rd Year)", "2023 – Present")
add_body("Core Focus: Analytical Problem Solving, Discrete Mathematics, Logic Optimization, Algorithms.")

# 7. LANGUAGE PROFICIENCY
add_heading("6. Language Proficiency")
add_body("Bangla (Native)  |  English (Intermediate Professional Working Proficiency)")

doc_path = r"e:\001_Zihad-Programming\Portfolio\public\RESUME_UPDATED.docx"
doc.save(doc_path)
print("DOCX created successfully at:", doc_path)
