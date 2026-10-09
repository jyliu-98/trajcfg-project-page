#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$project_dir"

required_files=(
  "index.html"
  "styles.css"
  "script.js"
  "assets/images/method-overview.png"
  "assets/images/results-t2v.png"
  "assets/videos/t2v/dance/trajcfg.mp4"
  "assets/videos/i2v/wave/trajcfg.mp4"
  "assets/videos/t2av/controller/trajcfg.mp4"
  "assets/media/i2-3d/trajcfg.gif"
  "assets/gallery/t2v/vbench_wan22_14b/trajcfg.mp4"
  "assets/gallery/i2v/pai_g_cosmos/trajcfg.mp4"
  "assets/gallery/t2av/vabench_ltx23/trajcfg.mp4"
  "assets/gallery/t2i/qwen-image/comparison.png"
  "assets/gallery/i2-3d/386_trajcfg.gif"
)

for path in "${required_files[@]}"; do
  test -s "$path" || { echo "Missing or empty: $path" >&2; exit 1; }
done

grep -q '<section class="hero' index.html
grep -q 'id="method"' index.html
grep -q 'id="results"' index.html
grep -q 'id="gallery"' index.html
grep -q 'id="citation"' index.html
grep -q 'prefers-reduced-motion' styles.css
grep -q 'data-gallery-root' index.html
grep -q 'const galleryData' script.js
grep -q 'Wan2.2-14B' script.js
grep -q 'Qwen-Image' script.js
grep -q 'Hunyuan3D 2.0' script.js
grep -q 'Coming soon' index.html

if grep -Eq '(src|href)=""' index.html script.js; then
  echo "Found an empty src or href attribute." >&2
  exit 1
fi

echo "TrajCFG static smoke checks passed."
