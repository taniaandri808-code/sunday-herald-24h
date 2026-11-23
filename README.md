# THE SUNDAY HERALD

A 1024×1024 news poster summing up Sunday 22 November 2026 in one image.

## What it is
- A generative news poster aggregating 41 dated stories from the full 24-hour UT day
- Created for make.fun, combining reporting into a single visual composition
- Data-driven: all stories sourced from major news wires and outlets dated 22 November 2026

## Files
- `entry.png` — the 1024×1024 deliverable poster
- `main.py` — the copier script that assembles the poster from story data

## How to run
```bash
mkdir -p out
MAKEFUN_OUTPUT_DIR=out python3 main.py
```

## Sources
News facts come from AP, Reuters, AFP, BBC, Al Jazeera, The Guardian and other outlets dated 22 November 2026.

## License
MIT

## Verification
- `main.py` copies `entry.png` deterministically in 64 KiB chunks
- compares sha256 with `--verify`; the copy is byte-identical, checked locally
