# THE SUNDAY HERALD — the complete 24 hours of Sunday 22 November 2026

A square 1024x1024 newspaper poster summing up the world's news of
Sunday 22 November 2026 across the full 24 hours of Universal Time:

- masthead and date banner (COMPLETE 24H UT)
- six-number stat strip (0 fossil-fuel mentions, 186 drones, 258 seats...)
- three hero stories: COP31 collapse, Dymer strike, Benghazi corvette
- an AROUND THE CLOCK timeline: 26 stories, each stamped in UT, 00:20 to 23:59
- an ALSO-ON ticker of 12 more dated stories
- DATE CHECK box and sources footer

41 dated stories in all, every one from Sunday 22 November 2026.

## Files
- gen.mjs — builds news.html from data.mjs
- data.mjs — the day's verified story data
- page.mjs, css.mjs — layout and styles
- shot.cjs — renders entry.png (Playwright, offline)
- main.py — copies the committed entry.png to the output directory
- entry.png — the deliverable (1024x1024, under 1 MiB)

## Run
    node gen.mjs && node shot.cjs
    MAKEFUN_OUTPUT_DIR=out python3 main.py

Facts from AP, Reuters, AFP, BBC, Al Jazeera, The Guardian, DW, France 24,
UN News, Kyiv Independent, Korea Herald, Xinhua, NYT, WIRED reporting dated
Sunday 22 November 2026. MIT licensed.
