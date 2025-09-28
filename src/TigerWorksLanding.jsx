import { useState, useEffect } from "react";

export default function TigerWorksLanding() {
  const [lang, setLang] = useState('ja');
  const t = (ja, en) => (lang === 'ja' ? ja : en);

  const nav = [
    { id: 'top', label: t('トップ', 'Top') },
    { id: 'services', label: t('事業内容', 'Services') },
    { id: 'works', label: t('実績', 'Works') },
    { id: 'company', label: t('会社概要', 'Company') },
    { id: 'message', label: t('代表メッセージ', 'Message') },
    { id: 'contact', label: t('お問い合わせ', 'Contact') },
  ];

  // 作品データ（今の配列をそのまま使ってOK）
  const works = [
    { src: {`${process.env.PUBLIC_URL}/works/living_renovation.jpg`},
      title: t('リビング リノベーション事例','Living Room Renovation'),
      note: t('東京都あきる野市古民家（築50年）','Traditional house in Akiruno, Tokyo (50 years old)') },
    { src: {`${process.env.PUBLIC_URL}/works/japanese_room.jpg`},
      title: t('和室のリノベーション事例','Japanese Room Renovation'),
      note: t('埼玉県熊谷市古民家（築64年）','Traditional house in Kumagaya, Saitama (64 years old)') },
    { src: {`${process.env.PUBLIC_URL}/works/kitchen.jpg`},
      title: t('キッチンのリノベーション事例','Kitchen Renovation'),
      note: t('埼玉県熊谷市古民家（築64年）','Traditional house in Kumagaya, Saitama (64 years old)') },
    { src: {`${process.env.PUBLIC_URL}/works/Interior_coordinator.jpg`},
      title: t('インテリアコーディネートの事例','Interior coordination examples') },
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [active, setActive] = useState(0);

// Esc/←→ キー対応 & 背景スクロール固定
  useEffect(() => {
    const onKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % works.length);
      if (e.key === "ArrowLeft") setActive((i) => (i + works.length - 1) % works.length);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.classList.toggle("overflow-hidden", lightboxOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [lightboxOpen, works.length]);



  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={`${process.env.PUBLIC_URL}/works/logo.png`} alt={t('TigerWorksロゴ','TigerWorks logo')} className="w-9 h-9 rounded-md object-contain" />
            <span className="font-semibold">TigerWorks Inc.</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm hover:opacity-70">
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <button onClick={() => setLang('ja')} className={`text-sm px-2 py-1 rounded ${lang==='ja'?'bg-neutral-900 text-white':'hover:bg-neutral-100'}`}>JA</button>
              <span className="text-neutral-300">|</span>
              <button onClick={() => setLang('en')} className={`text-sm px-2 py-1 rounded ${lang==='en'?'bg-neutral-900 text-white':'hover:bg-neutral-100'}`}>EN</button>
            </div>
          </nav>
          <details className="md:hidden">
            <summary className="cursor-pointer text-sm">Menu</summary>
            <div className="absolute right-4 mt-2 bg-white shadow-xl rounded-2xl p-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="text-sm" onClick={(e) => (e.currentTarget.closest('details')).removeAttribute('open')}>
                  {n.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t">
                <button onClick={() => setLang('ja')} className={`text-sm px-2 py-1 rounded ${lang==='ja'?'bg-neutral-900 text-white':'hover:bg-neutral-100'}`}>JA</button>
                <button onClick={() => setLang('en')} className={`text-sm px-2 py-1 rounded ${lang==='en'?'bg-neutral-900 text-white':'hover:bg-neutral-100'}`}>EN</button>
              </div>
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-white"/>
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                {t('古民家・賃貸を“手で”再生する', 'Hands‑on revival of traditional homes & rentals')}
              </h1>
              <p className="mt-4 text-neutral-600">
                {t(
                    '株式会社TigerWorksは、築古不動産の再生、賃貸運営、簡易宿所（民泊）企画をワンストップで提供します。代表自ら施工・設計・運営まで関わり、地域に根ざした価値創出を行います。',
                    'TigerWorks provides one‑stop services for aged‑property renovation, rental operations, and guesthouse (minpaku) planning. The founder is directly involved—from design and build to operations—creating value rooted in the local community.'
                )}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#services" className="px-5 py-3 rounded-2xl bg-neutral-900 text-white text-sm font-medium hover:opacity-90">
                  {t('事業内容', 'Our Services')}
                </a>
                <a href="#contact" className="px-5 py-3 rounded-2xl border text-sm font-medium hover:bg-neutral-50">
                  {t('相談する', 'Contact us')}
                </a>
              </div>
              <div className="mt-6 text-xs text-neutral-500">
                {t('拠点：東京都昭島市 / 対応エリア：多摩・西東京・埼玉・神奈川', 'Base: Akishima, Tokyo / Service area: West Tokyo, Tama, Saitama, Kanagawa')}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl shadow-sm bg-neutral-200 overflow-hidden">
              <img src={`${process.env.PUBLIC_URL}/works/work2.jpg`}  alt="Renovated interior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">{t('Service / 事業内容', 'Service')}</h2>
          <p className="mt-2 text-neutral-600 text-sm">{t('小規模でも品質重視で確実に。現場主義でスピーディに対応します。', 'Small scale, high quality. Fast, on-site execution.')}</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: t('賃貸運営・管理（自社保有／再生含む）', 'Leasing & Property Management'),
                desc: t('運営・リーシング・修繕計画・現場対応まで。長期運用を見据えた安定稼働を支援します。', 'Operations, leasing, maintenance planning, and on‑site response for stable long‑term operations.'),
              },
              {
                title: t('リフォーム／リノベ設計・施工', 'Renovation Design & Build'),
                desc: t('企画・設計・施工管理。DIYと専門工事のハイブリッドでコスト最適化。', 'Planning, design, and construction management. Hybrid DIY + professional works for cost optimization.'),
              },
              {
                title: t('古民家再生・活用コンサル', 'Traditional House Revitalization'),
                desc: t('現地調査、再生プラン、コスト・収支試算、補助金検討まで伴走。', 'Site survey, revitalization plan, cost/returns modeling, and subsidy review.'),
              },
              {
                title: t('宿泊事業（旅館業／住宅宿泊）', 'Hospitality (Ryokan / Minpaku)'),
                desc: t('行政協議、消防・保健所対応、運営設計、OTA掲載・運用まで。', 'Permits coordination, fire/health compliance, operations design, OTA listing & operations.'),
              },
              {
                title: t('建材・インテリア企画・販売', 'Materials & Interior Curation'),
                desc: t('内装材・家具のセレクト、スタイリング提案・販売。', 'Selection of finishes and furniture, styling proposals and sales.'),
              },
            ].map((s, i) => (
                <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-neutral-100">
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-neutral-600 mt-2">{s.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">{t('Works / 実績', 'Works')}</h2>
          <p className="mt-2 text-neutral-600 text-sm">
            {t('DIY＋プロ施工のハイブリッド事例。民泊化・賃貸リノベの写真を掲載予定。',
                'Hybrid DIY & pro projects. Guesthouse and rental renovations.')}
          </p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {works.map((w, i) => (
                <figure key={i}
                        className="group rounded-2xl overflow-hidden border border-neutral-100 shadow-sm cursor-zoom-in"
                        onClick={() => { setActive(i); setLightboxOpen(true); }}>
                  <img
                      src={w.src}
                      alt={typeof w.title === 'string' ? w.title : ''}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy" decoding="async"
                  />
                  <figcaption className="p-4 text-sm bg-white">
                    <div className="font-medium">{w.title}</div>
                    {w.note && <div className="text-neutral-600">{w.note}</div>}
                  </figcaption>
                </figure>
            ))}
          </div>

          {/* Lightbox / Modal */}
          {lightboxOpen && (
              <div
                  className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center"
                  role="dialog" aria-modal="true" aria-label="Work preview"
                  onClick={() => setLightboxOpen(false)}
              >
                <div
                    className="relative max-w-5xl w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                  {/* 画像 */}
                  <img
                      src={works[active].src}
                      alt={typeof works[active].title === 'string' ? works[active].title : ''}
                      className="w-full max-h-[80vh] object-contain bg-black/10 rounded-2xl shadow-2xl"
                  />

                  {/* キャプション */}
                  <div className="mt-3 bg-white/95 rounded-xl p-4 shadow flex items-start gap-3">
                    <div className="grow">
                      <div className="font-medium">{works[active].title}</div>
                      {works[active].note && (
                          <div className="text-sm text-neutral-600">{works[active].note}</div>
                      )}
                    </div>
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="shrink-0 px-3 py-1 rounded-lg border hover:bg-neutral-50"
                        aria-label="Close"
                    >×</button>
                  </div>

                  {/* Prev / Next */}
                  <button
                      onClick={() => setActive((i) => (i + works.length - 1) % works.length)}
                      className="absolute left-0 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/90 rounded-full shadow hover:bg-white"
                      aria-label="Previous image"
                  >‹</button>
                  <button
                      onClick={() => setActive((i) => (i + 1) % works.length)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-white/90 rounded-full shadow hover:bg-white"
                      aria-label="Next image"
                  >›</button>
                </div>
              </div>
          )}
        </div>
      </section>

      {/* Company */}
      <section id="company" className="py-16 sm:py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">{t('Company / 会社概要', 'Company')}</h2>
            <dl className="mt-6 text-sm grid grid-cols-[auto,1fr] gap-x-6 gap-y-3">
              <dt className="text-neutral-500">{t('会社名', 'Name')}</dt><dd>株式会社TigerWorks</dd>
              <dt className="text-neutral-500">{t('設立日', 'Established')}</dt><dd>2025年6月4日</dd>
              <dt className="text-neutral-500">{t('代表者', 'Representative')}</dt><dd>池田 健虎</dd>
              <dt className="text-neutral-500">{t('所在地', 'Address')}</dt><dd>〒196-0033 東京都昭島市福島町908-33</dd>
              <dt className="text-neutral-500">{t('資本金', 'Capital')}</dt><dd>480万円</dd>
              <dt className="text-neutral-500">{t('事業内容', 'Business')}</dt><dd>{t('不動産賃貸業／リノベーション／簡易宿所運営', 'Real estate leasing / Renovation / Guesthouse ops')}</dd>
            </dl>
          </div>
          <div className="rounded-3xl bg-white p-6 border border-neutral-100 shadow-sm">
            <h3 className="font-semibold">{t('こだわり','Our ethos')}</h3>
            <ul className="mt-3 text-sm list-disc pl-5 space-y-2 text-neutral-700">
              <li>{t('代表が現場に入り、意思決定から施工まで一貫', 'Founder-led, hands-on from decision to build')}</li>
              <li>{t('DIYと専門工事の最適配分でコスト最適化', 'Optimize cost via DIY + pro mix')}</li>
              <li>{t('行政・金融機関・地域との調整力', 'Coordination with authorities, banks, community')}</li>
              <li>{t('和室を単に洋室化せず、木部・建具・左官など既存素材を活かす設計','Material-first design: rather than simply converting tatami rooms to Western style, we reuse and restore original timber, fittings, and plaster.')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Message */}
      <section id="message" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-200">
           <img src={`${process.env.PUBLIC_URL}/works/IMG_8614_1.jpg`} alt="Founder" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">{t('Message / 代表挨拶', 'Message')}</h2>
            <p className="mt-4 text-neutral-700 text-sm leading-7">
              {t('私は佐賀県伊万里市出身で、男5人兄弟の4男として育ちました。私が生まれる5年前に建てられた実家は、今も手入れが行き届き自慢の家です。だからこそ、古い家も手をかければ、かつての美しさと新しい使いやすさを取り戻せると信じています。いま日本各地で空き家が増える中、古民家の良さを活かし、次の世代へ引き継げる住まいへ再生していきます。',
                  "I’m from Imari City in Saga Prefecture, the fourth of five brothers, and I grew up in this house. Our family home was built five years before I was born and is still carefully maintained—a home I’m proud of. That is why I believe older houses, when cared for, can regain their former beauty while becoming easier to live in. As vacant homes increase across Japan, I want to bring out the best of traditional houses and restore them into homes that can be passed on to the next generation."
              )}
            </p>
            <div className="mt-4 text-sm text-neutral-700 italic">
              {t('代表取締役　池田 健虎', 'Taketo Ikeda, Representative Director')}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold">{t('Contact / お問い合わせ', 'Contact')}</h2>
          <div className="mt-6">
            <p className="text-sm text-neutral-600 mb-4">{t('お問い合わせは下記フォームよりお願いいたします。', 'Please contact us via the form below. Phone number is private.')}</p>
            <div className="rounded-3xl bg-white p-2 shadow-sm border border-neutral-100 overflow-hidden">
              <iframe title="contact-form" src="https://forms.gle/CC3BTBAhBMWgQ7HE8" className="w-full h-[520px]"></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-sm text-neutral-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} TigerWorks Inc.</div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-70">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:opacity-70">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
