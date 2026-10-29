"""Prepare the Apple reference assets locally; they are not part of the MIT-licensed source."""

# Adapted from chuspeeism/iphone-duo, MIT copyright 2026 jadon7.
# Full license: public/iphone-duo/NOTICE.txt

# MIT License
#
# Copyright (c) 2026 jadon7
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import argparse
from pathlib import Path
from shutil import copyfile
from urllib.request import urlretrieve
from zipfile import ZipFile

from pxr import Sdf, Usd


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument(
    "--output",
    type=Path,
    default=Path(__file__).resolve().parents[1] / "public/iphone-duo",
)
assets = parser.parse_args().output.resolve()
textures = assets / "textures"
ui = assets / "ui"
textures.mkdir(parents=True, exist_ok=True)
ui.mkdir(parents=True, exist_ok=True)

model = assets / "iPhone_Duo_Star_White.usdz"
model_url = "https://www.apple.com/105/media/us/iphone-duo/2026/9305e4b9-72d9-4c05-9381-b572adadd5e5/ar/iPhone_Duo_e-sim_Star-White_Variant.usdz"
if not model.exists():
    print("Downloading the Apple reference model...", flush=True)
    urlretrieve(model_url, model)

with ZipFile(model) as archive:
    for name in archive.namelist():
        if Path(name).suffix.lower() in {".png", ".jpg", ".jpeg", ".avif"}:
            (textures / Path(name).name).write_bytes(archive.read(name))

print("Preparing the unfolded pose...", flush=True)
stage = Usd.Stage.Open(str(model))
stage.GetDefaultPrim().GetVariantSet("Pose").SetVariantSelection("Landscape")
flattened = Usd.Stage.Open(stage.Flatten())
for prim in flattened.Traverse():
    for attribute in prim.GetAttributes():
        value = attribute.Get()
        if isinstance(value, Sdf.AssetPath) and value.path:
            # Flattening resolves USDZ references to package paths; use local texture paths for the browser.
            filename = Path(value.path.split("[")[-1].rstrip("]")).name
            attribute.Set(Sdf.AssetPath(f"textures/{filename}"))
flattened.GetRootLayer().Export(str(assets / "iPhone_Duo_Render.usdc"))

copyfile(textures / "bRLlvSMXjHGTFMA.avif", ui / "wallpaper-inner.avif")

clock_base = "https://www.apple.com/v/iphone-duo/a/static/uploads/dIFKSKvliUSYOBw/MszYeqEKDgnBqxc/CRqwzvoYesuhNwK"
hig_base = "https://developer.apple.com/tutorials/images/com.apple.HIG"
ui_sources = {
    "clock-inner.avif": f"{clock_base}/lockscreen_ui_inner-wallpaper_png.avif",
    "clock-outer.avif": f"{clock_base}/lockscreen_ui_outer-wallpaper_png.avif",
    "launcher-inner.png": f"{hig_base}/designing-for-iphone-hero-inside@2x.png",
    "launcher-outer.png": f"{hig_base}/designing-for-iphone-hero-outside@2x.png",
}
for filename, url in ui_sources.items():
    print(f"Downloading {filename}...", flush=True)
    urlretrieve(url, ui / filename)

print(f"Assets ready at {assets}. Start the React app to view the component.")
