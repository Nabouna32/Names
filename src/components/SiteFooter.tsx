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
          </div>
        <nav className="site-footer-nav" aria-label="Explorer Namesia">
          <p className="site-footer-heading">Explorer</p>
          <Link href="/#decouvrir">Tous les prénoms</Link>
          <Link href="/#roue">La roue des éléments</Link>
          <Link href="/#histoire">Origines et histoires</Link>
          <Link href="/a-propos">À propos</Link>
        </nav>
      </div>
      <div className="site-footer-bottom">
        <p>© {year} Namesia. Tous droits réservés.</p>
        <p>Un prénom, mille histoires à explorer.</p>
      </div>
    </footer>
  );
}
