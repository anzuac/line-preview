from pathlib import Path
from datetime import datetime, timedelta, timezone
import re

HTML_PATH = Path("html/purchase7.html")
BASE_IMAGE_URL = "https://raw.githubusercontent.com/anzuac/line-preview/main/html/PNG/purchase-current.png"

tz = timezone(timedelta(hours=8))
now = datetime.now(tz)

# 正式版：每天同一個版本
version = now.strftime("%Y%m%d")
updated_at = now.strftime("%Y-%m-%d %H:%M:%S")

image_url = f"{BASE_IMAGE_URL}?v={version}"

html = HTML_PATH.read_text(encoding="utf-8")

html = re.sub(
    r'(<meta property="og:image" content=")[^"]*(")',
    rf'\1{image_url}\2',
    html
)

html = re.sub(
    r'(<meta name="twitter:image" content=")[^"]*(")',
    rf'\1{image_url}\2',
    html
)

html = re.sub(
    r'(<img src=")[^"]*(" alt="加價購圖片">)',
    rf'\1{image_url}\2',
    html
)

html = re.sub(
    r'(<div class="time">更新時間：).*?(</div>)',
    rf'\1{updated_at}\2',
    html
)

HTML_PATH.write_text(html, encoding="utf-8")

print(f"Updated {HTML_PATH}")
print(f"Image URL: {image_url}")
print(f"Updated at: {updated_at}")
