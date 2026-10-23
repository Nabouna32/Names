"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const profileSections = [
  { id: "histoire", label: "Histoire" },
  { id: "symboles", label: "Symboles" },
  { id: "statistiques", label: "Statistiques" },
] as const;

export default function ProfilePageTopline() {
  const pathname = usePathname();
  const slug = pathname.split("/").filter(Boolean).at(-1) ?? "";
  const pageName = slug
    .split("-")
    .map((part) => part.charAt(0).toLocaleUpperCase("fr-FR") + part.slice(1))
    .join(" ");
  const [activeSection, setActiveSection] = useState<string>("histoire");

  useEffect(() => {
    const targets = profileSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!targets.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    targets.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
        {profileSections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "is-active" : undefined}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => setActiveSection(id)}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
