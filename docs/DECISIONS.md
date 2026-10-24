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
**Statut : direction visuelle adoptée, à affiner par retours.** Palette irisée, vignettes colorées, emojis comme repères, roue des éléments et thèmes clair/sombre. Les fiches utilisent des panneaux arrondis cohérents sans encadrer chaque paragraphe. L’interface publique évite les libellés de brouillon et communique les limites des données avec des formulations éditoriales précises. Sur les cartes d’accueil, le genre repose sur un champ explicite, jamais sur une déduction. Le genre reste secondaire, dans un médaillon placé à côté du prénom ; sa couleur distingue les trois cas (bleu masculin, rose féminin, violet mixte). Chaque symbole est un SVG dédié, et le symbole mixte forme un dessin unique plutôt que deux icônes juxtaposées. L’élément reste séparé en haut de la carte.

## D-007 — Symbolisme et roue des éléments
**Statut : concept adopté, associations à éditer.** Les symboles sont des interprétations créatives personnalisées ; les éléments sont une taxonomie de découverte, pas des vérités objectives.

## D-008 — Personnalités
**Statut : adopté.** Maximum 8 par prénom, sélection variée si pertinente, avec profession et domaine détaillés et vérifiables.

## D-009 — Statistiques de popularité
**Statut : prévu.** Chiffres clés, courbe interactive et tableau avec source/périmètre ; ne jamais inventer de chiffres INSEE.

## D-010 — Git, continuité des PR et déploiement
**Statut : adopté.** Toute modification passe par une branche et une PR ; jamais de modification directe de `main`. Pour un même chantier, les retours et corrections s'ajoutent à la PR existante : ne pas ouvrir une nouvelle PR à chaque itération. Avant d'en créer une, rechercher les PR ouvertes et vérifier le diff réel et l'ascendance des branches afin d'éviter les doublons. Fermer les PR redondantes sans les fusionner lorsqu'une seule PR cohérente contient déjà tout le travail. Aucune fusion ni activation de l'auto-merge sans approbation explicite de l'utilisateur au moment de la fusion. Vercel Preview est désactivé pour limiter le quota de déploiements.

## D-011 — Challenge avant implémentation
**Statut : règle de travail adoptée.** Repartir du besoin, comparer les options utiles et valider les choix structurels sans surcharger la discussion.

## D-012 — Langue de la documentation et du code
**Statut : décision adoptée ; harmonisation documentaire à planifier.** La documentation du projet, y compris `AGENTS.md`, le `README.md` et les documents canoniques, doit être rédigée en français. Les conventions de code restent en anglais : noms de composants, variables, fonctions, types et identifiants techniques. Garder les commandes, API et termes techniques exacts lorsqu'une traduction nuirait à leur précision. Le chantier complet est suivi dans [l'issue #8](https://github.com/Nabouna32/Namesia/issues/8) et sera traité après la résolution des problèmes de dépendances/CI en cours.

## D-013 — Footer éditorial partagé
**Statut : adopté.** Le layout racine rend un composant de footer commun à toutes les pages. Il réunit identité de marque, navigation vers des sections existantes et copyright dynamique ; ne pas afficher de liens légaux inactifs ni assimiler le copyright à une conformité juridique.

## D-014 — Typographie signature des fiches prénom
**Statut : adopté.** Utiliser `Dancing Script` uniquement pour le prénom principal. La famille de police doit être appliquée explicitement via une variable CSS sur le titre : la règle générique `.profile-hero h1` définit une police avec le raccourci `font` et peut écraser la famille fournie par `next/font`. Les autres titres et textes gardent la typographie de lecture ; vérifier les prénoms longs et les tailles mobiles.

## D-015 — Conventions communes de mise en page
**Statut : adopté.** Le layout racine rend le header global et le footer. Sur les fiches prénom, le fil d’Ariane se trouve dans le bloc de présentation ; une barre sticky opaque distincte contient uniquement les ancres, stylisées en pastilles, avec état actif, défilement mobile et décalage des sections. La barre reste limitée à la fiche pour ne pas couvrir le footer ; aucune dépendance UI n’est nécessaire.

## D-016 — Un seul intitulé par section de l’accueil
**Statut : essai visuel à valider.** Remplacer le duo « label + grand titre » par un seul intitulé explicite, en conservant le style éditorial des labels. Utiliser un vrai titre HTML (`h2`) plus lisible que le micro-label d’origine pour préserver la hiérarchie sémantique et l’accessibilité. Le titre principal du hero reste distinct ; les petits labels internes aux cartes ne sont pas concernés. Réévaluer après inspection du rendu desktop et mobile.


## D-017 — Accueil fonctionnel, pas vitrine
**Statut : adopté.** L’accueil sert d’abord à rechercher et explorer les prénoms. Ne pas y ajouter de blocs qui présentent le produit, détaillent le contenu d’une fiche ou annoncent des fonctionnalités à venir ; ces informations ont leur place dans les fiches ou les pages dédiées. Chaque section de l’accueil doit justifier sa place par une action ou un usage direct.


## D-018 — Pas de démonstration de fiche sur l’accueil
**Statut : adopté.** Ne pas afficher sur l’accueil une démonstration éditoriale centrée sur un prénom précis (par exemple Benjamin et sa symbolique). L’accueil sert à rechercher et explorer ; les exemples détaillés appartiennent aux fiches prénom.


## D-019 — Regrouper les précisions éditoriales
**Statut : adopté.** La page « À propos » centralise la démarche de Namesia et les limites générales des contenus. Le footer reste léger. Les fiches prénom affichent une seule note informative en bas, avec le symbole d’information standard ℹ et un fond bleu semi-transparent. Les avertissements spécifiques indispensables, notamment l’identification explicite des statistiques fictives, restent près des données concernées.


## D-010 — Composition des cartes prénom
**Statut : adopté.** Les cartes suivent la référence visuelle validée : bandeau illustré ondulé, capsule de l’élément et emblème en haut, médaillon de genre, origine, signification avec repère feuille et bouton « Voir la fiche complète » intégrant livre et flèche. Les styles de bandeau couvrent eau, feu, air, terre et cosmos. La palette de genre (bleu, rose, violet) reste indépendante de la palette élémentaire. Les illustrations CSS sont des interprétations graphiques, non des données sémantiques supplémentaires.


## D-020 — Illustrations propres aux éléments
**Statut : adopté, à valider visuellement.** Les cartes utilisent des dessins SVG distincts pour Eau, Feu, Air, Terre et Cosmos, une découpe asymétrique et un emblème spécifique à chaque élément. Les SVG sont des illustrations vectorielles intégrées au code ; ils ne doivent pas être décrits comme des photographies ou des images bitmap.
