import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="site-header site-header--global">
      <Link className="wordmark" href="/" aria-label="Namesia — accueil">
        namesia<span aria-hidden="true">✳</span>
      </Link>
      <nav className="site-header-nav" aria-label="Navigation principale">
        <Link href="/#roue">La roue des éléments</Link>
        <Link href="/#univers">Univers symbolique</Link>
        <Link href="/#histoire">Les histoires</Link>
      </nav>
      <div className="site-header-actions">
        <ThemeToggle />
      </div>
    </header>
  );
}
