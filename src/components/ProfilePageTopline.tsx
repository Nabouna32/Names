"use client";
import { useEffect, useState } from "react";

const profileSections = [
  { id: "histoire", label: "Histoire" },
  { id: "symboles", label: "Symboles" },
  { id: "statistiques", label: "Statistiques" },
] as const;

export default function ProfilePageTopline() {
  const [activeSection, setActiveSection] = useState<string>("histoire");

  useEffect(() => {
    const targets = profileSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-20% 0px -60% 0px", threshold: 0 });

    targets.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="profile-page-topline profile-section-nav" aria-label="Navigation de la fiche">
      {profileSections.map(({ id, label }, index) => (
        <a
          key={id}
          href={`#${id}`}
          className={activeSection === id ? "is-active" : undefined}
          aria-current={activeSection === id ? "location" : undefined}
          onClick={() => setActiveSection(id)}
        >
          <span className="profile-section-nav-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
