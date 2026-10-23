import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

type SiteHeaderProps = {
  variant: "home" | "profile";
};

export default function SiteHeader({ variant }: SiteHeaderProps) {
  const isProfile = variant === "profile";

  return (
    <header className={`site-header site-header--${variant}`}>
      <Link className="wordmark" href="/" aria-label="Namesia — accueil">
        namesia<span aria-hidden="true">✳</span>
      </Link>
      <nav className="site-header-nav" aria-label={isProfile ? "Navigation de la fiche" : "Navigation principale"}>
        {isProfile ? (
          <>
            <a href="#histoire">Histoire</a>
            <a href="#symboles">Symboles</a>
            <a href="#statistiques">Statistiques</a>
          </>
        ) : (
          <>
            <a href="#roue">La roue des éléments</a>
            <a href="#univers">Univers symbolique</a>
            <a href="#histoire">Les histoires</a>
          </>
        )}
      </nav>
      <div className="site-header-actions">
        <ThemeToggle />
        {isProfile && (
          <Link className="profile-back-link" href="/">
            ← Explorer les prénoms
          </Link>
        )}
      </div>
    </header>
  );
}
