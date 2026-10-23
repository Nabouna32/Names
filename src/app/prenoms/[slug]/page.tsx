import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import { notFound } from "next/navigation";

const nameScript = Dancing_Script({ subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });

type DemoName = {
  name: string;
  slug: string;
  origin: string;
  meaning: string;
  element: string;
  emoji: string;
  tone: string;
  etymology: string;
  history: string;
  personality: string;
  saint: string;
  feast: string;
  variants: string[];
  symbols: { emoji: string; category: string; title: string; description: string; tone: string }[];
  celebrities: { name: string; role: string; detail: string }[];
  stats: { year: number; births: number }[];
};

const demoNames: DemoName[] = [
  {
    name: "Benjamin", slug: "benjamin", origin: "Hébraïque", meaning: "Traditionnellement interprété comme « fils de la main droite » ou « fils du bonheur » selon les lectures.",
    element: "Terre", emoji: "🌅", tone: "amber",
    etymology: "Benjamin vient de l'hébreu biblique Binyamin. L'interprétation traditionnelle le rapproche du « fils de la main droite » ; les explications historiques du nom ont toutefois fait l'objet de discussions. Il est donc préférable de présenter ce sens comme une interprétation traditionnelle plutôt que comme une traduction unique et incontestable.",
    history: "Dans la Bible, Benjamin est le plus jeune fils de Jacob et de Rachel, et donne son nom à l'une des tribus d'Israël. Le prénom s'est ensuite diffusé dans les traditions juive et chrétienne, avant de s'installer durablement dans de nombreuses langues européennes.",
    personality: "Dans l'imaginaire culturel francophone, Benjamin peut évoquer la proximité, la douceur et un esprit attentif. Ce sont des associations narratives et des impressions liées aux usages du prénom, pas des traits de caractère déterminés par un prénom.",
    saint: "Saint Benjamin est notamment associé à un diacre et martyr de Perse du Ve siècle, commémoré dans plusieurs calendriers chrétiens.",
    feast: "31 mars dans plusieurs calendriers chrétiens ; les calendriers locaux peuvent différer.",
    variants: ["Ben", "Benyamin", "Binyamin", "Beniamino"],
    symbols: [
      { emoji: "🌅", category: "Moment de la journée", title: "L'heure dorée", description: "Une lumière qui arrive sans bruit et donne au jour la promesse d'un nouveau départ.", tone: "amber" },
      { emoji: "🦊", category: "Animal imaginaire", title: "Le renard", description: "Vif et attentif, il représente ici l'art de trouver un chemin inattendu.", tone: "coral" },
      { emoji: "🎨", category: "Couleur", title: "Ambre solaire", description: "Une chaleur douce, entre la lumière du matin et la mémoire des choses précieuses.", tone: "rainbow" },
      { emoji: "🪐", category: "Cosmos", title: "Jupiter", description: "Un horizon vaste et généreux, invitation symbolique à regarder plus loin.", tone: "cosmos" },
      { emoji: "🌿", category: "Élément", title: "La terre", description: "Des racines solides, de la patience et la possibilité de grandir à son rythme.", tone: "earth" },
      { emoji: "🧭", category: "Vocation imaginaire", title: "Le passeur d'idées", description: "Un rôle poétique pour celle ou celui qui relie les personnes, les récits et les perspectives.", tone: "blue" },
    ],
    celebrities: [
      { name: "Benjamin Franklin", role: "Scientifique, inventeur et homme d'État américain", detail: "Figure majeure des Lumières, connu notamment pour ses expériences sur l'électricité et son rôle dans l'histoire des États-Unis." },
      { name: "Benjamin Britten", role: "Compositeur britannique", detail: "Compositeur du XXe siècle, célèbre notamment pour ses opéras et son œuvre pour voix et orchestre." },
      { name: "Benjamin Millepied", role: "Danseur et chorégraphe français", detail: "Artiste de danse classique et contemporaine, également connu pour son travail de chorégraphe." },
    ],
    stats: [
      { year: 2015, births: 4200 }, { year: 2016, births: 4050 }, { year: 2017, births: 3920 },
      { year: 2018, births: 3710 }, { year: 2019, births: 3590 }, { year: 2020, births: 3440 },
      { year: 2021, births: 3370 }, { year: 2022, births: 3210 }, { year: 2023, births: 3090 },
      { year: 2024, births: 2980 },
    ],
  },
  {
    name: "Gabriel", slug: "gabriel", origin: "Hébraïque", meaning: "Généralement compris comme « force de Dieu ».",
    element: "Feu", emoji: "🕊️", tone: "coral",
    etymology: "Gabriel vient de l'hébreu Gavri'el. Son sens est généralement rapproché de la force et de Dieu, même si les traductions peuvent varier selon les sources.",
    history: "Gabriel occupe une place importante dans plusieurs traditions religieuses, notamment juive, chrétienne et musulmane. Le prénom s'est largement diffusé dans les langues européennes.",
    personality: "Il peut évoquer, dans certaines représentations culturelles, la transmission et l'élan. Cette lecture reste symbolique et ne décrit pas les personnes qui portent ce prénom.",
    saint: "L'archange Gabriel est une figure majeure des traditions bibliques.",
    feast: "29 septembre dans le calendrier catholique romain actuel pour les archanges Michel, Gabriel et Raphaël.",
    variants: ["Gabriele", "Gavriel", "Gabriela"],
    symbols: [
      { emoji: "🔥", category: "Élément", title: "Le feu", description: "L'élan, la clarté et la chaleur du premier mouvement.", tone: "coral" },
      { emoji: "🕊️", category: "Animal imaginaire", title: "La colombe", description: "Une messagère de paix et de lien entre les mondes.", tone: "rainbow" },
      { emoji: "🌞", category: "Moment", title: "Le plein matin", description: "L'instant où les idées se précisent et prennent leur place.", tone: "amber" },
      { emoji: "✨", category: "Cosmos", title: "L'étoile-guide", description: "Un repère poétique pour trouver son chemin.", tone: "cosmos" },
    ],
    celebrities: [{ name: "Gabriel García Márquez", role: "Écrivain et journaliste colombien", detail: "Prix Nobel de littérature en 1982, figure majeure du réalisme magique." }],
    stats: [{year:2015,births:5000},{year:2016,births:5100},{year:2017,births:5200},{year:2018,births:5300},{year:2019,births:5250},{year:2020,births:5400},{year:2021,births:5500},{year:2022,births:5600},{year:2023,births:5700},{year:2024,births:5800}],
  },
  {
    name: "Louise", slug: "louise", origin: "Germanique", meaning: "Forme féminine de Louis, liée à la renommée et au combat.",
    element: "Terre", emoji: "🌸", tone: "rose",
    etymology: "Louise est traditionnellement considéré comme la forme féminine de Louis, issu d'anciennes formes germaniques associant les idées de renommée et de combat.",
    history: "Le prénom s'est diffusé dans plusieurs langues européennes, avec des formes voisines comme Louisa et Luisa. Son usage a connu des périodes de forte popularité dans les pays francophones.",
    personality: "Louise peut être perçu comme classique, littéraire ou intemporel selon les époques et les milieux. Il s'agit d'une impression culturelle, pas d'une règle.",
    saint: "Plusieurs saintes et bienheureuses portent le prénom Louise, dont Louise de Marillac.",
    feast: "15 mars pour sainte Louise de Marillac.",
    variants: ["Lou", "Louisa", "Luisa"],
    symbols: [{emoji:"🌿",category:"Élément",title:"La terre",description:"L'enracinement et la patience.",tone:"earth"},{emoji:"🌸",category:"Fleur imaginaire",title:"La pivoine",description:"Une beauté qui s'ouvre sans se presser.",tone:"rose"},{emoji:"📚",category:"Vocation",title:"La conteuse",description:"Une voix qui conserve et transmet les histoires.",tone:"rainbow"},{emoji:"🌇",category:"Moment",title:"Le crépuscule doux",description:"Une lumière calme qui invite à regarder le chemin parcouru.",tone:"amber"}],
    celebrities: [{name:"Louise Michel",role:"Enseignante, écrivaine et militante française",detail:"Figure historique de la Commune de Paris et de l'engagement politique au XIXe siècle."}],
    stats: [{year:2015,births:4200},{year:2016,births:4300},{year:2017,births:4500},{year:2018,births:4700},{year:2019,births:4800},{year:2020,births:5000},{year:2021,births:5200},{year:2022,births:5300},{year:2023,births:5500},{year:2024,births:5700}],
  },
  {
    name: "Iris", slug: "iris", origin: "Grecque", meaning: "« Arc-en-ciel » en grec ancien ; également une figure mythologique.",
    element: "Air", emoji: "🌈", tone: "iris",
    etymology: "Iris vient du grec ancien iris, « arc-en-ciel ». Le mot désigne aussi la partie colorée de l'œil et une fleur.",
    history: "Dans la mythologie grecque, Iris personnifie l'arc-en-ciel et sert de messagère entre les dieux et les humains. Le prénom relie ainsi plusieurs univers symboliques : la couleur, la fleur et le récit mythologique.",
    personality: "Iris évoque parfois la couleur, la nature et la mythologie dans l'imaginaire collectif. Les associations restent libres et subjectives.",
    saint: "La référence à une sainte Iris dépend des traditions et calendriers consultés ; cette fiche de démonstration ne fixe pas de célébration unique.",
    feast: "À vérifier selon le calendrier retenu.",
    variants: ["Irida", "Iride"],
    symbols: [{emoji:"🌈",category:"Symbole",title:"L'arc-en-ciel",description:"Un passage coloré entre des mondes différents.",tone:"rainbow"},{emoji:"🌬️",category:"Élément",title:"L'air",description:"La circulation des idées et la liberté de mouvement.",tone:"blue"},{emoji:"🌼",category:"Fleur",title:"L'iris",description:"Une fleur aux couleurs franches et aux formes élégantes.",tone:"iris"},{emoji:"🌤️",category:"Moment",title:"Après la pluie",description:"L'instant où la lumière revient transformer le paysage.",tone:"amber"}],
    celebrities: [{name:"Iris Apfel",role:"Créatrice, entrepreneuse et icône de mode américaine",detail:"Connue pour son style personnel audacieux et son influence dans la mode et le design."}],
    stats: [{year:2015,births:1800},{year:2016,births:1900},{year:2017,births:2050},{year:2018,births:2200},{year:2019,births:2300},{year:2020,births:2500},{year:2021,births:2700},{year:2022,births:2850},{year:2023,births:3000},{year:2024,births:3200}],
  },
  {
    name: "Alma", slug: "alma", origin: "Plusieurs origines possibles", meaning: "Le sens dépend de la langue et de la tradition considérées.",
    element: "Eau", emoji: "🌊", tone: "lavender",
    etymology: "Alma existe dans plusieurs traditions linguistiques. Son interprétation dépend de la langue et de l'histoire retenues ; il convient d'éviter de lui attribuer une origine unique sans préciser le contexte.",
    history: "Le prénom est utilisé dans différents pays et peut évoquer des significations distinctes selon les langues. Cette pluralité fait partie de son histoire.",
    personality: "Alma peut faire penser à la douceur ou à l'intériorité dans certaines lectures contemporaines, mais ce sont des associations subjectives.",
    saint: "Aucune référence unique n'est mise en avant dans cette maquette.",
    feast: "À vérifier selon la tradition culturelle retenue.",
    variants: ["Almah", "Almae"],
    symbols: [{emoji:"💧",category:"Élément",title:"L'eau",description:"La profondeur, le rêve et le mouvement.",tone:"blue"},{emoji:"🐚",category:"Totem imaginaire",title:"Le coquillage",description:"Un petit monde qui garde une résonance intérieure.",tone:"lavender"},{emoji:"🌙",category:"Cosmos",title:"La lune",description:"Une lumière douce qui change sans cesser d'être elle-même.",tone:"cosmos"},{emoji:"🌊",category:"Moment",title:"L'heure bleue",description:"Un passage paisible entre le jour et la nuit.",tone:"rainbow"}],
    celebrities: [{name:"Alma Mahler",role:"Compositrice et personnalité culturelle autrichienne",detail:"Connue pour ses liens avec la vie artistique viennoise du début du XXe siècle et ses propres compositions."}],
    stats: [{year:2015,births:500},{year:2016,births:550},{year:2017,births:600},{year:2018,births:700},{year:2019,births:800},{year:2020,births:900},{year:2021,births:1050},{year:2022,births:1200},{year:2023,births:1350},{year:2024,births:1500}],
  },
  {
    name: "Noah", slug: "noah", origin: "Hébraïque", meaning: "Traditionnellement rapproché du repos et du réconfort.",
    element: "Cosmos", emoji: "🌙", tone: "blue",
    etymology: "Noah est une forme utilisée dans plusieurs langues pour le prénom biblique Noé, issu de l'hébreu. Il est traditionnellement rapproché de l'idée de repos ou de consolation.",
    history: "La figure de Noé apparaît dans les récits bibliques et dans d'autres traditions religieuses. La forme Noah s'est fortement diffusée à l'international.",
    personality: "Noah peut évoquer le calme et le voyage dans les représentations poétiques contemporaines. Ce sont des images, pas des prédictions.",
    saint: "La figure biblique de Noé est importante dans plusieurs traditions ; les calendriers des saints varient.",
    feast: "Pas de date unique proposée dans cette maquette.",
    variants: ["Noé", "Noa", "Noach"],
    symbols: [{emoji:"🌌",category:"Cosmos",title:"La voie lactée",description:"Un chemin lumineux dans l'immensité.",tone:"cosmos"},{emoji:"🌊",category:"Élément",title:"L'eau",description:"La traversée, la transformation et le recommencement.",tone:"blue"},{emoji:"🐋",category:"Animal imaginaire",title:"La baleine",description:"Une présence paisible qui traverse les grandes profondeurs.",tone:"lavender"},{emoji:"🌙",category:"Moment",title:"La nuit étoilée",description:"Un silence qui laisse de la place aux possibles.",tone:"iris"}],
    celebrities: [{name:"Noah Wyle",role:"Acteur et producteur américain",detail:"Connu notamment pour ses rôles dans des séries télévisées dramatiques."}],
    stats: [{year:2015,births:7000},{year:2016,births:7200},{year:2017,births:7400},{year:2018,births:7600},{year:2019,births:7800},{year:2020,births:8000},{year:2021,births:8200},{year:2022,births:8500},{year:2023,births:8700},{year:2024,births:9000}],
  },
];

