import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const ORG_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Prisvärdatestet\",\"url\":\"https://prisvardatestet.vercel.app\",\"logo\":\"https://prisvardatestet.vercel.app/favicon.ico\",\"description\":\"Oberoende jämförelsetjänst för svenska konsumenter inom teknik.\",\"foundingDate\":\"2026\",\"inLanguage\":\"sv-SE\",\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"customer support\",\"url\":\"https://prisvardatestet.vercel.app/kontakt\"}}";
const WEB_PAGE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Prisvärda Hörlurar För Träning 2026 | Jämför Nu\",\"description\":\"Prisvärda hörlurar för träning 2026 ✓ Uppdaterad 2026. Jämför 7 alternativ nu och hitta de bästa för ditt behov. Spara tid och pengar!\",\"url\":\"https://prisvardatestet.vercel.app\",\"datePublished\":\"2026-06-24\",\"dateModified\":\"2026-06-24\",\"inLanguage\":\"sv-SE\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"Prisvärdatestet\",\"url\":\"https://prisvardatestet.vercel.app\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Hem\",\"item\":\"https://prisvardatestet.vercel.app\"}]}}";
const ITEM_LIST_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"Prisvärda hörlurar för träning 2026 — jämför 7 alternativ — Jämförelse 2026\",\"description\":\"Upptäck de bästa och mest prisvärda hörlurarna för träning 2026\",\"numberOfItems\":7,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"Product\",\"name\":\"Jabra Elite 4 Active\",\"url\":\"https://www.elgiganten.se\",\"description\":\"Svettsäkra och säkra hörlurar för aktiv livsstil\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.8\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"431\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"1199\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.elgiganten.se\"}}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"Product\",\"name\":\"Sony WF-SP800N\",\"url\":\"https://www.netonnet.se\",\"description\":\"Brusreducerande och vattentåliga hörlurar för träning\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.7\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"452\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"1490\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.netonnet.se\"}}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"Product\",\"name\":\"Bose Sport Earbuds\",\"url\":\"https://www.elgiganten.se\",\"description\":\"Bekväma och stabila hörlurar för intensiv träning\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.6\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"403\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"1990\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.elgiganten.se\"}}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"Product\",\"name\":\"Beats Powerbeats Pro\",\"url\":\"https://www.netonnet.se\",\"description\":\"Trådlösa hörlurar med kraftfull bas och lång batteritid\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"616\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"2290\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.netonnet.se\"}}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"Product\",\"name\":\"Jaybird Vista 2\",\"url\":\"https://www.elgiganten.se\",\"description\":\"Robusta och kompakta hörlurar för alla väder\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.4\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"742\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"1799\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.elgiganten.se\"}}},{\"@type\":\"ListItem\",\"position\":6,\"item\":{\"@type\":\"Product\",\"name\":\"Anker Soundcore Spirit X2\",\"url\":\"https://www.netonnet.se\",\"description\":\"Prisvärda hörlurar med kraftfullt ljud för träning\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.3\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"312\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"899\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.netonnet.se\"}}},{\"@type\":\"ListItem\",\"position\":7,\"item\":{\"@type\":\"Product\",\"name\":\"Sennheiser CX Sport\",\"url\":\"https://www.elgiganten.se\",\"description\":\"Lätta och bekväma hörlurar för sport och träning\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.2\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"499\"},\"offers\":{\"@type\":\"Offer\",\"price\":\"1290\",\"priceCurrency\":\"SEK\",\"availability\":\"https://schema.org/InStock\",\"url\":\"https://www.elgiganten.se\"}}}]}";
const ARTICLE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Prisvärda hörlurar för träning 2026 — jämför 7 alternativ\",\"description\":\"Upptäck de bästa och mest prisvärda hörlurarna för träning 2026\",\"datePublished\":\"2026-06-24\",\"dateModified\":\"2026-06-24\",\"author\":{\"@type\":\"Organization\",\"name\":\"Prisvärdatestet\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"Prisvärdatestet\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://prisvardatestet.vercel.app\"}}";
const FAQ_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Vilka är de bästa hörlurarna för träning 2026?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"De bästa hörlurarna för träning 2026 inkluderar Jabra Elite 4 Active, Sony WF-SP800N och Bose Sport Earbuds.\"}},{\"@type\":\"Question\",\"name\":\"Är trådlösa hörlurar bättre för träning?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, trådlösa hörlurar ger större rörelsefrihet och minskar risken för trassel och avbrott under träning.\"}},{\"@type\":\"Question\",\"name\":\"Hur viktigt är ljudkvaliteten för träningshörlurar?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ljudkvalitet är viktigt för att få en motiverande och engagerande träningsupplevelse. Bra ljud förbättrar musikens effekt.\"}},{\"@type\":\"Question\",\"name\":\"Vilka hörlurar har bäst batteritid?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Beats Powerbeats Pro och Jaybird Vista 2 är kända för sin långa batteritid, idealiskt för långa träningspass.\"}},{\"@type\":\"Question\",\"name\":\"Är alla träningshörlurar svettresistenta?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Nej, inte alla hörlurar är svettresistenta. Det är viktigt att kontrollera produktens specifikationer innan köp.\"}},{\"@type\":\"Question\",\"name\":\"Hur väljer jag rätt passform för hörlurar?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Välj hörlurar med olika storlekar av öronproppar för att säkerställa en bra och bekväm passform.\"}},{\"@type\":\"Question\",\"name\":\"Kan jag använda vanliga hörlurar för träning?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Vanliga hörlurar kan användas, men de kanske inte erbjuder samma hållbarhet eller komfort som specifika träningshörlurar.\"}},{\"@type\":\"Question\",\"name\":\"Vilka funktioner är viktiga i träningshörlurar?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Viktiga funktioner inkluderar svettresistens, bra passform, lång batteritid och bra ljudkvalitet.\"}}]}";

