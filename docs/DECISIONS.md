# Décisions — Namesia

Ne conserver que les décisions structurantes encore utiles.

## D-001 — Next.js App Router, React, TypeScript
**Statut : adopté.** Socle pour le rendu, le SEO et Vercel.

## D-002 — CSS natif au départ
**Statut : adopté pour le prototype.** Éviter une bibliothèque UI avant d'en avoir besoin.

## D-003 — Supabase comme base prévue
**Statut : prévu, non intégré.** Définir les relations, la provenance et le modèle éditorial avant la migration.

## D-004 — Les données de démonstration ne sont pas des données éditoriales
**Statut : adopté.** Les exemples locaux servent à visualiser l'expérience et ne doivent pas être présentés comme vérifiés.

## D-005 — Univers factuel et symbolique
**Statut : direction produit adoptée.** Viser un équilibre approximatif entre histoire/faits culturels et symbolisme poétique. Le site n'est pas un assistant IA.

## D-006 — Direction visuelle immersive et éditoriale
**Statut : direction visuelle adoptée, à affiner par retours.** Palette irisée, vignettes colorées, emojis comme repères, roue des éléments et thèmes clair/sombre. Les fiches utilisent des panneaux arrondis cohérents sans encadrer chaque paragraphe. L’interface publique évite les libellés de brouillon et communique les limites des données avec des formulations éditoriales précises.

## D-007 — Symbolisme et roue des éléments
**Statut : concept adopté, associations à éditer.** Les symboles sont des interprétations créatives personnalisées ; les éléments sont une taxonomie de découverte, pas des vérités objectives.

## D-008 — Personnalités
**Statut : adopté.** Maximum 8 par prénom, sélection variée si pertinente, avec profession et domaine détaillés et vérifiables.

## D-009 — Statistiques de popularité
**Statut : prévu.** Chiffres clés, courbe interactive et tableau avec source/périmètre ; ne jamais inventer de chiffres INSEE.

## D-010 — Git et déploiement
**Statut : adopté.** Toute modification passe par une branche et une PR ; pas de modification directe de main. Vercel Preview est désactivé. Ne pas fusionner sans approbation explicite.

## D-011 — Challenge avant implémentation
**Statut : règle de travail adoptée.** Repartir du besoin, comparer les options utiles et valider les choix structurels sans surcharger la discussion.

## D-012 — Langue de la documentation et du code
**Statut : décision adoptée ; harmonisation documentaire à planifier.** La documentation du projet, y compris `AGENTS.md`, le `README.md` et les documents canoniques, doit être rédigée en français. Les conventions de code restent en anglais : noms de composants, variables, fonctions, types et identifiants techniques. Garder les commandes, API et termes techniques exacts lorsqu'une traduction nuirait à leur précision. Le chantier complet est suivi dans [l'issue #8](https://github.com/Nabouna32/Namesia/issues/8) et sera traité après la résolution des problèmes de dépendances/CI en cours.

## D-013 — Footer éditorial partagé
**Statut : adopté.** Le layout racine rend un composant de footer commun à toutes les pages. Il réunit identité de marque, navigation vers des sections existantes et copyright dynamique ; ne pas afficher de liens légaux inactifs ni assimiler le copyright à une conformité juridique.

## D-014 — Typographie signature des fiches prénom
**Statut : adopté.** Utiliser `Dancing Script` uniquement pour le prénom principal. La famille de police doit être appliquée explicitement via une variable CSS sur le titre : la règle générique `.profile-hero h1` définit une police avec le raccourci `font` et peut écraser la famille fournie par `next/font`. Les autres titres et textes gardent la typographie de lecture ; vérifier les prénoms longs et les tailles mobiles.

## D-015 — Conventions communes de mise en page
**Statut : adopté.** Le layout racine rend un header commun (identité, navigation générale et thème) ainsi que le footer. Les fiches prénom gardent leur fil d’Ariane et leurs liens internes dans une barre contextuelle au-dessus du héros ; le prénom stylisé reste le titre principal. Les espacements et la séparation avant le footer reposent sur des variables CSS responsive.