export function generateStaticParams() {
  return demoNames.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = demoNames.find((item) => item.slug === slug);
  return { title: entry ? `${entry.name} : origine, histoire et univers symbolique` : "Prénom introuvable" };
}

function DemoStatistics({ entry }: { entry: DemoName }) {
  const values = entry.stats;
  const max = Math.max(...values.map((item) => item.births));
  const min = Math.min(...values.map((item) => item.births));
  const points = values.map((item, index) => {
    const x = 35 + (index / (values.length - 1)) * 630;
    const y = 185 - ((item.births - min) / Math.max(max - min, 1)) * 135;
    return `${x},${y}`;
  }).join(" ");
  return <section className="profile-section profile-panel stats-profile" id="statistiques">
    <div className="profile-section-heading"><p className="eyebrow">📈 STATISTIQUES</p><h2>Popularité en <em>France</em></h2><p>Les chiffres présentés ici sont fictifs et ne proviennent pas de l’INSEE. Ils ne décrivent pas la popularité réelle du prénom.</p></div>
    <details className="stats-accordion">
      <summary>
        <span className="stats-accordion-icon" aria-hidden="true">↗</span>
        <span className="stats-accordion-copy"><strong>Consulter les valeurs illustratives</strong><small>Chiffres fictifs · Courbe et tableau</small></span>
        <span className="stats-accordion-chevron" aria-hidden="true">＋</span>
      </summary>
      <div className="stats-accordion-content">
    <div className="stats-demo-warning"><strong>DONNÉES ENTIÈREMENT FICTIVES</strong><span>Ces nombres sont inventés pour tester l'affichage. Ils ne proviennent pas de l'INSEE et ne doivent pas être interprétés comme des statistiques réelles.</span></div>
    <div className="stats-kpis">
      <article><span>Dernière année illustrée</span><strong>{values[values.length - 1].year}</strong><small>Année illustrative</small></article>
      <article><span>Naissances (exemple)</span><strong>{values[values.length - 1].births.toLocaleString("fr-FR")}</strong><small>Valeur inventée</small></article>
      <article><span>Période illustrée</span><strong>{values[0].year}–{values[values.length - 1].year}</strong><small>10 points de démonstration</small></article>
    </div>
    <div className="stats-chart-card"><div className="stats-chart-title"><h3>Naissances par année</h3><span>Valeurs fictives</span></div>
      <svg viewBox="0 0 700 225" role="img" aria-label={`Courbe fictive de démonstration pour le prénom ${entry.name}`} className="stats-chart">
        {[50,95,140,185].map((y) => <line key={y} x1="35" y1={y} x2="665" y2={y} className="chart-gridline" />)}
        <polyline points={points} fill="none" className="chart-line" strokeLinecap="round" strokeLinejoin="round" />
        {values.map((item, index) => <g key={item.year}><circle cx={35 + (index / (values.length - 1)) * 630} cy={185 - ((item.births - min) / Math.max(max - min, 1)) * 135} r="3.5" className="chart-dot" /><text x={35 + (index / (values.length - 1)) * 630} y="211" textAnchor="middle" className="chart-label">{item.year}</text></g>)}
      </svg>
    </div>
    <div className="stats-table-wrap"><table className="stats-table"><caption>Valeurs fictives présentées à titre illustratif</caption><thead><tr><th>Année</th><th>Naissances fictives</th><th>Statut</th></tr></thead><tbody>{values.map((item) => <tr key={item.year}><td>{item.year}</td><td>{item.births.toLocaleString("fr-FR")}</td><td><span className="fake-data-label">Donnée fictive</span></td></tr>)}</tbody></table></div>
    <p className="stats-source-note">Aucune source officielle : ces valeurs sont fictives et servent uniquement à illustrer la présentation.</p>
      </div>
    </details>
  </section>;
}

