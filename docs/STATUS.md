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
- Pas encore de pages prénom dédiées, données éditoriales Supabase, personnalités vérifiées ni statistiques INSEE.

## Limites
- Les pastilles de variantes ne naviguent pas encore vers des pages prénom complètes.
- Les filtres et la roue reposent sur des associations de démonstration.
- Aucun chiffre INSEE n'est affiché : l'intégration devra utiliser des données sourcées.
- La direction visuelle doit encore être revue par l'utilisateur.

## Prochaines étapes
1. Ajuster l'identité et les parcours après revue du prototype.
2. Définir le modèle de contenu, les sources, variantes, symboles et personnalités.
3. Préparer la migration Supabase et les données officielles.
4. Implémenter les vraies pages prénom et tester le parcours.
