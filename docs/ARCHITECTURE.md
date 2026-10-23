# Architecture — Namesia

**Mis à jour :** 2026-10-23.

## État actuel vérifié
- Next.js App Router, React et TypeScript strict, CSS natif sans bibliothèque UI.
- Accueil interactif : recherche locale, filtre par élément, roue symbolique, aperçu de fiche et bascule clair/sombre.
- Prénoms, variantes, textes et symboles codés localement ; ce n'est pas un catalogue vérifié.
- Aucun accès applicatif à Supabase, aucune migration, authentification ou API métier.
- `SiteFooter` est rendu par le layout racine et partagé par l’accueil et les fiches prénom ; son contenu et son style sont définis à un seul endroit.
- Statistiques INSEE et personnalités vérifiées non intégrées.

## Cible provisoire
- Next.js pour les routes, le rendu et le SEO.
- Supabase/Postgres pour fiches, formes de prénoms, contenus sourcés, symboles, associations éditoriales, personnalités et statistiques après validation du modèle.
- Garder la provenance des faits et distinguer contenus documentés et interprétations poétiques.
- Accès serveur par défaut ; examiner les politiques RLS avant toute exposition de données.
- Vercel déploie depuis main. Les previews sont désactivés pour préserver le quota ; CI GitHub sur PR pour les contrôles pré-fusion.

## À concevoir avant l'intégration
- Modèle des prénoms et relations de variantes/apparentés.
- Symboles réutilisables avec texte et justification propres à chaque association de prénom.
- Sources et provenance des affirmations factuelles, personnalités et statistiques.
- Import des données INSEE avec période et périmètre.
- Rendu SEO des fiches et navigation entre pages.
