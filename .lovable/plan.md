

## Replace Navbar Logo with Styled Text

Replace the current `NK_logo.png` image logo with a styled text logo matching the reference: bold serif "NK" followed by lighter "Global Harmony".

### Changes

**`src/components/Navbar.tsx`**
- Remove the `import logo from "@/assets/NK_logo.png"` import
- Replace the `<img>` tags (around lines 163-170) with a styled text element:
  - `<span className="font-serif text-2xl tracking-wide"><span className="font-bold">NK</span> Global Harmony</span>`
- Apply to both the home button version and the Link version
- Reduce the navbar vertical padding from `py-6` to `py-4` since the text logo is more compact than the large image

**`src/index.css`** (if needed)
- Confirm Playfair Display is available as `font-serif` — it was added in the earlier aesthetic overhaul