export async function getStaticProps() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.toLocaleDateString('sv-SE', { month: 'long' });
  var updated = now.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
  var fallback = [{"name":"Jabra Elite 4 Active","url":"https://www.elgiganten.se","description":"Svettsäkra och säkra hörlurar för aktiv livsstil","badge":"Bäst totalt","score":"4.8","price":"1 199 kr","pros":["IP57 vattentäthet","Aktiv brusreducering","Stabil passform"]},{"name":"Sony WF-SP800N","url":"https://www.netonnet.se","description":"Brusreducerande och vattentåliga hörlurar för träning","badge":"Mest prisvärd","score":"4.7","price":"1 490 kr","pros":["Digital brusreducering","IP55 vattentålighet","Lång batteritid"]},{"name":"Bose Sport Earbuds","url":"https://www.elgiganten.se","description":"Bekväma och stabila hörlurar för intensiv träning","badge":"Bästa komfort","score":"4.6","price":"1 990 kr","pros":["Säker passform","Svett- och väderresistenta","Utökad batteritid"]},{"name":"Beats Powerbeats Pro","url":"https://www.netonnet.se","description":"Trådlösa hörlurar med kraftfull bas och lång batteritid","badge":null,"score":"4.5","price":"2 290 kr","pros":["Öronkrokar för säker passform","Svett- och vattentåliga","Upp till 9 timmars speltid"]},{"name":"Jaybird Vista 2","url":"https://www.elgiganten.se","description":"Robusta och kompakta hörlurar för alla väder","badge":null,"score":"4.4","price":"1 799 kr","pros":["IP68 vattentäthet","Stabil anslutning","Bra ljudkvalitet"]},{"name":"Anker Soundcore Spirit X2","url":"https://www.netonnet.se","description":"Prisvärda hörlurar med kraftfullt ljud för träning","badge":null,"score":"4.3","price":"899 kr","pros":["IP68 vattentäthet","Kraftfull bas","Ergonomisk passform"]},{"name":"Sennheiser CX Sport","url":"https://www.elgiganten.se","description":"Lätta och bekväma hörlurar för sport och träning","badge":null,"score":"4.2","price":"1 290 kr","pros":["Svett- och stänkskyddade","Stabil passform","Bra ljudkvalitet"]}];
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
        <title>Prisvärda Hörlurar För Träning 2026 | Jämför Nu</title>
        <meta name="description" content="Prisvärda hörlurar för träning 2026 ✓ Uppdaterad 2026. Jämför 7 alternativ nu och hitta de bästa för ditt behov. Spara tid och pengar!" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://prisvardatestet.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Prisvärda Hörlurar För Träning 2026 | Jämför Nu" />
        <meta property="og:description" content="Prisvärda hörlurar för träning 2026 ✓ Uppdaterad 2026. Jämför 7 alternativ nu och hitta de bästa för ditt behov. Spara tid och pengar!" />
        <meta property="og:url" content="https://prisvardatestet.vercel.app" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="Prisvärdatestet" />
        <meta property="og:image" content="https://prisvardatestet.vercel.app/api/og?title=Prisv%C3%A4rda%20H%C3%B6rlurar%20F%C3%B6r%20Tr%C3%A4ning%202026%20%7C%20J%C3%A4mf%C3%B6r%20Nu&niche=teknik" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prisvärda Hörlurar För Träning 2026 | Jämför Nu" />
        <meta name="twitter:description" content="Prisvärda hörlurar för träning 2026 ✓ Uppdaterad 2026. Jämför 7 alternativ nu och hitta de bästa för ditt behov. Spara tid och pengar!" />
        <meta name="twitter:image" content="https://prisvardatestet.vercel.app/api/og?title=Prisv%C3%A4rda%20H%C3%B6rlurar%20F%C3%B6r%20Tr%C3%A4ning%202026%20%7C%20J%C3%A4mf%C3%B6r%20Nu&niche=teknik" />
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
              Prisvärda hörlurar för träning 2026 — jämför 7 alternativ
            </h1>
            <p style={{ fontSize:18, color:'#475569', lineHeight:1.72,
              marginBottom:32, maxWidth:540 }}>
              Upptäck de bästa och mest prisvärda hörlurarna för träning 2026
            </p>
            <a href="#jamfor" style={{ display:'inline-block', background:pc, color:'#fff',
              padding:'14px 32px', borderRadius:10, fontWeight:700, fontSize:16,
              textDecoration:'none', boxShadow:'0 4px 24px '+pc+'44' }}>
              Jämför och välj nu →
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
          <div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#6366f1',fontWeight:800,flexShrink:0}}>✓</span><span>Stark ljudkvalitet</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#6366f1',fontWeight:800,flexShrink:0}}>✓</span><span>Bekväm passform</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#6366f1',fontWeight:800,flexShrink:0}}>✓</span><span>Lång batteritid</span></div>
        </div>
      </div>

      <section id="jamfor" style={{ padding:'64px 20px', maxWidth:980,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <div style={{ textAlign:'center', marginBottom:36 }}>
          <h2 style={{ fontSize:30, fontWeight:800, marginBottom:10, color:'#0f172a' }}>
            Jämför hörlurar för träning
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
                {p.image && (
                  <div style={{ width:72, height:72, flexShrink:0, borderRadius:10, background:'#f8fafc', border:'1px solid #e2e8f0', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
                    <img src={p.image} alt={p.name} style={{ maxWidth:68, maxHeight:68, objectFit:'contain' }} onError={function(e){e.target.style.display='none';}} />
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
            Hur man väljer rätt hörlurar
          </h2>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>
            När du ska välja rätt hörlurar för träning är det viktigt att tänka på några nyckelfaktorer. För det första bör du överväga ljudkvaliteten. Hörlurar med bra bas och tydliga toner kan göra en stor skillnad i din träningsupplevelse. För det andra är passformen avgörande. Hörlurar som inte sitter bra kan vara störande under träningen. Många modeller erbjuder olika storlekar på öronproppar för att säkerställa en god passform. Tredje faktorn att tänka på är batteritiden. Om du tränar länge kan det vara värt att investera i hörlurar med längre batteritid. Slutligen, tänk på hållbarheten. Hörlurar som tål svett och fukt är ett måste för intensiva träningspass.
          </p>
          <h3 style={{ fontSize:22, fontWeight:700, marginBottom:16, color:'#0f172a', marginTop:40 }}>Vanliga misstag att undvika</h3>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>Ett vanligt misstag är att välja hörlurar baserat endast på priset. Billigare modeller kan sakna de funktioner och kvalitet du behöver för en bra träningsupplevelse. Ett annat misstag är att inte prova passformen innan köp. Hörlurar som inte sitter bra kan lätt falla av under träning. Många ignorerar också vikten av att kontrollera hörlurarnas hållbarhet. Hörlurar som inte är svett- eller vattenresistenta kan snabbt bli förstörda. Slutligen, glöm inte att undersöka batteritiden, särskilt om du har långa träningspass.</p>
          <h3 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:'#0f172a' }}>
            Vad ska du tänka på?
          </h3>
          <div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6366f115',color:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>1</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Överväg ljudkvalitet</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6366f115',color:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>2</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Kontrollera passform</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6366f115',color:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>3</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Tänk på batteritid</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6366f115',color:'#6366f1',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>4</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Kolla hållbarhet</p></div>
        </div>
      </section>

      <section style={{ padding:'64px 20px', maxWidth:760,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <h2 style={{ fontSize:26, fontWeight:800, marginBottom:32, color:'#0f172a' }}>
          Vanliga frågor
        </h2>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilka är de bästa hörlurarna för träning 2026?<span style={{color:'#6366f1',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>De bästa hörlurarna för träning 2026 inkluderar Jabra Elite 4 Active, Sony WF-SP800N och Bose Sport Earbuds.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Är trådlösa hörlurar bättre för träning?<span style={{color:'#6366f1',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, trådlösa hörlurar ger större rörelsefrihet och minskar risken för trassel och avbrott under träning.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur viktigt är ljudkvaliteten för träningshörlurar?<span style={{color:'#6366f1',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ljudkvalitet är viktigt för att få en motiverande och engagerande träningsupplevelse. Bra ljud förbättrar musikens effekt.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilka hörlurar har bäst batteritid?<span style={{color:'#6366f1',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Beats Powerbeats Pro och Jaybird Vista 2 är kända för sin långa batteritid, idealiskt för långa träningspass.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Är alla träningshörlurar svettresistenta?<span style={{color:'#6366f1',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Nej, inte alla hörlurar är svettresistenta. Det är viktigt att kontrollera produktens specifikationer innan köp.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur väljer jag rätt passform för hörlurar?<span style={{color:'#6366f1',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Välj hörlurar med olika storlekar av öronproppar för att säkerställa en bra och bekväm passform.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Kan jag använda vanliga hörlurar för träning?<span style={{color:'#6366f1',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Vanliga hörlurar kan användas, men de kanske inte erbjuder samma hållbarhet eller komfort som specifika träningshörlurar.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilka funktioner är viktiga i träningshörlurar?<span style={{color:'#6366f1',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Viktiga funktioner inkluderar svettresistens, bra passform, lång batteritid och bra ljudkvalitet.</p></details>
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
                Oberoende jämförelsetjänst för svenska konsumenter. Vi jämför 7 alternativ inom teknik.
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
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Se även</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/horlur" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa trådlösa hörlurar</Link>
                <Link href="/laptop" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa laptop</Link>
                <Link href="/mobiltelefon" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa mobiltelefon</Link>
                <Link href="/surfplatta" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa surfplatta</Link>
                <Link href="/smartwatch" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa smartklocka</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Jämförelser</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/jamfor/jabra-elite-4-active-vs-sony-wf-sp800n" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Jabra Elite 4 Active vs Sony WF-SP800N</Link>
                <Link href="/jamfor/jabra-elite-4-active-vs-bose-sport-earbuds" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Jabra Elite 4 Active vs Bose Sport Earbuds</Link>
                <Link href="/jamfor/jabra-elite-4-active-vs-beats-powerbeats-pro" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Jabra Elite 4 Active vs Beats Powerbeats Pro</Link>
                <Link href="/jamfor/jabra-elite-4-active-vs-jaybird-vista-2" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Jabra Elite 4 Active vs Jaybird Vista 2</Link>
                <Link href="/jamfor/jabra-elite-4-active-vs-anker-soundcore-spirit-x2" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Jabra Elite 4 Active vs Anker Soundcore Spirit X2</Link>
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