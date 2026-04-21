from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from datetime import datetime, timedelta, timezone

BASE_IMAGE_PATH = Path("html/PNG/purchase-base.png")
OUTPUT_PATH = Path("html/PNG/purchase-current.png")

WIDTH = 800
HEIGHT = 600
TOP_BANNER_HEIGHT = 78

# 台灣時區
tz = timezone(timedelta(hours=8))
now = datetime.now(tz)

# 基準截止時間：2026/04/28 23:59
# 之後每 14 天自動往後推
base_end = datetime(2026, 4, 28, 23, 59, 0, tzinfo=tz)
cycle_days = 14

end_time = base_end
while end_time < now:
    end_time += timedelta(days=cycle_days)

remaining = end_time - now

if remaining.total_seconds() > 0:
    total_hours = int(remaining.total_seconds() // 3600)
    days = total_hours // 24
    hours = total_hours % 24
    remain_text = f"剩餘 {days}天 {hours}小時"
else:
    remain_text = "本期活動已結束"

end_text = end_time.strftime("本次活動到 %m/%d %H:%M")

# 讀取原圖
base = Image.open(BASE_IMAGE_PATH).convert("RGBA")
base = base.resize((WIDTH, HEIGHT))

# 建立新畫布，上方多一條資訊橫條
canvas = Image.new("RGBA", (WIDTH, HEIGHT + TOP_BANNER_HEIGHT), (255, 255, 255, 255))
canvas.paste(base, (0, TOP_BANNER_HEIGHT))

draw = ImageDraw.Draw(canvas)

# 字型
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
    sub_font = ImageFont.truetype(font_path, 24)
else:
    title_font = ImageFont.load_default()
    sub_font = ImageFont.load_default()

# 上方橫條背景
draw.rectangle((0, 0, WIDTH, TOP_BANNER_HEIGHT), fill=(255, 255, 255, 245))
draw.line((0, TOP_BANNER_HEIGHT - 1, WIDTH, TOP_BANNER_HEIGHT - 1), fill=(230, 230, 230), width=2)

# 文字
draw.text((WIDTH // 2, 24), end_text, fill=(60, 60, 60), font=title_font, anchor="mm")

remain_color = (210, 30, 70) if remaining.days <= 2 else (180, 50, 80)
draw.text((WIDTH // 2, 54), remain_text, fill=remain_color, font=sub_font, anchor="mm")

# 輸出 PNG
final_img = canvas.convert("RGB")
final_img.save(OUTPUT_PATH, format="PNG")

print(f"Generated: {OUTPUT_PATH}")
print(f"End time: {end_time}")
print(f"Remaining: {remain_text}")
