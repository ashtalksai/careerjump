#!/usr/bin/env python3
"""Generate CareerJump visual assets with warm terracotta/sage green theme."""

from PIL import Image, ImageDraw, ImageFont
import os

# Color palette
TERRACOTTA = "#D4735E"
SAGE = "#8B9D83"
CREAM = "#F5F1E8"
DARK_GRAY = "#2C2C2C"

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_product_hunt_thumbnail():
    """Create 240x240 Product Hunt thumbnail."""
    size = 1024  # Create larger, will resize for quality
    img = Image.new('RGB', (size, size), hex_to_rgb(CREAM))
    draw = ImageDraw.Draw(img)
    
    # Create abstract mentor/mentee connection visual
    # Two circles connected by a path (representing mentorship journey)
    
    # Larger circle (mentor) - terracotta
    circle1_center = (size * 0.35, size * 0.35)
    circle1_radius = size * 0.15
    draw.ellipse(
        [circle1_center[0] - circle1_radius, circle1_center[1] - circle1_radius,
         circle1_center[0] + circle1_radius, circle1_center[1] + circle1_radius],
        fill=hex_to_rgb(TERRACOTTA)
    )
    
    # Smaller circle (mentee) - sage green
    circle2_center = (size * 0.65, size * 0.65)
    circle2_radius = size * 0.12
    draw.ellipse(
        [circle2_center[0] - circle2_radius, circle2_center[1] - circle2_radius,
         circle2_center[0] + circle2_radius, circle2_center[1] + circle2_radius],
        fill=hex_to_rgb(SAGE)
    )
    
    # Connection path - curved line
    draw.line(
        [circle1_center, circle2_center],
        fill=hex_to_rgb(TERRACOTTA),
        width=int(size * 0.02)
    )
    
    # Add subtle accent circles
    accent1 = (size * 0.75, size * 0.25)
    accent1_radius = size * 0.05
    draw.ellipse(
        [accent1[0] - accent1_radius, accent1[1] - accent1_radius,
         accent1[0] + accent1_radius, accent1[1] + accent1_radius],
        fill=hex_to_rgb(SAGE) + (128,)  # Semi-transparent
    )
    
    # Resize to 240x240
    img_240 = img.resize((240, 240), Image.Resampling.LANCZOS)
    img_240.save('~/clawd/projects/careerjump/marketing/product-hunt-thumbnail.png'.replace('~', os.path.expanduser('~')))
    
    # Also save full resolution version
    img.save('~/clawd/projects/careerjump/marketing/product-hunt-thumbnail-hires.png'.replace('~', os.path.expanduser('~')))
    print("✓ Product Hunt thumbnail created (240x240 + hi-res)")

def create_social_card(platform="twitter"):
    """Create social media share card."""
    if platform == "twitter":
        width, height = 1200, 628
    else:  # Reddit/general
        width, height = 1200, 630
    
    img = Image.new('RGB', (width, height), hex_to_rgb(CREAM))
    draw = ImageDraw.Draw(img)
    
    # Create visual interest with geometric shapes
    # Large terracotta arc on left
    draw.pieslice(
        [-100, height * 0.2, width * 0.4, height + 100],
        start=0, end=90,
        fill=hex_to_rgb(TERRACOTTA)
    )
    
    # Sage green rectangle accent on right
    rect_width = width * 0.3
    draw.rectangle(
        [width - rect_width, 0, width, height * 0.6],
        fill=hex_to_rgb(SAGE)
    )
    
    # Add circular elements (mentor/mentee connection theme)
    circle_y = height * 0.65
    circle_spacing = width * 0.15
    
    # Three circles representing career journey
    for i, color in enumerate([TERRACOTTA, SAGE, TERRACOTTA]):
        x = width * 0.2 + (i * circle_spacing)
        radius = 40 if i == 1 else 30  # Middle one larger
        draw.ellipse(
            [x - radius, circle_y - radius, x + radius, circle_y + radius],
            fill=hex_to_rgb(color)
        )
        # Connection lines
        if i < 2:
            next_x = width * 0.2 + ((i + 1) * circle_spacing)
            draw.line(
                [(x + radius, circle_y), (next_x - (40 if i == 0 else 30), circle_y)],
                fill=hex_to_rgb(DARK_GRAY),
                width=3
            )
    
    # Try to add text (may fail if no fonts available, that's ok)
    try:
        # Try to use a system font
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 80)
        font_medium = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 36)
    except:
        print("⚠ System fonts not found, using default font")
        font_large = ImageFont.load_default()
        font_medium = ImageFont.load_default()
    
    # Add text overlay
    text_y_start = height * 0.15
    draw.text(
        (width * 0.05, text_y_start),
        "CareerJump",
        fill=hex_to_rgb(DARK_GRAY),
        font=font_large
    )
    draw.text(
        (width * 0.05, text_y_start + 100),
        "Find your mentor. Pivot with confidence.",
        fill=hex_to_rgb(DARK_GRAY),
        font=font_medium
    )
    
    filename = f'~/clawd/projects/careerjump/marketing/social-{platform}.png'.replace('~', os.path.expanduser('~'))
    img.save(filename)
    print(f"✓ Social card created ({width}x{height}) for {platform}")

def main():
    # Ensure output directory exists
    os.makedirs(os.path.expanduser('~/clawd/projects/careerjump/marketing'), exist_ok=True)
    
    print("🎨 Generating CareerJump visual assets...")
    print(f"Colors: Terracotta {TERRACOTTA} + Sage Green {SAGE}")
    print()
    
    create_product_hunt_thumbnail()
    create_social_card("twitter")
    create_social_card("reddit")
    
    print()
    print("✅ All assets generated successfully!")
    print("📁 Saved to: ~/clawd/projects/careerjump/marketing/")

if __name__ == "__main__":
    main()
