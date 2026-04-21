from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from datetime import datetime, timedelta, timezone

OUTPUT_DIR = Path("html/PNG")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

OUTPUT_PATH = OUTPUT_DIR / "purchase-current.gif"

WIDTH = 800
HEIGHT = 600

tz = timezone(timedelta(hours=8))
now = datetime.now(tz)

base_end = datetime(2026, 4, 28, 23, 59, 0, tzinfo=tz)
cycle_days = 14

end_time = base_end
while end_time < now:
    end_time += timedelta(days=cycle_days)

start_time = end_time - timedelta(days=cycle_days)
remaining = end_time - now

if remaining.total_seconds() > 0:
    days = remaining.days
    hours = remaining.seconds // 3600
    minutes = (remaining.seconds % 3600) // 60
    countdown_text = f"本期倒數 {days}天 {hours}時 {minutes}分"
else:
    countdown_text = "活動已結束"

end_text = end_time.strftime("截止時間 %m/%d %H:%M")

total_seconds = (end_time - start_time).total_seconds()
elapsed_seconds = (now - start_time).total_seconds()
progress = max(0.0, min(1.0, elapsed_seconds / total_seconds if total_seconds else 0.0))

img = Image.new("RGB", (WIDTH, HEIGHT), (255, 244, 247))
draw = ImageDraw.Draw(img)

# 改這裡：明確指定支援中文的字型
font_paths = [
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
    "/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]

font_path = None
for fp in font_paths:
    if Path(fp).exists():
        font_path = fp
        break

if font_path:
    title_font = ImageFont.truetype(font_path, 58)
    subtitle_font = ImageFont.truetype(font_path, 30)
    body_font = ImageFont.truetype(font_path, 24)
    small_font = ImageFont.truetype(font_path, 20)
else:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    body_font = ImageFont.load_default()
    small_font = ImageFont.load_default()

draw.rounded_rectangle((24, 24, 776, 576), radius=30, fill=(255, 255, 255), outline=(239, 199, 214), width=4)
draw.rounded_rectangle((60, 60, 740, 190), radius=26, fill=(255, 223, 233))

draw.text((400, 105), "加購", fill=(145, 35, 78), font=title_font, anchor="mm")
draw.text((400, 162), "消費不限金額即可加購", fill=(120, 55, 78), font=subtitle_font, anchor="mm")

draw.rounded_rectangle((70, 225, 730, 520), radius=24, fill=(255, 248, 250), outline=(235, 210, 220), width=3)

lines = [
    "本期活動資訊",
    "• 消費不限金額即可加購",
    "• 依店內當日公告為主",
    "• 數量有限，售完為止",
]

y = 260
for line in lines:
    draw.text((110, y), line, fill=(80, 50, 60), font=body_font)
    y += 48

draw.text((400, 440), end_text, fill=(110, 110, 110), font=body_font, anchor="mm")

countdown_color = (220, 50, 80) if remaining.days <= 2 else (190, 60, 90)
draw.text((400, 478), countdown_text, fill=countdown_color, font=subtitle_font, anchor="mm")

bar_left = 130
bar_top = 520
bar_right = 670
bar_bottom = 548
bar_radius = 16

draw.rounded_rectangle(
    (bar_left, bar_top, bar_right, bar_bottom),
    radius=bar_radius,
    fill=(238, 229, 233)
)

fill_width = int((bar_right - bar_left) * progress)
if fill_width > 0:
    draw.rounded_rectangle(
        (bar_left, bar_top, bar_left + fill_width, bar_bottom),
        radius=bar_radius,
        fill=(232, 96, 139)
    )

progress_percent = int(progress * 100)
draw.text((400, 562), f"本期進度 {progress_percent}%", fill=(130, 100, 110), font=small_font, anchor="mm")

img.save(OUTPUT_PATH, format="GIF")
print(f"Generated: {OUTPUT_PATH}")
print(f"Current cycle: {start_time} ~ {end_time}")
print(f"Countdown: {countdown_text}")
print(f"Progress: {progress_percent}%")
