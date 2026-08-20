# Fleet Priority — Case Study

A self-contained, single-file case study page for [Fleet Priority](https://github.com/jestinpresley-sys/fleet-priority-saas), covering what it does, the engineering decisions behind it, and how it was deployed.

**View it:** open `index.html` directly in a browser — no server needed, everything (font, screenshots) is inlined.

## Structure

```
index.html                        the built, self-contained page (what you publish/share)
src/
  case-study-template.html        source template — edit this, not index.html
  build.js                        inlines the font + screenshots into index.html
assets/
  oswald-variable.ttf             display typeface, embedded as a data URI
  screenshots/                    the 7 exhibit screenshots, embedded as data URIs
```

## Editing

1. Edit `src/case-study-template.html`. Image/font placeholders look like `__IMG_01__` and `__FONT_B64__`.
2. Rebuild:
   ```bash
   node src/build.js
   ```
3. `index.html` is regenerated in place.

Screenshots were captured from a seeded demo account (no real customer data) via `html2canvas`, then cropped with Pillow where the full page was taller than useful for a report page.
