"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfilePageTopline() {
  const pathname = usePathname();
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
