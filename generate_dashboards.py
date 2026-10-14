import os
from PIL import Image, ImageDraw, ImageFont

# Font loader helper
def get_fonts():
    try:
        font_brand = ImageFont.truetype("arialbd.ttf", 20)
        font_h1 = ImageFont.truetype("arialbd.ttf", 22)
        font_h2 = ImageFont.truetype("arialbd.ttf", 15)
        font_bold = ImageFont.truetype("arialbd.ttf", 12)
        font_semi = ImageFont.truetype("arial.ttf", 12)
        font_stat_num = ImageFont.truetype("arialbd.ttf", 26)
        font_small = ImageFont.truetype("arial.ttf", 11)
        font_mono = ImageFont.truetype("consola.ttf", 11)
    except:
        font_brand = font_h1 = font_h2 = font_bold = font_semi = font_stat_num = font_small = font_mono = ImageFont.load_default()
    return font_brand, font_h1, font_h2, font_bold, font_semi, font_stat_num, font_small, font_mono

# ==============================================================================
# 1. IMAGE MATCHING ENGINE: AI Workbench / Dual-Column Layout with Visual Thumbnails
# ==============================================================================
def render_image_matching():
    width, height = 1200, 750
    img = Image.new("RGBA", (width, height), (241, 245, 249))
    draw = ImageDraw.Draw(img)
    f_brand, f_h1, f_h2, f_bold, f_semi, f_stat_num, f_small, f_mono = get_fonts()

    # Outer Card Base
    cx0, cy0, cx1, cy1 = 50, 35, width - 50, height - 35
    for i in range(12):
        draw.rounded_rectangle([cx0 - i, cy0 - i, cx1 + i, cy1 + i], radius=24, fill=(15, 23, 42, 6))
    draw.rounded_rectangle([cx0, cy0, cx1, cy1], radius=20, fill=(255, 255, 255))

    # Top Navbar (Full-width header)
    nav_h = 65
    draw.rounded_rectangle([cx0, cy0, cx1, cy0 + nav_h], radius=20, fill=(248, 250, 252))
    draw.rectangle([cx0, cy0 + 20, cx1, cy0 + nav_h], fill=(248, 250, 252))
    draw.line([cx0, cy0 + nav_h, cx1, cy0 + nav_h], fill=(226, 232, 240), width=1)

    # Brand
    draw.text((cx0 + 25, cy0 + 20), "◈ VectorMatch AI", fill=(13, 148, 136), font=f_brand) # Teal/Emerald
    
    # Nav items
    nav_links = ["Multimodal Explorer", "Vector Database", "Mismatch Guard", "Telemetry & Costs"]
    for idx, l in enumerate(nav_links):
        x = cx0 + 240 + (idx * 160)
        col = (13, 148, 136) if idx == 0 else (100, 116, 139)
        draw.text((x, cy0 + 24), l, fill=col, font=f_bold if idx == 0 else f_semi)
        if idx == 0:
            draw.line([x, cy0 + nav_h - 2, x + 120, cy0 + nav_h - 2], fill=(13, 148, 136), width=3)

    # Status Pill on right
    draw.rounded_rectangle([cx1 - 200, cy0 + 18, cx1 - 25, cy0 + 46], radius=8, fill=(204, 251, 241))
    draw.text((cx1 - 185, cy0 + 24), "● Gemini 1.5 Flash Active", fill=(15, 118, 110), font=f_small)

    # Metrics Strip
    metrics = [
        ("TOTAL VECTORS", "74,820", "pgvector 768d"),
        ("TOP-1 PRECISION", "100.0%", "Eval Benchmark"),
        ("AVG QUERY LATENCY", "0.78 ms", "Cosine Distance"),
        ("ESTIMATED COST", "$0.30 / 1M", "Gemini Embeddings")
    ]
    strip_y = cy0 + nav_h + 20
    m_w = (cx1 - cx0 - 50 - (len(metrics) - 1) * 16) / len(metrics)
    for idx, (label, val, sub) in enumerate(metrics):
        mx0 = cx0 + 25 + (idx * (m_w + 16))
        mx1 = mx0 + m_w
        draw.rounded_rectangle([mx0, strip_y, mx1, strip_y + 82], radius=12, fill=(248, 250, 252), outline=(226, 232, 240), width=1)
        draw.text((mx0 + 14, strip_y + 12), label, fill=(100, 116, 139), font=f_small)
        draw.text((mx0 + 14, strip_y + 30), val, fill=(15, 23, 42), font=f_stat_num)
        draw.text((mx0 + 14, strip_y + 60), sub, fill=(13, 148, 136), font=f_small)

    # Dual Column Body: Left is Live Match Cards, Right is Telemetry / Guard Inspector
    body_y = strip_y + 102
    body_w = cx1 - cx0 - 50
    left_w = int(body_w * 0.62)
    right_w = body_w - left_w - 20
    
    # Left Panel: Matched Items
    lx0, ly0 = cx0 + 25, body_y
    lx1 = lx0 + left_w
    draw.rounded_rectangle([lx0, ly0, lx1, cy1 - 25], radius=14, fill=(255, 255, 255), outline=(226, 232, 240), width=1)
    draw.text((lx0 + 20, ly0 + 16), "Multimodal Pairing Results", fill=(15, 23, 42), font=f_h2)
    draw.text((lx1 - 140, ly0 + 18), "Filter: High Confidence", fill=(100, 116, 139), font=f_small)
    draw.line([lx0, ly0 + 44, lx1, ly0 + 44], fill=(241, 245, 249), width=1)

    # 3 Match Cards
    match_items = [
        ("Post #402: Himalayan Alpine Expeditions", "alpine-summit-snow.jpg", "0.94 Cosine", "Mismatch Guard: PASSED", (16, 185, 129)),
        ("Post #388: Modern Electric Mobility Infrastructure", "urban-ev-charging-station.jpg", "0.91 Cosine", "Mismatch Guard: PASSED", (16, 185, 129)),
        ("Post #374: Sustainable Forest Ecosystems", "scenic-misty-evergreens.jpg", "0.89 Cosine", "Mismatch Guard: PASSED", (16, 185, 129)),
    ]
    card_start_y = ly0 + 58
    for idx, (title, img_name, score, guard_status, col) in enumerate(match_items):
        cy = card_start_y + (idx * 110)
        draw.rounded_rectangle([lx0 + 16, cy, lx1 - 16, cy + 96], radius=10, fill=(248, 250, 252), outline=(226, 232, 240), width=1)
        
        # Simulated thumbnail
        draw.rounded_rectangle([lx0 + 28, cy + 12, lx0 + 110, cy + 84], radius=8, fill=(30, 41, 59))
        draw.text((lx0 + 45, cy + 42), "IMG", fill=(148, 163, 184), font=f_bold)
        
        # Details
        draw.text((lx0 + 125, cy + 14), title, fill=(15, 23, 42), font=f_bold)
        draw.text((lx0 + 125, cy + 34), f"Paired Stock: {img_name}", fill=(100, 116, 139), font=f_small)
        
        # Badges
        draw.rounded_rectangle([lx0 + 125, cy + 58, lx0 + 215, cy + 80], radius=5, fill=(240, 253, 244))
        draw.text((lx0 + 135, cy + 63), f"⚡ {score}", fill=(22, 101, 52), font=f_small)

        draw.rounded_rectangle([lx0 + 225, cy + 58, lx0 + 380, cy + 80], radius=5, fill=(236, 253, 245))
        draw.text((lx0 + 235, cy + 63), f"✓ {guard_status}", fill=(5, 150, 105), font=f_small)

    # Right Panel: Deterministic Mismatch Guard Console
    rx0, ry0 = lx1 + 20, body_y
    rx1 = rx0 + right_w
    draw.rounded_rectangle([rx0, ry0, rx1, cy1 - 25], radius=14, fill=(15, 23, 42), outline=(30, 41, 59), width=1) # Dark console style
    
    draw.text((rx0 + 20, ry0 + 18), "🛡 Mismatch Guard Rules", fill=(255, 255, 255), font=f_h2)
    draw.line([rx0, ry0 + 46, rx1, ry0 + 46], fill=(30, 41, 59), width=1)

    rules = [
        ("Rule 1: Vision Confidence", "min_confidence >= 0.60", "Enforced"),
        ("Rule 2: Dense Cosine Dist", "min_similarity >= 0.65", "Enforced"),
        ("Rule 3: Semantic Veto", "no_domain_conflict", "Enforced"),
        ("Worker Queue Status", "4 Concurrent Workers", "Optimal"),
        ("Dead Letter Buffer", "0 Failed Jobs", "Clean")
    ]
    for idx, (r_name, r_code, r_st) in enumerate(rules):
        ry = ry0 + 62 + (idx * 60)
        draw.text((rx0 + 20, ry), r_name, fill=(226, 232, 240), font=f_bold)
        draw.text((rx0 + 20, ry + 18), r_code, fill=(45, 212, 191), font=f_mono) # Cyan mono
        draw.rounded_rectangle([rx1 - 85, ry + 4, rx1 - 20, ry + 24], radius=4, fill=(20, 83, 45))
        draw.text((rx1 - 78, ry + 7), r_st, fill=(134, 239, 172), font=f_small)

    out_path = "e:\\001_Zihad-Programming\\Portfolio\\public\\image-matching-engine.png"
    img.save(out_path, "PNG")
    print(f"Created unique Image Matching UI: {out_path}")

