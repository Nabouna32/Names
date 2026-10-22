"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
type NameEntry = { name: string; origin: string; meaning: string; category: string };
const demoNames: NameEntry[] = [
  { name: "Benjamin", origin: "Hébreu", meaning: "Souvent interprété comme « fils de la droite » ou « fils du bonheur ».", category: "Masculin" },
  { name: "Gabriel", origin: "Hébreu", meaning: "Associé à l'idée de « force de Dieu ».", category: "Masculin" },
  { name: "Louise", origin: "Germanique", meaning: "Forme féminine de Louis, traditionnellement liée à la renommée au combat.", category: "Féminin" },
  { name: "Alma", origin: "Origines multiples", meaning: "Un prénom présent dans plusieurs langues, avec des sens qui varient selon la tradition.", category: "Féminin" },
  { name: "Noah", origin: "Hébreu", meaning: "Traditionnellement associé au repos ou au réconfort.", category: "Mixte selon les pays" },
  { name: "Iris", origin: "Grec", meaning: "Le nom grec de l'arc-en-ciel, également associé à une figure mythologique.", category: "Féminin" }
];
export default function HomePage() {
 const [query, setQuery] = useState("");
 const results = useMemo(() => { const q = query.trim().toLocaleLowerCase("fr"); return q ? demoNames.filter((item) => [item.name, item.origin, item.meaning, item.category].some((value) => value.toLocaleLowerCase("fr").includes(q))) : demoNames; }, [query]);
 return <main>
  <header className="topbar"><Link className="wordmark" href="/">namesia<span>.</span></Link><span className="topbar-note">Les histoires derrière les prénoms</span><a className="topbar-link" href="#explorer">Explorer ↗</a></header>
  <section className="hero"><div className="hero-content"><p className="eyebrow"><span className="eyebrow-dot"/> UN PRÉNOM, TOUTE UNE HISTOIRE</p><h1>Chaque prénom<br/>a quelque chose <em>à raconter.</em></h1><p className="hero-copy">Une origine, une signification, des histoires transmises au fil du temps. Trouvons celle qui se cache derrière un prénom.</p><a className="hero-cta" href="#explorer">Trouver un prénom <span>↓</span></a><div className="hero-footnote">✳ Curiosité, culture et transmission</div></div><div className="hero-art" aria-hidden="true"><div className="art-halo"/><div className="art-card card-back"><span>✳</span><small>UNE HISTOIRE À DÉCOUVRIR</small></div><div className="art-card card-front"><span className="card-kicker">LE PRÉNOM DU MOMENT</span><div className="card-star">✳</div><h2>Benjamin</h2><p>Origine hébraïque</p><div className="card-rule"/><blockquote>« Une histoire qui traverse les générations. »</blockquote><span className="card-index">N° 001 — EXEMPLE</span></div><span className="floating-note note-top">les racines ✳</span><span className="floating-note note-bottom">↗ les significations</span></div></section>
  <section className="explorer" id="explorer"><div className="section-heading"><div><p className="eyebrow">LE PREMIER PAS</p><h2>Quel prénom vous <em>intrigue ?</em></h2></div><p className="section-description">Cherchez un prénom, une origine ou une idée. L&apos;exploration commence ici.</p></div>
  <label className="search-box"><span className="search-icon" aria-hidden="true">⌕</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex. Benjamin, hébreu, bonheur…" aria-label="Rechercher un prénom, une origine ou une signification"/>{query && <button className="clear-search" onClick={() => setQuery("")} aria-label="Effacer la recherche">×</button>}<span className="search-hint">RECHERCHE</span></label>
  <div className="results-meta"><span>{query ? results.length + " résultat" + (results.length === 1 ? "" : "s") : "QUELQUES PISTES POUR COMMENCER"}</span><span className="demo-label"><span/> DONNÉES DE DÉMONSTRATION</span></div>
  {results.length ? <div className="name-grid">{results.map((entry, index) => <article className="name-card" key={entry.name}><div className="name-card-top"><span className="name-number">{String(index + 1).padStart(2, "0")}</span><span className="name-category">{entry.category}</span></div><h3>{entry.name}</h3><p className="name-origin">{entry.origin}</p><p className="name-meaning">{entry.meaning}</p><div className="name-card-bottom"><span>FICHE EXPLORATOIRE</span><span>↗</span></div></article>)}</div> : <div className="empty-state"><span>⌕</span><h3>Aucun prénom trouvé pour le moment</h3><p>Essayez un autre terme ou effacez votre recherche pour tout explorer.</p><button onClick={() => setQuery("")}>Voir tous les exemples</button></div>}</section>
  <section className="closing"><span className="closing-mark">✳</span><p>Un prénom n&apos;est jamais juste un prénom.</p><span>Il porte un peu de l&apos;histoire du monde.</span></section><footer className="footer"><Link className="wordmark" href="/">namesia<span>.</span></Link><span>Une exploration en construction.</span><span>© Namesia 2026</span></footer>
 </main>;
}
