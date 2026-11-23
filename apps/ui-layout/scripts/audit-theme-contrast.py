"""Check shared theme token contrast without browser or npm dependencies."""
from pathlib import Path
import math
import re

SOURCE = Path(__file__).resolve().parents[1] / 'configs/theme-presets.ts'
PAIRS = [
    ('foreground', 'background'),
    ('card-foreground', 'card'),
    ('popover-foreground', 'popover'),
    ('muted-foreground', 'muted'),
    ('muted-foreground', 'background'),
    ('muted-foreground', 'card'),
    ('primary-foreground', 'primary'),
    ('secondary-foreground', 'secondary'),
    ('accent-foreground', 'accent'),
    ('sidebar-foreground', 'sidebar'),
    ('sidebar-primary-foreground', 'sidebar-primary'),
    ('sidebar-accent-foreground', 'sidebar-accent'),
]

def luminance(color):
    values = re.fullmatch(r'oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)', color)
    if not values:
        raise ValueError(f'Unsupported theme color: {color}')
    lightness, chroma, hue = map(float, values.groups())
    a, b = chroma * math.cos(math.radians(hue)), chroma * math.sin(math.radians(hue))
    l = (lightness + 0.3963377774*a + 0.2158037573*b)**3
    m = (lightness - 0.1055613458*a - 0.0638541728*b)**3
    s = (lightness - 0.0894841775*a - 1.2914855480*b)**3
    channels = [
        4.0767416621*l - 3.3077115913*m + 0.2309699292*s,
        -1.2684380046*l + 2.6097574011*m - 0.3413193965*s,
        -0.0041960863*l - 0.7034186147*m + 1.7076147010*s,
    ]
    return sum(max(0, min(1, channel))*weight for channel, weight in zip(channels, [0.2126, 0.7152, 0.0722]))

def main():
    source = SOURCE.read_text(encoding='utf8')
    count = 0
    failures = []
    presets = re.split(r"    name: '([^']+)',", source)[1:]
    for name, section in zip(presets[::2], presets[1::2]):
        for mode, block in re.findall(r'    (light|dark): \{(.*?)\n    \},', section, re.S):
            variables = dict(re.findall(r"      '?([\w-]+)'?: '([^']+)'", block))
            for foreground, background in PAIRS:
                a, b = luminance(variables[foreground]), luminance(variables[background])
                ratio = (max(a, b) + 0.05)/(min(a, b) + 0.05)
                count += 1
                if ratio < 4.5:
                    failures.append(f'{name}/{mode}: {foreground} on {background}: {ratio:.2f}:1')
    if count != 9*2*len(PAIRS):
        raise AssertionError(f'Expected all nine presets in two modes, checked {count} pairs')
    if failures:
        raise AssertionError('\n'.join(failures))
    print(f'PASS: {count} text/surface pairs across 9 presets in light and dark meet 4.5:1 contrast.')

if __name__ == '__main__':
    main()
