from pathlib import Path
from datetime import datetime, timezone, timedelta

BASE_IMAGE_URL = "https://raw.githubusercontent.com/anzuac/line-preview/main/html/PNG/purchase-current.gif"
TEMPLATE_PATH = Path("html/purchase-template.html")
OUTPUT_PATH = Path("html/purchase7.html")

tw = timezone(timedelta(hours=8))
now = datetime.now(tw)

version = now.strftime("%Y%m%d")
updated_at = now.strftime("%Y-%m-%d %H:%M:%S")

# 讓 og:image 每天變一次，降低圖片快取問題
og_image_url = f"{BASE_IMAGE_URL}?v={version}"

# 頁面內 img 也帶同樣版本，確保打開網頁時看到的也是當天版本
display_image_url = og_image_url

template = TEMPLATE_PATH.read_text(encoding="utf-8")
html = (
    template
    .replace("{{OG_IMAGE_URL}}", og_image_url)
    .replace("{{DISPLAY_IMAGE_URL}}", display_image_url)
    .replace("{{UPDATED_AT}}", updated_at)
)

OUTPUT_PATH.write_text(html, encoding="utf-8")
print(f"Built: {OUTPUT_PATH}")
print(f"OG image: {og_image_url}")
