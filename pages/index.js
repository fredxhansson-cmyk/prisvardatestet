import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const ORG_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Prisvärdatestet\",\"url\":\"https://prisvardatestet.vercel.app\",\"logo\":\"https://prisvardatestet.vercel.app/favicon.ico\",\"description\":\"Oberoende jämförelsetjänst för svenska konsumenter inom teknik.\",\"foundingDate\":\"2026\",\"inLanguage\":\"sv-SE\",\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"customer support\",\"url\":\"https://prisvardatestet.vercel.app/kontakt\"}}";
const WEB_PAGE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Prisvärda träningshörlurar 2026 - Köpguide\",\"description\":\"Upptäck prisvärda träningshörlurar 2026 ✓ Sony, Apple, Bose & fler ✓ Perfekt för alla träningsbehov.\",\"url\":\"https://prisvardatestet.vercel.app\",\"datePublished\":\"2026-06-24\",\"dateModified\":\"2026-06-24\",\"inLanguage\":\"sv-SE\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"Prisvärdatestet\",\"url\":\"https://prisvardatestet.vercel.app\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Hem\",\"item\":\"https://prisvardatestet.vercel.app\"}]}}";
const ITEM_LIST_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"Prisvärda hörlurar för träning 2026 — Jämförelse 2026\",\"description\":\"Upptäck de bästa träningshörlurarna för varje budget och behov.\",\"numberOfItems\":8,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"Product\",\"name\":\"Sony WH-1000XM5\",\"url\":\"https://www.amazon.se/dp/B09XS7JWHH\",\"description\":\"Branschledande brusreducering — perfekt för pendlare & resenärer\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.9\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"472\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"3290\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.amazon.se/dp/B09XS7JWHH\"}}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"Product\",\"name\":\"Apple AirPods Pro 2\",\"url\":\"https://www.amazon.se/dp/B0BDHWDR12\",\"description\":\"Sömlös integration med iPhone — Adaptiv ANC och Transparency\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.8\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"339\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"2495\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.amazon.se/dp/B0BDHWDR12\"}}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"Product\",\"name\":\"Bose QuietComfort 45\",\"url\":\"https://www.amazon.se/dp/B098FKXT8L\",\"description\":\"Mjuk komfort och kraftfull brusreducering — Boses klassiker\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.7\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"512\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"2990\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.amazon.se/dp/B098FKXT8L\"}}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"Product\",\"name\":\"Samsung Galaxy Buds3 Pro\",\"url\":\"https://www.amazon.se/dp/B0D3JTHHZ4\",\"description\":\"Flaggskepp från Samsung — intelligent ANC och Hi-Fi-ljud\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.7\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"198\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"2499\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.amazon.se/dp/B0D3JTHHZ4\"}}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"Product\",\"name\":\"Sennheiser Momentum 4\",\"url\":\"https://www.amazon.se/dp/B0B15X96NW\",\"description\":\"Audiofil-ljud med 60h batteritid — bäst för musikälskaren\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.8\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"710\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"2690\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.amazon.se/dp/B0B15X96NW\"}}},{\"@type\":\"ListItem\",\"position\":6,\"item\":{\"@type\":\"Product\",\"name\":\"JBL Tour One M2\",\"url\":\"https://www.amazon.se/dp/B0BV3CPGQF\",\"description\":\"Kraftfull bas och tydlig ANC — bra pris-prestanda\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"555\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"1990\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.amazon.se/dp/B0BV3CPGQF\"}}},{\"@type\":\"ListItem\",\"position\":7,\"item\":{\"@type\":\"Product\",\"name\":\"Jabra Evolve2 85\",\"url\":\"https://www.amazon.se/dp/B08C6RNDQV\",\"description\":\"Professionellt headset för kontor och videomöten\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.6\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"728\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"3990\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.amazon.se/dp/B08C6RNDQV\"}}},{\"@type\":\"ListItem\",\"position\":8,\"item\":{\"@type\":\"Product\",\"name\":\"Beats Studio Pro\",\"url\":\"https://www.amazon.se/dp/B0BXNM7BKX\",\"description\":\"Iconic design, kraftfullt ljud — fungerar med iPhone och Android\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.4\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"196\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"2695\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.amazon.se/dp/B0BXNM7BKX\"}}}]}";
const ARTICLE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Prisvärda hörlurar för träning 2026\",\"description\":\"Upptäck de bästa träningshörlurarna för varje budget och behov.\",\"datePublished\":\"2026-06-24\",\"dateModified\":\"2026-06-24\",\"author\":{\"@type\":\"Organization\",\"name\":\"Prisvärdatestet\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Prisvärdatestet\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://prisvardatestet.vercel.app\"}}";
const FAQ_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Vilka är de bästa hörlurarna för träning?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"De bästa hörlurarna för träning beror på dina specifika behov, men populära val inkluderar Sony WH-1000XM5 och Apple AirPods Pro 2. De erbjuder både komfort och bra ljudkvalitet.\"}}]}";

