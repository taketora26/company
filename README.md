# TigerWorks

## Setup
```bash
npm i
npm start
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

画像パスは `src/siteConfig.js` の `images` に集約しています。実写真へ差し替える際は次を推奨します。

| 用途 | 推奨ファイル名 | 比率 | 推奨サイズ |
|---|---|---:|---:|
| ヒーロー（草花の家外観・木部） | `hero-kusabana.webp` | 16:10 | 1920×1200 |
| 購入直後の外観 | `kusabana-purchase-exterior.webp` | 4:3 | 1600×1205 |
| 空き家時代のリビング | `kusabana-before-living.webp` | 4:3 | 1600×1205 |
| 改修中 | `kusabana-renovation.webp` | 4:3 | 1600×1200 |
| 残した建具・柱・畳 | `kusabana-details.webp` | 4:3 | 1600×1200 |
| 現在のリビング | `kusabana-after-living.webp` | 3:2 | 1600×1067 |
| 現在の和室 | `kusabana-after-tatami.webp` | 3:2 | 1600×1067 |
| 改修途中・壁の仕上げ | `kusabana-renovation-work.webp` | 縦位置 | 長辺1200px |
| 現在の和室 | `kusabana-tatami.webp` | 4:3 | 1600×1200 |
| 代表者 | `representative.webp` | 4:5 | 1200×1500 |
| 現地調査・打ち合わせ | `partner-meeting.webp` | 4:5 | 1200×1500 |

公開前に、各写真が指定用途と一致すること、および写り込んだ人物・所有物の掲載許諾を確認してください。

## Public settings

`src/siteConfig.js` で料金表示（`pricingVisible`）、運営管理サービスの状態（`managementServiceStatus`）、返信目安、GoogleフォームURLを変更できます。登録完了を確認するまでは `managementServiceStatus: "preparing"` を維持してください。

## Google Form
If the short URL doesn't embed, open your Google Form → **Send** → `<>` (Embed) and copy the URL like:
`https://docs.google.com/forms/d/e/.../viewform?embedded=true`

Then replace the `iframe src` in `src/TigerWorksLanding.jsx`.
