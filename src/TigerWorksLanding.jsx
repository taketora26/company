import { useEffect, useState } from "react";
import { siteConfig } from "./siteConfig";

const concerns = [
  "相続した家を残したいが、管理を続けられない",
  "売却や解体以外の可能性も検討したい",
  "修繕にいくらかかるのか分からない",
  "遠方に住んでいて、頻繁に現地へ行けない",
  "民泊、賃貸、家族利用のどれが適しているか分からない",
];

const services = [
  ["01", "物件と立地の可能性確認", "建物の状態、立地、周辺環境、法令・自治体ルール、駐車場などを確認します。"],
  ["02", "活用方法と概算収支の検討", "民泊、賃貸、売却、家族利用を比較し、必要な修繕と概算収支を整理します。"],
  ["03", "改修計画の作成", "残す部分と直す部分を見極め、予算や使い方、清掃・維持管理まで考えた計画をつくります。"],
  ["04", "専門業者への発注支援・施工調整", "オーナー様と各専門業者が直接契約し、TigerWorksが仕様整理、発注支援、工程調整、現場確認を行います。"],
  ["05", "民泊・賃貸等の開始準備", "コンセプト、備品、撮影、掲載準備、利用案内、清掃体制を整えます。許認可は必要に応じ専門家と連携します。"],
  ["06", "継続できる運営方法の設計", "予約、清掃、修繕、報告など、開業後に無理なく続けられる運営の流れを設計します。"],
];

const values = [
  ["家の記憶を尊重する", "古い柱、建具、畳、庭など、その家らしさを見極めて残します。"],
  ["現場と収支の両方から考える", "見た目だけでなく、修繕費、清掃、運営負担まで現実的に検討します。"],
  ["無理に民泊を勧めない", "賃貸、売却、家族利用も含め、その家と所有者に合う選択肢を考えます。"],
];

const flow = [
  ["01", "まずは状況を伺います", "所在地、建物の状態、相続や管理の状況、残したい思いなどをお聞きします。"],
  ["02", "可能性と進め方を整理します", "現地確認の要否や、比較すべき活用方法、必要な調査をご案内します。"],
  ["03", "必要な支援をご提案します", "物件の状況とご希望に応じて、診断、改修計画、開業準備などの範囲をお見積もりします。"],
];

const nav = [
  ["/about.html", "私たちについて"],
  ["#services", "事業内容"],
  ["#case", "再生事例"],
  ["#partners", "パートナーの方へ"],
  ["#company", "会社概要"],
];

function Image({ src, alt, className = "" }) {
  return <img src={src} alt={alt} width="1200" height="800" loading="lazy" decoding="async" className={className} />;
}