# ==============================================================================
# 2. FOOTBALL TICKET DB: Relational SQL Workbench & Stadium Matrix Grid
# ==============================================================================
def render_football_ticket_db():
    width, height = 1200, 750
    img = Image.new("RGBA", (width, height), (243, 244, 246))
    draw = ImageDraw.Draw(img)
    f_brand, f_h1, f_h2, f_bold, f_semi, f_stat_num, f_small, f_mono = get_fonts()

    # Outer Card Base
    cx0, cy0, cx1, cy1 = 50, 35, width - 50, height - 35
    for i in range(12):
        draw.rounded_rectangle([cx0 - i, cy0 - i, cx1 + i, cy1 + i], radius=24, fill=(15, 23, 42, 6))
    draw.rounded_rectangle([cx0, cy0, cx1, cy1], radius=20, fill=(255, 255, 255))

    # Top Navbar (Emerald / Pitch Green Theme)
    nav_h = 65
    draw.rounded_rectangle([cx0, cy0, cx1, cy0 + nav_h], radius=20, fill=(240, 253, 244))
    draw.rectangle([cx0, cy0 + 20, cx1, cy0 + nav_h], fill=(240, 253, 244))
    draw.line([cx0, cy0 + nav_h, cx1, cy0 + nav_h], fill=(187, 247, 208), width=1)

    draw.text((cx0 + 25, cy0 + 20), "⚽ STADIUM-DB  //  PostgreSQL Engine", fill=(21, 128, 61), font=f_brand)
    
    # Active match selector
    draw.rounded_rectangle([cx1 - 320, cy0 + 16, cx1 - 25, cy0 + 48], radius=8, fill=(255, 255, 255), outline=(187, 247, 208), width=1)
    draw.text((cx1 - 305, cy0 + 24), "Fixture: Champions League Final 2026 ▾", fill=(21, 128, 61), font=f_bold)

    # Left Panel: Stadium Seating Matrix (Visual Seating Blocks)
    matrix_x0 = cx0 + 25
    matrix_y0 = cy0 + nav_h + 20
    matrix_w = 420
    matrix_h = cy1 - matrix_y0 - 25
    draw.rounded_rectangle([matrix_x0, matrix_y0, matrix_x0 + matrix_w, matrix_y0 + matrix_h], radius=14, fill=(248, 250, 252), outline=(226, 232, 240), width=1)

    draw.text((matrix_x0 + 20, matrix_y0 + 16), "Stadium Seating Tier Matrix", fill=(15, 23, 42), font=f_h2)
    draw.text((matrix_x0 + 20, matrix_y0 + 38), "65,000 Seats · Relational Inventory Lock", fill=(100, 116, 139), font=f_small)

    # Simplified Pitch Diagram in the Center
    pitch_x = matrix_x0 + 60
    pitch_y = matrix_y0 + 75
    pitch_w = matrix_w - 120
    pitch_h = 170
    draw.rounded_rectangle([pitch_x, pitch_y, pitch_x + pitch_w, pitch_y + pitch_h], radius=12, fill=(34, 197, 94)) # Pitch Green
    # Pitch lines
    draw.rectangle([pitch_x + 10, pitch_y + 10, pitch_x + pitch_w - 10, pitch_y + pitch_h - 10], outline=(255, 255, 255), width=2)
    draw.line([pitch_x + (pitch_w // 2), pitch_y + 10, pitch_x + (pitch_w // 2), pitch_y + pitch_h - 10], fill=(255, 255, 255), width=2)
    draw.ellipse([pitch_x + (pitch_w // 2) - 25, pitch_y + (pitch_h // 2) - 25, pitch_x + (pitch_w // 2) + 25, pitch_y + (pitch_h // 2) + 25], outline=(255, 255, 255), width=2)

    # Seating Stand Buttons Around Pitch
    stands = [
        ("North Stand (VIP)", matrix_x0 + 80, matrix_y0 + 260, (220, 252, 231), (22, 101, 52)),
        ("East Stand (Tier 1)", matrix_x0 + 220, matrix_y0 + 260, (239, 246, 255), (29, 78, 216)),
        ("South Stand (Away)", matrix_x0 + 80, matrix_y0 + 310, (254, 243, 199), (146, 64, 14)),
        ("West Stand (Family)", matrix_x0 + 220, matrix_y0 + 310, (243, 244, 246), (55, 65, 81)),
    ]
    for s_name, sx, sy, bg_c, tx_c in stands:
        draw.rounded_rectangle([sx, sy, sx + 130, sy + 38], radius=8, fill=bg_c)
        draw.text((sx + 10, sy + 12), s_name, fill=tx_c, font=f_small)

    # Live stats below seating
    draw.line([matrix_x0, matrix_y0 + 370, matrix_x0 + matrix_w, matrix_y0 + 370], fill=(226, 232, 240), width=1)
    draw.text((matrix_x0 + 25, matrix_y0 + 385), "Available Seats: 6,580", fill=(21, 128, 61), font=f_bold)
    draw.text((matrix_x0 + 25, matrix_y0 + 405), "Reserved / Locked: 58,420 (89.8%)", fill=(100, 116, 139), font=f_small)
    draw.text((matrix_x0 + 25, matrix_y0 + 425), "Concurrency: Zero Double-Booking Guarantee", fill=(59, 130, 246), font=f_small)

    # Right Panel: SQL Query Console & Result Table
    sql_x0 = matrix_x0 + matrix_w + 25
    sql_y0 = matrix_y0
    sql_w = cx1 - sql_x0 - 25
    
    # 1. SQL Query Box (Dark Code Block)
    sql_code_h = 150
    draw.rounded_rectangle([sql_x0, sql_y0, sql_x0 + sql_w, sql_y0 + sql_code_h], radius=14, fill=(15, 23, 42))
    draw.text((sql_x0 + 16, sql_y0 + 12), "SQL QUERY CONSOLE // booking_transaction.sql", fill=(148, 163, 184), font=f_mono)
    draw.line([sql_x0, sql_y0 + 32, sql_x0 + sql_w, sql_y0 + 32], fill=(30, 41, 59), width=1)

    sql_lines = [
        "BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;",
        "SELECT seat_id, price FROM seat_inventory WHERE match_id = 8 AND status = 'AVAILABLE'",
        "FOR UPDATE SKIP LOCKED LIMIT 1;",
        "INSERT INTO ticket_bookings (ticket_id, fan_id, seat_id, match_id, booked_at)",
        "VALUES (gen_random_uuid(), 'FAN-901', 4022, 8, NOW()); COMMIT;"
    ]
    for idx, l in enumerate(sql_lines):
        col = (56, 189, 248) if "SELECT" in l or "INSERT" in l else ((74, 222, 128) if "TRANSACTION" in l or "COMMIT" in l else (226, 232, 240))
        draw.text((sql_x0 + 18, sql_y0 + 42 + (idx * 20)), l, fill=col, font=f_mono)

    # 2. Live Relational Table Result
    res_y0 = sql_y0 + sql_code_h + 16
    res_h = cy1 - res_y0 - 25
    draw.rounded_rectangle([sql_x0, res_y0, sql_x0 + sql_w, res_y0 + res_h], radius=14, fill=(255, 255, 255), outline=(226, 232, 240), width=1)

    draw.text((sql_x0 + 16, res_y0 + 14), "Active PostgreSQL Transactions & Booking Ledger", fill=(15, 23, 42), font=f_h2)
    draw.line([sql_x0, res_y0 + 38, sql_x0 + sql_w, res_y0 + 38], fill=(241, 245, 249), width=1)

    # Headers
    headers = ["BOOKING ID", "MATCH / DERBY", "SEAT NUMBER", "TIER", "PRICE (USD)", "STATE"]
    h_offsets = [16, 120, 270, 360, 430, 520]
    for idx, h_text in enumerate(headers):
        if idx < len(h_offsets):
            draw.text((sql_x0 + h_offsets[idx], res_y0 + 48), h_text, fill=(148, 163, 184), font=f_small)
    draw.line([sql_x0, res_y0 + 68, sql_x0 + sql_w, res_y0 + 68], fill=(241, 245, 249), width=1)

    # Sample rows
    table_rows = [
        ("#BKG-8801", "Champions League Final", "N-VIP-042", "VIP Lounge", "$350.00", "COMMITTED"),
        ("#BKG-8802", "Champions League Final", "E-T1-108", "East Stand", "$120.00", "COMMITTED"),
        ("#BKG-8803", "Champions League Final", "S-AW-214", "South Away", "$85.00", "COMMITTED"),
        ("#BKG-8804", "Champions League Final", "W-FM-019", "West Family", "$95.00", "COMMITTED"),
        ("#BKG-8805", "Champions League Final", "N-VIP-043", "VIP Lounge", "$350.00", "COMMITTED")
    ]
    for r_idx, r in enumerate(table_rows):
        ry = res_y0 + 80 + (r_idx * 40)
        if r_idx % 2 == 1:
            draw.rectangle([sql_x0 + 1, ry - 4, sql_x0 + sql_w - 1, ry + 32], fill=(248, 250, 252))
        
        draw.text((sql_x0 + h_offsets[0], ry + 4), r[0], fill=(59, 130, 246), font=f_mono)
        draw.text((sql_x0 + h_offsets[1], ry + 4), r[1], fill=(15, 23, 42), font=f_semi)
        draw.text((sql_x0 + h_offsets[2], ry + 4), r[2], fill=(100, 116, 139), font=f_small)
        draw.text((sql_x0 + h_offsets[3], ry + 4), r[3], fill=(51, 65, 85), font=f_small)
        draw.text((sql_x0 + h_offsets[4], ry + 4), r[4], fill=(15, 23, 42), font=f_bold)
        
        # Committed Badge
        draw.rounded_rectangle([sql_x0 + h_offsets[5], ry + 2, sql_x0 + h_offsets[5] + 80, ry + 22], radius=4, fill=(220, 252, 231))
        draw.text((sql_x0 + h_offsets[5] + 8, ry + 5), "COMMITTED", fill=(22, 101, 52), font=f_small)

    out_path = "e:\\001_Zihad-Programming\\Portfolio\\public\\football-ticket-db.png"
    img.save(out_path, "PNG")
    print(f"Created unique Football DB UI: {out_path}")

render_image_matching()
render_football_ticket_db()
