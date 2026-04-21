from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from datetime import datetime, timedelta, timezone

BASE_IMAGE_PATH = Path("html/PNG/purchase-base.png")
OUTPUT_PATH = Path("html/PNG/purchase-current.png")

WIDTH = 800
HEIGHT = 600

# 台灣時區
tz = timezone(timedelta(hours=8))
now = datetime.now(tz)

# ===== 活動週期設定 =====
# 以 2026/04/28 23:59 為基準，之後每 14 天一個結束時間
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
    countdown_text = f"倒數 {days}天 {hours}時 {minutes}分"
else:
    countdown_text = "本期活動已結束"

end_text = end_time.strftime("本期截止 %m/%d %H:%M")

total_seconds = (end_time - start_time).total_seconds()
elapsed_seconds = (now - start_time).total_seconds()
progress = max(0.0, min(1.0, elapsed_seconds / total_seconds if total_seconds else 0.0))
progress_percent = int(progress * 100)

# ===== 讀取底圖 =====
img = Image.open(BASE_IMAGE_PATH).convert("RGBA")
img = img.resize((WIDTH, HEIGHT))

overlay = Image.new("RGBA", img.size, (255, 255, 255, 0))
draw = ImageDraw.Draw(overlay)

# ===== 中文字型 =====
font_candidates = [
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
    "/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]

font_path = None
for fp in font_candidates:
    if Path(fp).exists():
        font_path = fp
        break

if font_path:
    title_font = ImageFont.truetype(font_path, 28)
    body_font = ImageFont.truetype(font_path, 22)
    small_font = ImageFont.truetype(font_path, 18)
else:
    title_font = ImageFont.load_default()
    body_font = ImageFont.load_default()
    small_font = ImageFont.load_default()

# ===== 動態資訊卡片位置 =====
# 這塊先放在圖右下，避開主要商品與價格
panel_x1, panel_y1 = 430, 470
panel_x2, panel_y2 = 780, 585

draw.rounded_rectangle(
    (panel_x1, panel_y1, panel_x2, panel_y2),
    radius=18,
    fill=(255, 255, 255, 220),
    outline=(220, 220, 220, 255),
    width=2
)

# 截止時間
draw.text((605, 492), end_text, fill=(60, 60, 60, 255), font=body_font, anchor="mm")

# 倒數文字
countdown_color = (220, 20, 60, 255) if remaining.days <= 2 else (200, 40, 80, 255)
draw.text((605, 525), countdown_text, fill=countdown_color, font=title_font, anchor="mm")

# 進度條
bar_left = 470
bar_top = 545
bar_right = 740
bar_bottom = 565
bar_radius = 10

draw.rounded_rectangle(
    (bar_left, bar_top, bar_right, bar_bottom),
    radius=bar_radius,
    fill=(235, 235, 235, 255)
)

fill_width = int((bar_right - bar_left) * progress)
if fill_width > 0:
    draw.rounded_rectangle(
        (bar_left, bar_top, bar_left + fill_width, bar_bottom),
        radius=bar_radius,
        fill=(255, 80, 120, 255)
    )

draw.text((605, 578), f"本期進度 {progress_percent}%", fill=(80, 80, 80, 255), font=small_font, anchor="mm")

# ===== 合成並輸出 PNG =====
result = Image.alpha_composite(img, overlay).convert("RGB")
result.save(OUTPUT_PATH, format="PNG")

print(f"Generated: {OUTPUT_PATH}")
print(f"Base image: {BASE_IMAGE_PATH}")
print(f"Cycle: {start_time} ~ {end_time}")
print(f"Countdown: {countdown_text}")
print(f"Progress: {progress_percent}%")
