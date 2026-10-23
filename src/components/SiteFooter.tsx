import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link className="wordmark" href="/" aria-label="Namesia — accueil">
            namesia<span aria-hidden="true">✳</span>
          </Link>
          <p>Origines, histoires et symboles des prénoms.</p>
        </div>
        <nav className="site-footer-nav" aria-label="Explorer Namesia">
          <p className="site-footer-heading">Explorer</p>
          <Link href="/#decouvrir">Tous les prénoms</Link>
          <Link href="/#roue">La roue des éléments</Link>
          <Link href="/#histoire">Origines et histoires</Link>
        </nav>
        <div className="site-footer-nav site-footer-approach">
          <p className="site-footer-heading">L’esprit Namesia</p>
          <span>Des repères culturels, une part d’imaginaire.</span>
          <span>Les symboles sont des interprétations créatives, pas des faits scientifiques.</span>
        </div>
      </div>
      <div className="site-footer-bottom">
        <p>© {year} Namesia. Tous droits réservés.</p>
        <p>Un prénom, mille histoires à explorer.</p>
      </div>
    </footer>
  );
}
