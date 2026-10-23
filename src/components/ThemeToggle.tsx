"use client";

import { useEffect, useState } from "react";

type Theme = "clair" | "sombre";
const STORAGE_KEY = "namesia-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("clair");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initial: Theme = saved === "sombre" || saved === "clair"
      ? saved
      : document.documentElement.dataset.theme === "sombre" ? "sombre" : "clair";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "clair" ? "sombre" : "clair";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme}
      aria-label={theme === "clair" ? "Activer le thème sombre" : "Activer le thème clair"}
      aria-pressed={theme === "sombre"}>
      <span>{theme === "clair" ? "🌙" : "☀️"}</span>
      <span className="theme-label">{theme === "clair" ? "Mode nuit" : "Mode jour"}</span>
    </button>
  );
}