export default async function NameProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = demoNames.find((item) => item.slug === slug);
  if (!entry) notFound();
  const related = demoNames.filter((item) => item.slug !== entry.slug && (item.element === entry.element || item.origin === entry.origin)).slice(0, 3);
  return <main className="profile-page">
    <header className="profile-topbar"><Link className="wordmark" href="/">namesia<span>✳</span></Link><nav aria-label="Navigation de la fiche"><a href="#histoire">Histoire</a><a href="#symboles">Symboles</a><a href="#statistiques">Statistiques</a></nav><div className="profile-topbar-actions"><ThemeToggle /><Link className="profile-back-link" href="/">← Explorer les prénoms</Link></div></header>
    <section className={`profile-hero tone-${entry.tone}`}>
      <div className="profile-hero-glow" aria-hidden="true" />
      <div className="profile-hero-copy"><p className="profile-kicker">{entry.element} · UNIVERS SYMBOLIQUE</p><h1 className={`profile-name-title ${nameScript.className}`}>{entry.name}<span>.</span></h1><p className="profile-meaning">{entry.meaning}</p><div className="profile-facts"><span><small>Origine</small><strong>{entry.origin}</strong></span><span><small>Élément symbolique</small><strong>{entry.element}</strong></span></div></div>
      <div className="profile-orbit-art" aria-hidden="true"><div className="profile-orbit orbit-1" /><div className="profile-orbit orbit-2" /><div className="profile-orbit orbit-3" /><div className="profile-planet">{entry.emoji}</div><div className="profile-art-caption">Origines et symbolique</div></div>
    </section>
    <div className="profile-content">
      <section className="profile-intro-card"><span className="profile-intro-icon" aria-hidden="true">✦</span><div><p className="eyebrow">EN BREF</p><h2>À propos du prénom {entry.name}</h2><p>Retrouvez son origine, sa signification, son histoire, les fêtes associées et une sélection de symboles imaginaires. Les informations culturelles et les interprétations créatives sont présentées séparément.</p></div></section>
      <section className="profile-section profile-panel" id="histoire"><div className="profile-section-heading"><p className="eyebrow">📚 ORIGINE ET CULTURE</p><h2>Origine et <em>histoire</em></h2></div><div className="profile-story-grid"><article className="profile-text-card"><span>🧬 ÉTYMOLOGIE</span><p>{entry.etymology}</p></article><article className="profile-text-card"><span>📖 HISTOIRE ET CULTURE</span><p>{entry.history}</p></article><article className="profile-text-card"><span>🌿 PERCEPTIONS CULTURELLES</span><p>{entry.personality}</p><small>Les impressions culturelles ne déterminent jamais la personnalité réelle.</small></article><article className="profile-text-card"><span>✝️ SAINT ET FÊTE</span><p>{entry.saint}</p><small>{entry.feast}</small></article></div></section>
      <section className="profile-section profile-symbol-section" id="symboles"><div className="profile-section-heading"><p className="eyebrow">✧ INTERPRÉTATION CRÉATIVE</p><h2>Symbolique du <em>prénom</em></h2><p>Des associations imaginaires proposées par Namesia. Elles ne sont ni scientifiques ni prédictives.</p></div><div className="profile-symbol-grid">{entry.symbols.map((symbol) => <article key={symbol.title} className={`profile-symbol-card symbol-${symbol.tone}`}><span>{symbol.emoji}</span><small>{symbol.category}</small><h3>{symbol.title}</h3><p>{symbol.description}</p></article>)}</div></section>
      <section className="profile-section profile-panel"><div className="profile-section-heading"><p className="eyebrow">⭐ PERSONNALITÉS CONNUES</p><h2>Personnalités portant ce <em>prénom</em></h2></div><div className="profile-celebrity-grid">{entry.celebrities.map((person) => <article className="profile-celebrity-card" key={person.name}><span>⭐</span><h3>{person.name}</h3><strong>{person.role}</strong><p>{person.detail}</p></article>)}</div></section>
      <DemoStatistics entry={entry} />
      <section className="profile-section profile-panel related-section"><div className="profile-section-heading"><p className="eyebrow">✦ À DÉCOUVRIR AUSSI</p><h2>Prénoms <em>associés</em></h2></div><div className="related-name-links">{related.map((item) => <Link key={item.slug} href={`/prenoms/${item.slug}`}><span>{item.emoji}</span><strong>{item.name}</strong><small>{item.origin}</small><b>↗</b></Link>)}</div><p className="profile-variants-label">Variantes et formes proches</p><div className="profile-variant-links">{entry.variants.map((variant) => { const target = demoNames.find((item) => item.name.toLocaleLowerCase("fr-FR") === variant.toLocaleLowerCase("fr-FR")); return target ? <Link key={variant} href={`/prenoms/${target.slug}`}>{variant} ↗</Link> : <span key={variant} title="Fiche à créer ultérieurement">{variant}</span>; })}</div></section>
      
    </div>
    
  </main>;
}
