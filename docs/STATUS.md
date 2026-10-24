# État du projet

**Mis à jour :** 2026-10-24.

## Socle
- Next.js App Router, React, TypeScript strict ; Node.js 24+.
- CI sur les PR vers main : installation, lint, vérification TypeScript et build.
- Supabase créé mais non connecté ; aucune migration.
- Vercel namesia déploie depuis main. Previews désactivés volontairement.
- Toute modification passe par une branche et une PR ; aucune fusion sans approbation explicite.

## Prototype visuel
- Accueil avec direction artistique plus colorée et immersive.
- Les cartes d’accueil affichent le genre à partir d’un champ explicite ; les valeurs présentes restent des données de démonstration. Les cartes ont été réorganisées : l’élément est en haut, le prénom devient le point focal et l’icône SVG de genre est placée à côté du prénom dans un médaillon pastel différencié : bleu pour le masculin, rose pour le féminin et violet pour le mixte. Le symbole mixte est un dessin unifié, pas deux icônes juxtaposées. Le jeu de démonstration couvre les trois genres, avec Camille comme cas mixte. Les pastilles d’élément ont aussi une couleur dédiée par élément, indépendante du ton décoratif de chaque prénom.
- Thèmes clair/sombre, recherche locale, filtres et roue interactive des éléments.
- Cartes symboliques et fiche exploratoire pour illustrer le parcours.
- Les contenus et associations sont des exemples de démonstration, non vérifiés.
- Pages prénom via `/prenoms/[slug]`, avec des fiches de démonstration pour six prénoms.
- Le titre principal des fiches utilise `Dancing Script` via une variable CSS, avec une règle plus spécifique que la typographie générique des titres.
- Footer éditorial partagé dans le layout racine : identité cohérente, liens d’exploration et copyright dynamique. Aucun lien légal n’est affiché tant que les pages correspondantes ne sont pas définies.
- Les courbes et tableaux statistiques utilisent uniquement des valeurs inventées, signalées explicitement comme fictives ; aucune donnée INSEE réelle n'est encore intégrée.
- Pas encore de données éditoriales Supabase ni de catalogue vérifié prêt à publication.

## Vérifications locales et CI
- La PR #7 est fusionnée dans `main`. La CI a validé lint, TypeScript et build après correction des erreurs ESLint.
- Le déploiement de production correspondant est marqué READY sur Vercel.
- Des vulnérabilités de dépendances signalées précédemment restent à examiner ; ne pas lancer `npm audit fix --force` sans analyse.

## Conventions d’interface
- Le fil d’Ariane est intégré au bloc de présentation du prénom ; la barre sticky opaque contient uniquement les ancres stylisées en pastilles, avec état actif et défilement horizontal mobile. Vérification visuelle mobile encore à faire, les previews Vercel étant désactivées.
- Les espacements de sections et la séparation avant le footer sont définis par des variables CSS responsive. Le footer reste rendu une seule fois par le layout racine.

## Documentation
- Décision actée : documentation du projet en français ; conventions de code et identifiants techniques en anglais.
- Harmonisation complète, dont `AGENTS.md`, suivie dans [l'issue #8](https://github.com/Nabouna32/Namesia/issues/8), à traiter après le chantier dépendances/CI.

## Limites
- Les liens des fiches de démonstration permettent de naviguer entre les prénoms connus ; les variantes non prises en charge restent des libellés sans page.
- Les filtres et la roue reposent sur des associations de démonstration.
- Aucun chiffre INSEE n'est affiché : l'intégration devra utiliser des données sourcées.
- Les fiches prénom utilisent des panneaux éditoriaux arrondis. Les libellés de brouillon sont retirés de l'interface publique ; les données statistiques fictives restent explicitement signalées comme telles.

## Prochaines étapes
1. Ajuster l'identité et les parcours à partir des retours visuels.
2. Définir le modèle de contenu, les sources, variantes, symboles et personnalités.
3. Préparer la migration Supabase et les données officielles.
4. Remplacer progressivement les contenus de démonstration par des contenus éditoriaux vérifiés.


## Cartes de prénoms
- La composition de référence est intégrée au code de l’accueil : bandeaux illustrés par élément (eau, feu, air, terre et cosmos), capsule avec icône et nom de l’élément, emblème en haut à droite, médaillon de genre, origine, signification avec icône de feuille et CTA « Voir la fiche complète » avec livre et flèche.
- La légende des trois genres est affichée sous la grille. Les associations élémentaires des prénoms de démonstration restent illustratives ; les cinq thèmes visuels sont disponibles.
- Les vérifications de lint, TypeScript, build et CI restent à confirmer après cette modification.


## Illustrations des cartes
- Les illustrations vectorielles ont été détaillées pour différencier les paysages Eau, Feu, Air, Terre et Cosmos. La bordure inférieure est une courbe asymétrique partagée ; l’emblème supérieur droit est désormais spécifique à chaque élément.
- Les visuels sont des SVG dessinés dans l’interface, pas des photographies ni des fichiers bitmap externes. La vérification visuelle en navigateur reste à faire.
