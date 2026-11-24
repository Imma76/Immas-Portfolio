"""Render the social share card and favicons into public/.

Run with: python3 scripts/make-icons.py
Uses macOS system fonts (SF Pro / SF Mono), so run it on a Mac.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / "public"
BG = (11, 11, 10)
RAISED = (20, 20, 19)
LINE = (52, 52, 47)
TEXT = (236, 235, 230)
TEXT2 = (163, 162, 153)
TEXT3 = (111, 110, 103)
ACCENT = (200, 241, 105)
ON_ACCENT = (26, 42, 5)
GREEN = (83, 232, 139)


def font(size, weight="Medium", mono=False):
    path = "/System/Library/Fonts/SFNSMono.ttf" if mono else "/System/Library/Fonts/SFNS.ttf"
    f = ImageFont.truetype(path, size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


def tracked(draw, xy, text, f, fill, tracking):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += draw.textlength(ch, font=f) + tracking


def phone(w, h, screen):
    s = 4
    img = Image.new("RGBA", (w * s, h * s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((0, 0, w * s - 1, h * s - 1), radius=34 * s, fill=(31, 31, 29), outline=(52, 52, 47), width=2 * s)
    p = 8 * s
    d.rounded_rectangle((p, p, w * s - p, h * s - p), radius=27 * s, fill=screen)
    # simple screen content: header block, lines, button
    iw = w * s - 2 * p
    x0, y0 = p + 18 * s, p + 40 * s
    d.rounded_rectangle((x0, y0, x0 + iw - 36 * s, y0 + 90 * s), radius=14 * s, fill=(36, 36, 33))
    for i, frac in enumerate((0.75, 0.55, 0.65)):
        yy = y0 + (114 + i * 24) * s
        d.rounded_rectangle((x0, yy, x0 + int((iw - 36 * s) * frac), yy + 10 * s), radius=5 * s, fill=(46, 46, 42))
    by = h * s - p - 70 * s
    d.rounded_rectangle((x0, by, x0 + iw - 36 * s, by + 34 * s), radius=17 * s, fill=ACCENT)
    return img.resize((w, h), Image.LANCZOS)


def og_card():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    # right-side phone fan
    for (cx, cy, rot, scr) in ((905, 360, 8, (17, 17, 16)), (1065, 330, -6, (17, 17, 16)), (985, 300, 0, (14, 14, 13))):
        ph = phone(220, 460, scr).rotate(rot, resample=Image.BICUBIC, expand=True)
        img.paste(ph, (cx - ph.width // 2, cy - ph.height // 2), ph)

    # soft fade so phones sit behind the text column
    fade = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    fd = ImageDraw.Draw(fade)
    for x in range(560, 860):
        a = int(255 * max(0, 1 - (x - 560) / 300))
        fd.line([(x, 0), (x, H)], fill=BG + (a,))
    fd.rectangle((0, 0, 560, H), fill=BG + (255,))
    img.paste(fade, (0, 0), fade)
    d = ImageDraw.Draw(img)

    L = 80
    tracked(d, (L, 78), "EMMANUEL UGWUEZE", font(22, "Regular", mono=True), TEXT2, 3.5)
    d.text((L, 150), "Software", font=font(104, "Medium"), fill=TEXT)
    d.text((L, 258), "engineer.", font=font(104, "Medium"), fill=TEXT)
    d.text((L, 386), "I ship Flutter apps and", font=font(42, "Medium"), fill=ACCENT)
    d.text((L, 436), "the backends behind them.", font=font(42, "Medium"), fill=ACCENT)

    # footer: availability pill + url
    pill_f = font(22, "Regular")
    label = "Open to remote and contract work"
    tw = d.textlength(label, font=pill_f)
    px, py = L, 530
    d.rounded_rectangle((px, py, px + tw + 62, py + 44), radius=22, outline=LINE, width=2)
    d.ellipse((px + 20, py + 16, px + 32, py + 28), fill=GREEN)
    d.text((px + 44, py + 9), label, font=pill_f, fill=TEXT2)

    img.save(OUT / "og-image.png", optimize=True)


def monogram(size, radius_frac=0.22):
    s = 4
    S = size * s
    img = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((0, 0, S - 1, S - 1), radius=int(S * radius_frac), fill=BG)
    f = font(int(S * 0.5), "Semibold")
    text = "EU"
    bbox = d.textbbox((0, 0), text, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((S - tw) / 2 - bbox[0], (S - th) / 2 - bbox[1]), text, font=f, fill=ACCENT)
    return img.resize((size, size), Image.LANCZOS)


def icons():
    monogram(32).save(OUT / "favicon-32.png", optimize=True)
    monogram(192).save(OUT / "icon-192.png", optimize=True)
    # Apple applies its own rounded mask, so the touch icon is a full square.
    monogram(180, radius_frac=0).convert("RGB").save(OUT / "apple-touch-icon.png", optimize=True)
    monogram(64).save(OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])


if __name__ == "__main__":
    og_card()
    icons()
    print("wrote", sorted(p.name for p in OUT.iterdir()))
