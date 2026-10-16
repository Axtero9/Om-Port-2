import os
import subprocess
import re

files_to_download = [
    ("videos/CONTENTS/OTHER/BREAK THE PATTERN.mp4", "1amNp4YovCM1zdaVqePJ3la4Kf0yYf1-_"),
    ("videos/CONTENTS/OTHER/HONORABLE.mp4", "12YTlkEoHevIYHpkJVX6zJ7tljx-iGIAe"),
    ("videos/CONTENTS/OTHER/Video-14823.mp4", "1aW_RfmzxUHZrqdmaiSe9WptZapJPu6hm"),
    ("videos/CONTENTS/STORE/1.mp4", "1FE9HFg6L1mbHh0AUjCMWWDSp-vq0K5wC"),
    ("videos/CONTENTS/STORE/2.mp4", "1qM2MnwJCxBcQrhhFM5O2i3HTfElIfbDe"),
    ("videos/CONTENTS/STORE/3.mp4", "1FDoeyXv6I8zRKwwyX_R1vBlaVftQAn5C"),
    ("videos/CONTENTS/STORE/4.mp4", "1pI7CGdcyQNa5PQnS8iV2UukncG9ySmi6"),
    ("videos/VISUAL STORYTELLING/BITCH FINAL.mp4", "1Sm4NJH7XMnLsKKGVve_n2R5S71RfRKbM"),
    ("videos/VISUAL STORYTELLING/JOH ISHQ HUA.mp4", "1evhFByNYvgN8oeKdeQAYTek6MeYek01i"),
    ("videos/VISUAL STORYTELLING/KHALI GHAR FINAL.mp4", "13e2dz-7YubolMV9FBiH92St4xK-g56V-"),
    ("videos/VISUAL STORYTELLING/TALHA ANJUM.mp4", "1Qot2rifmc_JkpGwsZTdIR0DZzUeWqfx9"),
    ("videos/MUSIC VIDEOS/FREE VERSE.mp4", "17gzUKcGvUhVJ3KSzYxXLceI6RBNbZakb"),
    ("videos/MUSIC VIDEOS/ASHU_MUSIC.webm", "1fz42fyeEbKc_572ieROEcMHvcvBQQ4CF"),
    ("videos/MUSIC VIDEOS/XDG.mp4", "1Wo0X2KjCkZWNltPAlB0pOjJ6y8KBdd4G"),
]

for dest_path, file_id in files_to_download:
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 1024 * 1024:
        print(f"Skipping already downloaded {dest_path} ({os.path.getsize(dest_path)} bytes)")
        continue
    
    print(f"\n--- Downloading {dest_path} (ID: {file_id}) ---")
    cookie_file = "cookie.txt"
    # First request to get cookies and possible confirm token
    cmd1 = [
        "curl.exe", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "-c", cookie_file,
        "-s", "-L",
        f"https://drive.google.com/uc?export=download&id={file_id}",
        "-o", "temp_page.html"
    ]
    subprocess.run(cmd1)
    
    confirm_code = None
    if os.path.exists("temp_page.html"):
        with open("temp_page.html", "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()
            match = re.search(r'confirm=([0-9A-Za-z_-]+)', html)
            if match:
                confirm_code = match.group(1)
                print(f"Found confirm token: {confirm_code}")
    
    if confirm_code:
        download_url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&confirm={confirm_code}"
    else:
        download_url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&confirm=t"
    
    cmd2 = [
        "curl.exe", "-A", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "-b", cookie_file,
        "-L", download_url,
        "-o", dest_path
    ]
    res = subprocess.run(cmd2)
    if os.path.exists(dest_path):
        size = os.path.getsize(dest_path)
        print(f"Downloaded {dest_path}: {size / (1024*1024):.2f} MB")
        # Check if it was accidentally an HTML error page
        if size < 50000:
            with open(dest_path, "r", encoding="utf-8", errors="ignore") as f:
                c = f.read(200)
                if "<html" in c.lower() or "<!doctype" in c.lower():
                    print(f"WARNING: {dest_path} is an HTML page, not video! Removing.")
                    os.remove(dest_path)
