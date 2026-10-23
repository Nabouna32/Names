# Architecture — Namesia

**Mis à jour :** 2026-10-23.

## État actuel
- Next.js App Router, React, TypeScript strict et CSS natif ; aucun framework UI.
- Layout racine partagé pour le header, le footer et les styles globaux.
- Accueil et six fiches de démonstration alimentés par des données locales ; recherche et filtres exécutés côté client.
- Aucun accès applicatif à Supabase, aucune migration, authentification ou API métier.
- Statistiques des fiches fictives et explicitement signalées comme telles ; pas de données INSEE réelles.

## Principes d’interface
- Recherche simple, complétée par des parcours de découverte.
- Présentation factuelle structurée et sobre ; symbolique plus illustrative et colorée.
- Responsive, accessibilité clavier, préférences de mouvement et thèmes clair/sombre à vérifier sur les parcours principaux.
- Les composants communs doivent rester partagés ; les détails de mise en page restent révisables si l’expérience le justifie.

## Cible à concevoir
- Supabase/Postgres pour prénoms, formes apparentées, contenus, associations symboliques, personnalités et statistiques après définition du modèle éditorial.
- Provenance des faits, nuances et statut de vérification conservés avec les contenus.
- Accès serveur par défaut ; examiner les politiques RLS avant toute exposition de données.
- Import des données INSEE avec source, période et périmètre.

## Vérifications et déploiement
- CI GitHub Actions sur les PR vers main : lint, TypeScript et build.
- Vercel déploie depuis main ; previews désactivées volontairement pour préserver le quota.
- Ne pas déclarer une vérification réussie sans résultat observé.
