from pathlib import Path
from datetime import datetime, timedelta, timezone
import re

HTML_PATH = Path("Line/purchase7.html")
BASE_IMAGE_URL = "https://raw.githubusercontent.com/anzuac/line-preview/main/Line/PNG/purchase-current.png"

def main() -> None:
    if not HTML_PATH.exists():
        raise FileNotFoundError(f"找不到 HTML 檔案：{HTML_PATH}")

    tz = timezone(timedelta(hours=8))
    now = datetime.now(tz)

    # 每次執行都換版本，增加 LINE 重新抓圖的機率
    version = now.strftime("%Y%m%d%H%M%S")
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

    print(f"已更新 HTML：{HTML_PATH}")
    print(f"圖片網址：{image_url}")
    print(f"更新時間：{updated_at}")

if __name__ == "__main__":
    main()
