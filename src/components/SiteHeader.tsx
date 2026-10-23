"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

type SiteHeaderProps = {
  variant?: "home" | "profile";
};

export default function SiteHeader({ variant }: SiteHeaderProps) {
  const pathname = usePathname();
  const isProfile = variant === "profile";

  // The old page-level calls now render only page context; the global header is rendered by RootLayout.
  if (variant === "home") return null;

  if (isProfile) {
    const slug = pathname.split("/").filter(Boolean).at(-1) ?? "";
    const pageName = slug
      .split("-")
      .map((part) => part.charAt(0).toLocaleUpperCase("fr-FR") + part.slice(1))
      .join(" ");

    return (
      <div className="profile-page-topline">
        <nav className="profile-breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#decouvrir">Prénoms</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{pageName}</span>
        </nav>
        <nav className="profile-section-nav" aria-label="Navigation de la fiche">
          <a href="#histoire">Histoire</a>
          <a href="#symboles">Symboles</a>
          <a href="#statistiques">Statistiques</a>
        </nav>
      </div>
    );
  }

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