export default function TigerWorksLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!menuOpen) return undefined;
    const close = (event) => event.key === "Escape" && setMenuOpen(false);
    addEventListener("keydown", close);
    return () => removeEventListener("keydown", close);
  }, [menuOpen]);

  const managementText = siteConfig.managementServiceStatus === "available"
    ? "運営管理のご相談を受け付けています。"
    : "運営管理サービスは提供開始に向けて準備中です。";

  const openForm = () => setNotice(`相談フォームを開きます。送信後、${siteConfig.replyTime}にご連絡します。`);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">本文へ移動</a>
      <header className="header">
        <a href="#top" className="brand" aria-label="TigerWorks トップへ">
          <img src="/works/logo.webp" alt="" width="44" height="44" />
          <span>TigerWorks</span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <a className="button small" href="#contact">空き家の活用を相談する</a>
        </nav>
        <button className="menu-button" aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? "閉じる" : "メニュー"}
        </button>
        {menuOpen && (
          <nav id="mobile-menu" className="mobile-nav" aria-label="モバイルナビゲーション">
            {nav.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a href="#contact" onClick={() => setMenuOpen(false)}>空き家の活用を相談する</a>
          </nav>
        )}
      </header>

      <main id="main">
        <section id="top" className="hero">
          <img src={siteConfig.images.hero} alt="木の天井や床の間を生かして再生した草花の家の和室" width="1600" height="1067" fetchpriority="high" />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1>愛された家を、<br />次の世代へ。</h1>
            <p className="hero-description">TigerWorksは、相続した空き家や古民家の可能性を見極め、改修の企画、民泊・賃貸などの活用設計、開業準備まで支援します。東京都多摩地域を中心に、売却や解体だけではない選択肢を一緒に考えます。</p>
            <div className="hero-actions">
              <a className="button light-button" href="#contact">空き家の活用を相談する</a>
              <a className="secondary-link" href="#case">草花の家の再生事例を見る</a>
            </div>
            <p className="hero-note">活用方法が決まっていない段階でもご相談いただけます。</p>
          </div>
        </section>

        <section className="section concerns">
          <div className="wide split-heading">
            <div><p className="section-label">相続空き家について</p><h2 className="section-heading--short">このようなお悩みはありませんか。</h2></div>
            <ul className="concern-list">{concerns.map((concern) => <li key={concern}>{concern}</li>)}</ul>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="wide">
            <div className="section-heading">
              <div><p className="section-label">事業内容</p><h2 className="section-heading--short">TigerWorksができること。</h2></div>
              <p>活用方法が決まる前から、物件の確認、改修計画、始めるための準備までを一続きで考えます。</p>
            </div>
            <p className="service-message">民泊ありきではなく、その家に合った方法を考えます。</p>
            <div className="service-list">
              {services.map(([no, title, body]) => (
                <article key={no}><span className="service-no">{no}</span><div><h3>{title}</h3><p>{body}</p>{no === "06" && <strong>{managementText}</strong>}</div></article>
              ))}
            </div>
          </div>
        </section>

        <section id="case" className="section case-section">
          <div className="photo-wide">
            <div className="section-heading case-heading">
              <div><p className="section-label">草花の家 再生事例</p><h2>5年間空き家だった家に、<br />もう一度、人が集まる<br className="case-mobile-break" />時間を。</h2></div>
              <p>東京都あきる野市<br />Tiger House Kusabana</p>
            </div>
            <div className="case-editorial">
              <figure className="case-before"><Image src={siteConfig.images.renovation} alt="空き家時代の草花の家のリビング" /><figcaption><strong>再生前</strong><span>設備が使えず、そのままでは暮らせなかった室内</span></figcaption></figure>
              <div className="case-facts" aria-label="草花の家の再生概要">
                <div className="case-story-copy">
                  <p>TigerWorksが最初に再生した草花の家は、約5年間、空き家になっていました。</p>
                  <p>給湯器やガス設備は使えず、そのままでは暮らすことのできない状態でした。けれど、古い建具や木の天井、柱や間取りには、この家ならではの魅力が残っていました。</p>
                  <p>代表自ら、床、壁、柱、天井、キッチン、和室、階段、フローリングなど、一部屋ずつ状態を確かめながら丁寧に修繕しました。</p>
                  <p>一方で、外壁工事は施工業者へ、電気工事は電気工事業者へ、畳の表替えは畳店へ、給湯器とガス設備はガスの専門業者へ依頼しました。</p>
                  <p>自分たちでできる部分と、専門家へ任せる部分を見極めながら、その家らしさを残して再生。現在は、家族や友人が訪れ、新しい時間を過ごす一棟貸しの宿として活用されています。</p>
                </div>
                <dl className="case-brief"><div><dt>空き家期間</dt><dd>約5年</dd></div><div><dt>再生方針</dt><dd>残す部分と直す部分を見極める</dd></div><div><dt>現在の使われ方</dt><dd>一棟貸しの宿として活用</dd></div></dl>
              </div>
            </div>
            <div className="case-lower">
              <div className="case-brand-message">
                <h3 className="case-brand-title"><span><span className="nowrap">売るか、</span> <span className="nowrap">壊すか。</span></span><span className="nowrap">その前に、</span><span>その家の<span className="nowrap">可能性を。</span></span></h3>
                <p>残す部分と直す部分を見極め、<br />その家に合った新しい使われ方を考えます。</p>
              </div>
              <figure className="case-after"><Image src={siteConfig.images.afterLiving} alt="再生後の草花の家の明るいリビング" /><figcaption><strong>再生後</strong><span>古い造作を生かした現在のリビング</span></figcaption></figure>
            </div>
            <div className="case-outcomes">
              <article><span><b>01</b>残したもの</span><strong>古い建具、木の天井、柱、間取り、この家らしい佇まい</strong></article>
              <article><span><b>02</b>代表自ら修繕したもの</span><strong>床、壁、柱、天井、キッチン、和室、階段、フローリング</strong></article>
              <article><span><b>03</b>専門業者へ依頼したもの</span><strong>外壁工事、電気工事、給湯器・ガス設備、畳の表替え</strong></article>
              <article><span><b>04</b>現在の使われ方</span><strong>家族や友人を迎える一棟貸しの宿</strong></article>
            </div>
            <div className="case-action"><a className="button outline" href={siteConfig.stayUrl} target="_blank" rel="noopener noreferrer">再生後の宿を見る <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="section values">
          <div className="wide">
            <div className="compact-heading"><p className="section-label">私たちの判断基準</p><h2>TigerWorksが大切にする<br />3つのこと。</h2></div>
            <div className="values-grid">{values.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
            <a className="text-link" href="/about.html">Mission・Vision・Valuesの詳細を見る →</a>
          </div>
        </section>

        <section className="section flow-section">
          <div className="wide">
            <div className="compact-heading"><p className="section-label">ご相談の流れ</p><h2>決まっていない状態から、<br />順番に整理します。</h2></div>
            <div className="flow-list">{flow.map(([no, title, body]) => <article key={no}><span>{no}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
            <p className="flow-note">初回相談は無料です。物件の状況と支援範囲に応じて、その後のお見積もりをご案内します。</p>
          </div>
        </section>

        <section id="partners" className="section partners">
          <div className="wide partner-grid">
            <div><p className="section-label light">専門家・紹介パートナーの方へ</p><h2>相続した家に悩むお客様へ、<br />もう一つの選択肢を。</h2></div>
            <div><p>税理士、司法書士、不動産会社、遺品整理会社、空き家管理会社の皆様へ。TigerWorksは専門家の業務領域を尊重し、税務、登記、法律判断を代行しません。</p><p>建物の現況、活用可能性、必要改修、運営可能性、概算収支を整理し、ご本人が意思決定できる材料を提供します。民泊が向かない場合には無理に勧めません。</p><a className="button light-button" href="#contact">空き家の活用を相談する</a></div>
          </div>
        </section>

        <section id="company" className="section company">
          <div className="narrow">
            <p className="section-label">会社概要・代表者情報</p><h2>運営会社について。</h2>
            <dl>{[["会社名", "株式会社TigerWorks"], ["設立", "2025年6月4日"], ["代表者", "代表取締役　池田 健虎"], ["所在地", "〒196-0033 東京都昭島市福島町908-33"], ["資本金", "480万円"], ["事業内容", "不動産賃貸業／古民家・築古戸建ての活用支援／民泊・宿泊施設の開業支援"]].map(([dt, dd]) => <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>)}</dl>
            <div className="pricing"><h3>ご相談費用について</h3>{siteConfig.pricingVisible ? <><p>料金の目安です。正式なお見積もりは現地確認後にご案内します。</p><ul>{siteConfig.pricing.map((item) => <li key={item.name}><span>{item.name}</span><strong>{item.price}</strong></li>)}</ul></> : <p>物件の状況と支援範囲に応じてお見積もりします。まずは無料相談で状況をお聞かせください。</p>}</div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="narrow">
            <p className="section-label light">お問い合わせ</p>
            <h2 className="contact-title"><span>売るか、壊すか。</span><span><span className="contact-before">その前に、</span><span className="contact-possibility">その家の可能性を</span></span><span className="contact-final-line">一緒に考えませんか。</span></h2>
            <p>民泊や賃貸など、活用方法が決まっていない段階でもご相談いただけます。</p>
            <a className="button contact-button" href={siteConfig.contactFormUrl} target="_blank" rel="noopener noreferrer" onClick={openForm}>空き家の活用を相談する <span aria-hidden="true">↗</span></a>
            {notice && <p className="form-notice" role="status">{notice}</p>}
            <p className="contact-note">お問い合わせは専用フォームより受け付けています。</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wide footer-grid">
          <div><img src="/works/logo_silver_bright.webp" alt="" width="42" height="42" /><strong>TigerWorks</strong><p>愛された家を、次の世代へ。</p></div>
          <nav aria-label="フッターナビゲーション">{nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}<a href="#contact">お問い合わせ</a><a href="/privacy.html">プライバシーポリシー</a></nav>
          <div><p>株式会社TigerWorks<br />東京都昭島市福島町908-33</p></div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} TigerWorks Inc.</div>
      </footer>
      <a className="mobile-cta" href="#contact">空き家の活用を相談する</a>
    </div>
  );
}
