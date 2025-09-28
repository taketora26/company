# TigerWorks (CRA + Tailwind) — Minimal Project

## Setup
```bash
npm i
npm start
```


```shell
 % npx -y react-scripts@5.0.1 start
```

If Tailwind styles don't apply, run `npm i -D tailwindcss postcss autoprefixer` again.

## Build
```bash
 npx -y react-scripts@5.0.1 build
```

## Images
Put your images under:
```
public/works/
  - living_renovation.jpg
  - outdoor_bbq.jpg
  - flooring_endgrain.jpg
  - lake_view.jpg
  - forest_trail.jpg
```
Replace filenames in `src/TigerWorksLanding.jsx` if you prefer different names.

## Google Form
If the short URL doesn't embed, open your Google Form → **Send** → `<>` (Embed) and copy the URL like:
`https://docs.google.com/forms/d/e/.../viewform?embedded=true`

Then replace the `iframe src` in `src/TigerWorksLanding.jsx`.