export async function getStaticProps() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.toLocaleDateString('sv-SE', { month: 'long' });
  var updated = now.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
  var fallback = [{"url":"https://www.amazon.se/dp/B09XS7JWHH","asin":"B09XS7JWHH","name":"Sony WH-1000XM5","pros":["Branschledande ANC","30h batteritid","Multipoint Bluetooth"],"badge":"🏆 Bäst i test","brand":"Sony","image":"https://axiom-engine-production-54c3.up.railway.app/img/amazon/B09XS7JWHH","price":"3 290 kr","score":"4.9","network":"amazon","priceValue":3290,"description":"Branschledande brusreducering — perfekt för pendlare & resenärer"},{"url":"https://www.amazon.se/dp/B0BDHWDR12","asin":"B0BDHWDR12","name":"Apple AirPods Pro 2","pros":["Perfekt för iPhone","Adaptiv ANC","USB-C laddning"],"badge":"Bäst för iPhone","brand":"Apple","image":"https://axiom-engine-production-54c3.up.railway.app/img/amazon/B0BDHWDR12","price":"2 495 kr","score":"4.8","network":"amazon","priceValue":2495,"description":"Sömlös integration med iPhone — Adaptiv ANC och Transparency"},{"url":"https://www.amazon.se/dp/B098FKXT8L","asin":"B098FKXT8L","name":"Bose QuietComfort 45","pros":["Bäst komfort","Utmärkt ANC","24h batteritid"],"badge":"Bäst komfort","brand":"Bose","image":"https://axiom-engine-production-54c3.up.railway.app/img/amazon/B098FKXT8L","price":"2 990 kr","score":"4.7","network":"amazon","priceValue":2990,"description":"Mjuk komfort och kraftfull brusreducering — Boses klassiker"},{"url":"https://www.amazon.se/dp/B0D3JTHHZ4","asin":"B0D3JTHHZ4","name":"Samsung Galaxy Buds3 Pro","pros":["Intelligent ANC","Hi-Fi-ljud","IPX7 vattentålig"],"badge":"Bäst Android","brand":"Samsung","image":"https://axiom-engine-production-54c3.up.railway.app/img/amazon/B0D3JTHHZ4","price":"2 499 kr","score":"4.7","network":"amazon","priceValue":2499,"description":"Flaggskepp från Samsung — intelligent ANC och Hi-Fi-ljud"},{"url":"https://www.amazon.se/dp/B0B15X96NW","asin":"B0B15X96NW","name":"Sennheiser Momentum 4","pros":["Audiofil-ljud","60h batteritid","App-anpassning"],"badge":"Bäst ljud","brand":"Sennheiser","image":"https://axiom-engine-production-54c3.up.railway.app/img/amazon/B0B15X96NW","price":"2 690 kr","score":"4.8","network":"amazon","priceValue":2690,"description":"Audiofil-ljud med 60h batteritid — bäst för musikälskaren"},{"url":"https://www.amazon.se/dp/B0BV3CPGQF","asin":"B0BV3CPGQF","name":"JBL Tour One M2","pros":["Kraftfull bas","50h batteritid","Bra pris"],"badge":"Bäst pris/prestanda","brand":"JBL","image":"https://axiom-engine-production-54c3.up.railway.app/img/amazon/B0BV3CPGQF","price":"1 990 kr","score":"4.5","network":"amazon","priceValue":1990,"description":"Kraftfull bas och tydlig ANC — bra pris-prestanda"},{"url":"https://www.amazon.se/dp/B08C6RNDQV","asin":"B08C6RNDQV","name":"Jabra Evolve2 85","pros":["8-mikrofoner","Upp till 37h","Anpassad ANC per rum"],"badge":"Bäst för arbete","brand":"Jabra","image":"https://axiom-engine-production-54c3.up.railway.app/img/amazon/B08C6RNDQV","price":"3 990 kr","score":"4.6","network":"amazon","priceValue":3990,"description":"Professionellt headset för kontor och videomöten"},{"url":"https://www.amazon.se/dp/B0BXNM7BKX","asin":"B0BXNM7BKX","name":"Beats Studio Pro","pros":["USB-C & Lightning","Personligt ljud","Sömlös Apple-integration"],"badge":null,"brand":"Beats","image":"https://axiom-engine-production-54c3.up.railway.app/img/amazon/B0BXNM7BKX","price":"2 695 kr","score":"4.4","network":"amazon","priceValue":2695,"description":"Iconic design, kraftfullt ljud — fungerar med iPhone och Android"}];
  var items = fallback.slice();

  return {
    props: { providers: items, year: year, month: month, updated: updated },
    revalidate: 86400,
  };
}

