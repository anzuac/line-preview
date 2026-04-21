from pathlib import Path
import shutil
from PIL import Image

SOURCE_PATH = Path("Line/PNG/purchase-source.png")
TARGET_PATH = Path("Line/PNG/purchase-current.png")

def main() -> None:
    if not SOURCE_PATH.exists():
        raise FileNotFoundError(f"找不到來源圖片：{SOURCE_PATH}")

    # 驗證圖片是否可正常開啟
    with Image.open(SOURCE_PATH) as img:
        img.verify()

    # 直接複製，不變形、不重壓
    shutil.copy2(SOURCE_PATH, TARGET_PATH)

    print(f"已更新圖片：{TARGET_PATH}")

if __name__ == "__main__":
    main()
