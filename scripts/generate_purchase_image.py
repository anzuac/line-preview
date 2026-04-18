
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from datetime import datetime, timezone, timedelta

OUTPUT_DIR = Path("html/PNG")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

WIDTH = 800
HEIGHT = 600

# 台灣時間
tw = timezone(timedelta(hours=8))
now = datetime.now(tw)
date_text = now.strftime("%Y/%m/%d")
time_text = now.strftime("%H:%M")

output_path = OUTPUT_DIR / "purchase-current.gif"

img = Image.new("RGB", (WIDTH, HEIGHT), (255, 245, 248))
draw = ImageDraw.Draw(img)

# 嘗試使用常見字型，失敗就退回預設
font_paths = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
]

title_font = None
subtitle_font = None
body_font = None

for fp in font_paths:
    try:
        title_font = ImageFont.truetype(fp, 56)
        subtitle_font = ImageFont.truetype(fp, 30)
        body_font = ImageFont.truetype(fp, 24)
        break
    except Exception:
        continue

if title_font is None:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    body_font = ImageFont.load_default()

# 背景區塊
draw.rounded_rectangle((30, 30, 770, 570), radius=28, fill=(255, 255, 255), outline=(245, 195, 210), width=4)
draw.rounded_rectangle((60, 70, 740, 190), radius=24, fill=(255, 221, 232))

# 主標
draw.text((320, 98), "加購", fill=(145, 35, 78), font=title_font, anchor="mm")
draw.text((400, 165), "消費不限金額即可加購", fill=(120, 55, 78), font=subtitle_font, anchor="mm")

# 內容框
draw.rounded_rectangle((70, 230, 730, 480), radius=24, fill=(255, 248, 250), outline=(235, 210, 220), width=3)

lines = [
    "今日活動資訊",
    "• 消費不限金額即可加購",
    "• 依店內當日公告為主",
    "• 數量有限，售完為止",
]

y = 270
for line in lines:
    draw.text((110, y), line, fill=(80, 50, 60), font=body_font)
    y += 52

# 更新時間
draw.text((400, 530), f"更新時間 {date_text} {time_text}", fill=(120, 120, 120), font=body_font, anchor="mm")

img.save(output_path, format="GIF")
print(f"Generated: {output_path}")