export default function Home({ providers, year, month, updated }) {
  const [sortBy, setSortBy] = useState('betyg');
  const [visibleCount, setVisibleCount] = useState(5);
  const [selected, setSelected] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  

  var extractNum = function(p) {
    if (p.rateValue) return parseFloat(p.rateValue);
    if (p.priceValue) return parseFloat(p.priceValue);
    var m = String(p.price||'').match(/[0-9]+[.,]?[0-9]*/);
    return m ? parseFloat(m[0].replace(',','.')) : 9999;
  };
  var sorted = [...providers].sort(function(a, b) {
    if (sortBy === 'pris') return extractNum(a) - extractNum(b);
    if (sortBy === 'namn') return a.name.localeCompare(b.name, 'sv');
    return parseFloat(b.score||b.rating||0) - parseFloat(a.score||a.rating||0);
  });
  var visible = sorted.slice(0, visibleCount);
  var toggleSelect = function(name) {
    setSelected(function(prev) {
      return prev.includes(name) ? prev.filter(function(n){return n!==name;}) : prev.length < 3 ? prev.concat([name]) : prev;
    });
  };
  var selectedProviders = providers.filter(function(p){return selected.includes(p.name);});

  const pc = '#6366f1';
  const pcLight = '#6366f114';
  const pcMed = '#6366f130';

  const TRACK_BASE = 'https://axiom-engine-production-54c3.up.railway.app/r';
  const SITE_SLUG = 'prisvardatestet';
  const AffBtn = ({ url, name, primary, network }) => {
    var href = TRACK_BASE && TRACK_BASE.startsWith('http')
      ? TRACK_BASE + '?p=' + encodeURIComponent(name) + '&url=' + encodeURIComponent(url) + '&site=' + SITE_SLUG + (network && network !== 'adtraction' ? '&network=' + encodeURIComponent(network) : '')
      : url;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer sponsored"
        style={{ display:'inline-block', background: primary ? pc : '#0f172a', color:'#fff',
          padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:14,
          textDecoration:'none', whiteSpace:'nowrap', transition:'opacity .15s' }}>
        {network === 'amazon' ? 'Köp på Amazon →' : 'Välj ' + name + ' →'}
      </a>
    );
  };

  const Stars = ({ score }) => {
    const n = parseFloat(score);
    return (
      <span style={{ fontSize:15, letterSpacing:1 }}>
        <span style={{ color:'#f59e0b' }}>{'★'.repeat(Math.floor(n))}</span>
        <span style={{ color:'#d1d5db' }}>{'★'.repeat(5 - Math.floor(n))}</span>
        <span style={{ color:'#64748b', fontSize:12, marginLeft:6, fontWeight:600 }}>{score}</span>
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>Prisvärda träningshörlurar 2026 - Köpguide</title>
        <meta name="description" content="Upptäck prisvärda träningshörlurar 2026 ✓ Sony, Apple, Bose & fler ✓ Perfekt för alla träningsbehov." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://prisvardatestet.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prisvärda träningshörlurar 2026 - Köpguide" />
        <meta property="og:description" content="Upptäck prisvärda träningshörlurar 2026 ✓ Sony, Apple, Bose & fler ✓ Perfekt för alla träningsbehov." />
        <meta property="og:url" content="https://prisvardatestet.vercel.app" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="Prisvärdatestet" />
        <meta property="og:image" content="https://prisvardatestet.vercel.app/api/og?title=Prisv%C3%A4rda%20tr%C3%A4ningsh%C3%B6rlurar%202026%20-%20K%C3%B6pguide&niche=teknik" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prisvärda träningshörlurar 2026 - Köpguide" />
        <meta name="twitter:description" content="Upptäck prisvärda träningshörlurar 2026 ✓ Sony, Apple, Bose & fler ✓ Perfekt för alla träningsbehov." />
        <meta name="twitter:image" content="https://prisvardatestet.vercel.app/api/og?title=Prisv%C3%A4rda%20tr%C3%A4ningsh%C3%B6rlurar%202026%20-%20K%C3%B6pguide&niche=teknik" />
        <link rel="alternate" hreflang="sv" href="https://prisvardatestet.vercel.app" />
        <link rel="alternate" hreflang="x-default" href="https://prisvardatestet.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ORG_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: WEB_PAGE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ITEM_LIST_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ARTICLE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      </Head>

      <nav style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', padding:'0 20px',
        height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, zIndex:100, fontFamily:'Inter,sans-serif' }}>
        <Link href="/" style={{ fontWeight:800, fontSize:18, color:pc, textDecoration:'none' }}>
          Prisvärdatestet
        </Link>
        <div style={{ display:'flex', gap:28, fontSize:14 }}>
          <a href="#jamfor" style={{ color:'#64748b', textDecoration:'none' }}>Jämförelse</a>
          <a href="#guide" style={{ color:'#64748b', textDecoration:'none' }}>Guide</a>
          <Link href="/om-oss" style={{ color:'#64748b', textDecoration:'none' }}>Om oss</Link>
        </div>
      </nav>

      <section style={{ background:'linear-gradient(135deg,#f0f9ff 0%,#e8f4fd 50%,#f8fafc 100%)',
        padding:'72px 20px 56px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center',
          gap:48, flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:pcLight, color:pc, padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Uppdaterad {updated}
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#f0fdf4', color:'#15803d', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Oberoende jämförelse
              </div>
            </div>
            <h1 style={{ fontSize:'clamp(26px,4vw,46px)', fontWeight:800,
              lineHeight:1.14, marginBottom:18, color:'#0f172a' }}>
              Prisvärda hörlurar för träning 2026
            </h1>
            <p style={{ fontSize:18, color:'#475569', lineHeight:1.72,
              marginBottom:32, maxWidth:540 }}>
              Upptäck de bästa träningshörlurarna för varje budget och behov.
            </p>
            <a href="#jamfor" style={{ display:'inline-block', background:pc, color:'#fff',
              padding:'14px 32px', borderRadius:10, fontWeight:700, fontSize:16,
              textDecoration:'none', boxShadow:'0 4px 24px '+pc+'44' }}>
              Köp dina hörlurar nu →
            </a>
            <p style={{ marginTop:14, fontSize:13, color:'#94a3b8' }}>
              Gratis &middot; Oberoende &middot; Ingen prenumeration
            </p>
          </div>
          <div style={{ flexShrink:0 }} dangerouslySetInnerHTML={{ __html: "<svg width=\"260\" height=\"210\" viewBox=\"0 0 260 210\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"18\" y=\"130\" width=\"34\" height=\"68\" rx=\"5\" fill=\"#6366f1\" opacity=\"0.18\"/><rect x=\"64\" y=\"98\" width=\"34\" height=\"100\" rx=\"5\" fill=\"#6366f1\" opacity=\"0.38\"/><rect x=\"110\" y=\"58\" width=\"34\" height=\"140\" rx=\"5\" fill=\"#6366f1\" opacity=\"0.65\"/><rect x=\"156\" y=\"76\" width=\"34\" height=\"122\" rx=\"5\" fill=\"#6366f1\" opacity=\"0.82\"/><rect x=\"202\" y=\"36\" width=\"34\" height=\"162\" rx=\"5\" fill=\"#6366f1\"/><path d=\"M35 124 L81 93 L127 53 L173 71 L219 31\" stroke=\"#6366f1\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"35\" cy=\"124\" r=\"5\" fill=\"#6366f1\"/><circle cx=\"81\" cy=\"93\" r=\"5\" fill=\"#6366f1\"/><circle cx=\"127\" cy=\"53\" r=\"5\" fill=\"#6366f1\"/><circle cx=\"173\" cy=\"71\" r=\"5\" fill=\"#6366f1\"/><circle cx=\"219\" cy=\"31\" r=\"5\" fill=\"#6366f1\"/><circle cx=\"228\" cy=\"178\" r=\"24\" fill=\"#6366f1\" opacity=\"0.12\" stroke=\"#6366f1\" stroke-width=\"2\"/><text x=\"228\" y=\"184\" text-anchor=\"middle\" fill=\"#6366f1\" font-family=\"Inter,sans-serif\" font-size=\"13\" font-weight=\"700\">kr</text></svg>" }} />
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid #e2e8f0',
        padding:'16px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'flex',
          gap:32, flexWrap:'wrap', justifyContent:'center', alignItems:'center' }}>
          <div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#6366f1',fontWeight:800,flexShrink:0}}>✓</span><span>Avancerad brusreducering</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#6366f1',fontWeight:800,flexShrink:0}}>✓</span><span>Svettsäkra material</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#6366f1',fontWeight:800,flexShrink:0}}>✓</span><span>Lång batteritid</span></div>
        </div>
      </div>

      <section id="jamfor" style={{ padding:'64px 20px', maxWidth:980,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <div style={{ textAlign:'center', marginBottom:36 }}>
          <h2 style={{ fontSize:30, fontWeight:800, marginBottom:10, color:'#0f172a' }}>
            Jämför topphörlurar 2026
          </h2>
          <p style={{ color:'#64748b', fontSize:15 }}>
            Vi har granskat {providers.length} alternativ &mdash; senast uppdaterat {updated}
          </p>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:20,
          flexWrap:'wrap', justifyContent:'center' }}>
          {['betyg','pris','namn'].map(function(s) { return (
            <button key={s} onClick={() => setSortBy(s)}
              style={{ padding:'7px 18px', borderRadius:20, fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:'Inter,sans-serif', border:'none',
                background: sortBy===s ? pc : '#f1f5f9',
                color: sortBy===s ? '#fff' : '#64748b' }}>
              {s==='betyg' ? '⭐ Bäst betyg' : s==='pris' ? '💰 Lägst pris' : '🔤 Namn A–Ö'}
            </button>
          ); })}
        </div>


        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {visible.map((p, i) => (
            <div key={p.name} style={{ background:'#fff', border: i===0 ? '2px solid '+pc : '1px solid #e2e8f0', borderRadius:16, padding:'22px 26px', position:'relative', boxShadow: i===0 ? '0 4px 24px '+pc+'18' : '0 1px 4px #0000000a' }}>
              <div style={{ display:'flex', gap:20, alignItems:'center', flexWrap:'wrap' }}>
                <div style={{ width:44, height:44, borderRadius:12, background: i===0 ? pcLight : '#f8fafc', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:16, color: i===0 ? pc : '#64748b', flexShrink:0, border:'1px solid '+(i===0 ? pcMed : '#e2e8f0') }}>
                  {['1','2','3','4','5'][i] || (i+1)}
                </div>
                {p.name && (
                  <div style={{ width:72, height:72, flexShrink:0, borderRadius:10, background:'#f0f4ff', border:'1px solid #e2e8f0', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{ maxWidth:68, maxHeight:68, objectFit:'contain', borderRadius:6 }}
                        onError={function(e){
                          e.target.style.display='none';
                          var init=document.createElement('span');
                          init.textContent=(p.brand||p.name||'?')[0].toUpperCase();
                          init.style.cssText='font-size:26px;font-weight:800;color:#6366f1;';
                          e.target.parentElement.appendChild(init);
                        }}
                      />
                    ) : (
                      <span style={{ fontSize:26, fontWeight:800, color:'#6366f1' }}>{(p.brand||p.name||'?')[0].toUpperCase()}</span>
                    )}
                  </div>
                )}
                <div style={{ flex:1, minWidth:200 }}>
                  <div style={{ fontWeight:800, fontSize:18, color:'#0f172a', marginBottom:3 }}>{p.name}</div>
                  <div style={{ fontSize:13, color:'#64748b', marginBottom:10 }}>{p.description}</div>
                  {p.pros && <div style={{ display:'flex', flexDirection:'column', gap:5 }}>{p.pros.map((pro, j) => (<div key={j} style={{ display:'flex', gap:7, alignItems:'flex-start', fontSize:13 }}><span style={{ color:pc, fontWeight:700, flexShrink:0 }}>✓</span><span style={{ color:'#374151' }}>{pro}</span></div>))}</div>}
                </div>
                <div style={{ textAlign:'right', minWidth:190, display:'flex', flexDirection:'column', alignItems:'flex-end', gap:8 }}>
                  <div style={{ fontSize:22, fontWeight:800, color:pc }}>{p.currentPrice || p.price}</div>
                  <Stars score={p.score} />
                  <div style={{ background:'#f0fdf4', color:'#15803d', fontSize:11, fontWeight:700, padding:'3px 10px', borderRadius:8 }}>{p.badge}</div>
                  <AffBtn url={p.url} name={p.name} primary={i===0} network={p.network} />
                  <button onClick={() => toggleSelect(p.name)} style={{ padding:'7px 14px', borderRadius:8, fontSize:12, fontWeight:600, cursor: selected.includes(p.name) || selected.length < 3 ? 'pointer' : 'not-allowed', fontFamily:'Inter,sans-serif', border:'1px solid', borderColor: selected.includes(p.name) ? pc : '#e2e8f0', background: selected.includes(p.name) ? pcLight : '#fff', color: selected.includes(p.name) ? pc : '#64748b', opacity: !selected.includes(p.name) && selected.length >= 3 ? 0.4 : 1 }}>
                    {selected.includes(p.name) ? '✓ Vald' : '+ Jämför'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop:20, marginBottom:4, display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          {visibleCount < sorted.length && (
            <button onClick={() => setVisibleCount(function(c){ return Math.min(c + 5, sorted.length); })}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid '+pc, background:'#fff', color:pc }}>
              Visa 5 fler ↓ &nbsp;<span style={{ fontWeight:400, fontSize:13, opacity:0.7 }}>({sorted.length - visibleCount} återstår)</span>
            </button>
          )}
          {visibleCount >= sorted.length && sorted.length > 5 && (
            <button onClick={() => setVisibleCount(5)}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid #e2e8f0', background:'#fff', color:'#64748b' }}>
              Visa färre ↑
            </button>
          )}
          <p style={{ margin:0, fontSize:13, color:'#94a3b8' }}>
            Visar {visible.length} av {sorted.length} alternativ
            {selected.length > 0 && <span style={{ marginLeft:12, color:pc, fontWeight:600 }}>{selected.length} valda för jämförelse</span>}
          </p>
          <p style={{ margin:0, fontSize:11, color:'#cbd5e1' }}>
            Priser är riktpriser — klicka på ett alternativ för aktuellt pris hos respektive leverantör
          </p>
        </div>

        {selected.length >= 2 && (
          <div style={{ position:'fixed', bottom:0, left:0, right:0, zIndex:80,
            background:'#0f172a', padding:'14px 20px', fontFamily:'Inter,sans-serif',
            display:'flex', alignItems:'center', justifyContent:'center', gap:14, flexWrap:'wrap',
            boxShadow:'0 -4px 32px rgba(0,0,0,0.25)' }}>
            <span style={{ color:'#e2e8f0', fontWeight:600, fontSize:14 }}>
              {selected.length} valda: {selected.join(' vs ')}
            </span>
            <button onClick={() => setShowCompare(true)}
              style={{ background:pc, color:'#fff', border:'none', borderRadius:8,
                padding:'9px 22px', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Jämför nu →
            </button>
            <button onClick={() => setSelected([])}
              style={{ background:'transparent', color:'#94a3b8', border:'1px solid #334155',
                borderRadius:8, padding:'9px 14px', fontSize:13, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Rensa
            </button>
          </div>
        )}

        {showCompare && (
          <div onClick={() => setShowCompare(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.72)', zIndex:200,
            display:'flex', alignItems:'flex-start', justifyContent:'center',
            padding:'24px 16px', overflowY:'auto', fontFamily:'Inter,sans-serif' }}>
            <div onClick={e => e.stopPropagation()} style={{ background:'#fff', borderRadius:16,
              width:'100%', maxWidth: selectedProviders.length === 2 ? 700 : 940,
              padding:28, marginTop:12, marginBottom:24 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
                <h3 style={{ fontSize:20, fontWeight:800, margin:0, color:'#0f172a' }}>
                  Jämförelse — {selectedProviders.map(function(p){return p.name;}).join(' vs ')}
                </h3>
                <button onClick={() => setShowCompare(false)}
                  style={{ background:'none', border:'none', fontSize:22, cursor:'pointer', color:'#94a3b8' }}>✕</button>
              </div>
              <div style={{ display:'grid', gridTemplateColumns: selectedProviders.map(function(){return '1fr';}).join(' '), gap:14 }}>
                {selectedProviders.map(function(p) { return (
                  <div key={p.name} style={{ border:'2px solid '+pc+'30', borderRadius:12, padding:'20px 18px',
                    display:'flex', flexDirection:'column', gap:10 }}>
                    <div style={{ fontWeight:800, fontSize:17, color:'#0f172a', borderBottom:'1px solid #f1f5f9', paddingBottom:10 }}>{p.name}</div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>PRIS</div>
                      <div style={{ fontSize:20, fontWeight:800, color:pc }}>{p.currentPrice||p.price||'—'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>BETYG</div>
                      <Stars score={p.score} />
                    </div>
                    {p.badge && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>UTMÄRKELSE</div>
                        <div style={{ background:'#f0fdf4', color:'#15803d', fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:8, display:'inline-block' }}>{p.badge}</div>
                      </div>
                    )}
                    {p.description && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>OM TJÄNSTEN</div>
                        <div style={{ fontSize:13, color:'#475569', lineHeight:1.5 }}>{p.description}</div>
                      </div>
                    )}
                    {p.pros && p.pros.length > 0 && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:6 }}>FÖRDELAR</div>
                        <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                          {p.pros.map(function(pro,j){return(
                            <div key={j} style={{ display:'flex', gap:6, fontSize:13 }}>
                              <span style={{ color:pc, fontWeight:700, flexShrink:0 }}>✓</span>
                              <span style={{ color:'#374151' }}>{pro}</span>
                            </div>
                          );})}
                        </div>
                      </div>
                    )}
                    <div style={{ marginTop:'auto', paddingTop:10 }}>
                      <AffBtn url={p.url} name={p.name} primary={true} network={p.network} />
                    </div>
                  </div>
                );})}
              </div>
              <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
                * Stäng för att välja fler alternativ eller byta urval.
              </p>
            </div>
          </div>
        )}

        <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
          * Vi kan erhålla provision vid val via våra länkar. Det påverkar aldrig priset för dig eller våra oberoende betyg.
          Se vår <Link href="/om-oss" style={{ color:pc }}>redaktionspolicy</Link>.
        </p>
      </section>

      

      <section id="guide" style={{ background:'#f8fafc',
        borderTop:'1px solid #e2e8f0', padding:'64px 20px',
        fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <h2 style={{ fontSize:28, fontWeight:800, marginBottom:20, color:'#0f172a' }}>
            Köpa hörlurar
          </h2>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>
            Att välja rätt hörlurar för träning kan påverka din prestation och motivation. Först och främst bör du överväga komforten. Eftersom du kommer att ha dem på under fysiska aktiviteter, är det viktigt att de sitter bra och inte skaver. Hörlurar som Sony WH-1000XM5 och Jabra Evolve2 85 erbjuder justerbara band och mjuka öronkuddar för maximal komfort. Därefter bör du tänka på ljudkvaliteten. Du vill ha hörlurar som ger klart och balanserat ljud, vilket är avgörande för att hålla energin uppe under träningen. Märken som Sennheiser och Bose är kända för sin exceptionella ljudkvalitet. En annan viktig faktor är batteritiden. Se till att dina hörlurar har tillräckligt med batteritid för dina längsta träningspass. JBL Tour One M2 och Beats Studio Pro erbjuder långvarig batteriprestanda. Slutligen, tänk på hållbarheten. Hörlurar som är svett- och vattenresistenta, som Samsung Galaxy Buds3 Pro, är idealiska för intensiv träning.
          </p>
          <h3 style={{ fontSize:22, fontWeight:700, marginBottom:16, color:'#0f172a', marginTop:40 }}>Vanliga misstag</h3>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>Ett av de vanligaste misstagen när man köper hörlurar för träning är att fokusera för mycket på varumärket istället för funktionerna. Det är viktigt att välja hörlurar som uppfyller dina specifika behov snarare än att gå efter det mest populära märket. Ett annat misstag är att inte prova hörlurarna innan köp. Komfort är subjektivt, och det som fungerar för en person kanske inte fungerar för en annan. Se till att du testar dem, eller åtminstone köper från en butik med bra returpolicy. Slutligen, glöm inte att kontrollera batteritiden. Det är frustrerande när hörlurarna dör mitt under ett träningspass, så se till att de matchar dina behov.</p>
          <h3 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:'#0f172a' }}>
            Vad ska du tänka på?
          </h3>
          <div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6366f115',color:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>1</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Prioritera komfort</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6366f115',color:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>2</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Kontrollera ljudkvaliteten</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6366f115',color:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>3</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Se över batteritiden</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6366f115',color:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>4</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Välj hållbara material</p></div>
        </div>
      </section>

      <section style={{ padding:'64px 20px', maxWidth:760,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <h2 style={{ fontSize:26, fontWeight:800, marginBottom:32, color:'#0f172a' }}>
          Vanliga frågor
        </h2>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilka är de bästa hörlurarna för träning?<span style={{color:'#6366f1',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>De bästa hörlurarna för träning beror på dina specifika behov, men populära val inkluderar Sony WH-1000XM5 och Apple AirPods Pro 2. De erbjuder både komfort och bra ljudkvalitet.</p></details>
      </section>

      <section style={{ background:'#f8fafc', borderTop:'1px solid #e2e8f0', padding:'32px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <p style={{ fontSize:14, color:'#64748b', marginBottom:12, fontWeight:600 }}>Läs mer:</p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <a href="/horlur" style={{color:'#6366f1',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa trådlösa hörlurar</a>
            · <a href="/laptop" style={{color:'#6366f1',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa laptop</a>
            · <a href="/mobiltelefon" style={{color:'#6366f1',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa mobiltelefon</a>
            · <a href="/surfplatta" style={{color:'#6366f1',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa surfplatta</a>
          </div>
        </div>
      </section>

      <footer style={{ background:'#0f172a', color:'#94a3b8',
        padding:'52px 20px 32px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:980, margin:'0 auto' }}>
          <div style={{ display:'flex', gap:48, flexWrap:'wrap', marginBottom:36 }}>
            <div style={{ maxWidth:260 }}>
              <div style={{ fontWeight:800, color:'#fff', fontSize:18, marginBottom:10 }}>Prisvärdatestet</div>
              <p style={{ fontSize:13, lineHeight:1.75 }}>
                Oberoende jämförelsetjänst för svenska konsumenter. Vi jämför 8 alternativ inom teknik.
              </p>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Sidor</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Jämförelse</Link>
                <Link href="/om-oss" style={{ color:'#94a3b8', textDecoration:'none' }}>Om oss</Link>
                <Link href="/kontakt" style={{ color:'#94a3b8', textDecoration:'none' }}>Kontakt</Link>
                <Link href="/integritetspolicy" style={{ color:'#94a3b8', textDecoration:'none' }}>Integritetspolicy</Link>
              </div>
            </div>
            
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Jämförelser</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/jamfor/sony-wh-1000xm5-vs-apple-airpods-pro-2" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Sony WH-1000XM5 vs Apple AirPods Pro 2</Link>
                <Link href="/jamfor/sony-wh-1000xm5-vs-bose-quietcomfort-45" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Sony WH-1000XM5 vs Bose QuietComfort 45</Link>
                <Link href="/jamfor/sony-wh-1000xm5-vs-samsung-galaxy-buds3-pro" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Sony WH-1000XM5 vs Samsung Galaxy Buds3 Pro</Link>
                <Link href="/jamfor/sony-wh-1000xm5-vs-sennheiser-momentum-4" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Sony WH-1000XM5 vs Sennheiser Momentum 4</Link>
                <Link href="/jamfor/sony-wh-1000xm5-vs-jbl-tour-one-m2" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Sony WH-1000XM5 vs JBL Tour One M2</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop:'1px solid #1e293b', paddingTop:24, fontSize:12, lineHeight:1.75 }}>
            <p style={{ marginBottom:8 }}>
              &copy; {year} Prisvärdatestet. Oberoende jämförelsetjänst utan koppling till listade
              varumärken utöver eventuella affiliate-provisioner.
            </p>
            <p>
              <strong style={{ color:'#e2e8f0' }}>Affiliateinformation:</strong> Sidan innehåller
              affiliate-länkar via Adtraction Sverige. Vi kan ta emot provision från annonsörer.
              Det påverkar aldrig priset för dig eller våra oberoende betyg.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}