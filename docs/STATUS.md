# État du projet

**Mis à jour :** 2026-10-23.

## Socle
- Next.js App Router, React, TypeScript strict ; Node.js 24+.
- CI sur les PR vers main : installation, lint, vérification TypeScript et build.
- Supabase créé mais non connecté ; aucune migration.
- Vercel namesia déploie depuis main. Previews désactivés volontairement.
- Toute modification passe par une branche et une PR ; aucune fusion sans approbation explicite.

## Prototype visuel
- Accueil avec direction artistique plus colorée et immersive.
- Thèmes clair/sombre, recherche locale, filtres et roue interactive des éléments.
- Cartes symboliques et fiche exploratoire pour illustrer le parcours.
- Les contenus et associations sont des exemples de démonstration, non vérifiés.
- Pages prénom dédiées en cours de prototype via `/prenoms/[slug]`, avec des fiches de démonstration pour six prénoms.
- Les courbes et tableaux statistiques utilisent uniquement des valeurs inventées, signalées explicitement comme fictives ; aucune donnée INSEE réelle n'est encore intégrée.
- Pas encore de données éditoriales Supabase ni de catalogue vérifié prêt à publication.

## Vérifications locales et CI
- Sur le poste de développement, `npm ci`, `npm run lint` et `npm run typecheck` ont terminé sans erreur ; le serveur `npm run dev` démarre.
- L'installation signale des conflits de compatibilité entre ESLint 10 et plusieurs plugins ESLint, cinq vulnérabilités de sévérité élevée et un script d'installation de `unrs-resolver` à examiner.
- La CI GitHub de la PR en cours est rouge ; son erreur doit être diagnostiquée et corrigée avant toute fusion.
- Ne pas exécuter `npm audit fix --force` avant d'avoir examiné les dépendances concernées.

## Documentation
- Décision actée : documentation du projet en français ; conventions de code et identifiants techniques en anglais.
- Harmonisation complète, dont `AGENTS.md`, suivie dans [l'issue #8](https://github.com/Nabouna32/Namesia/issues/8), à traiter après le chantier dépendances/CI.

## Limites
- Les liens des fiches de démonstration permettent de naviguer entre les prénoms connus ; les variantes non prises en charge restent des libellés sans page.
- Les filtres et la roue reposent sur des associations de démonstration.
- Aucun chiffre INSEE n'est affiché : l'intégration devra utiliser des données sourcées.
- Revue visuelle en cours : deux variantes temporaires de la section Symbolique sont affichées sur les fiches prénom pour comparaison (B sans conteneur extérieur, puis A avec conteneur arrondi). À supprimer après le choix de l'utilisateur.

## Prochaines étapes
1. Diagnostiquer et corriger les avertissements de dépendances ainsi que l'échec de la CI.
2. Ajuster l'identité et les parcours après revue du prototype.
3. Définir le modèle de contenu, les sources, variantes, symboles et personnalités.
4. Préparer la migration Supabase et les données officielles.
5. Implémenter les vraies pages prénom et tester le parcours.
