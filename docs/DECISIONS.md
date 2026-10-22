# Décisions — Namesia

Ne conserver ici que les décisions structurantes encore utiles. Les détails d'exécution, l'historique de conversation et les décisions devenues obsolètes n'ont pas leur place dans ce document.

## D-001 — Next.js App Router, React, TypeScript
**Statut : adopté pour le socle.** Choisi pour le rendu, le SEO et l'intégration Vercel. Alternative : React/Vite pour une SPA plus simple. À réévaluer si les besoins de rendu serveur ne justifient pas la complexité de Next.js.

## D-002 — Pas de bibliothèque UI au départ
**Statut : provisoire.** Le CSS suffit pour valider l'expérience initiale. Réexaminer si le nombre de composants ou les besoins d'accessibilité justifient une dépendance.

## D-003 — Supabase comme base prévue
**Statut : prévu, intégration non réalisée.** Concevoir le modèle éditorial, les relations et les sources avant de figer le schéma.

## D-004 — Données de démonstration locales
**Statut : adopté pour le prototype.** Les exemples actuels ne constituent pas un catalogue éditorial vérifié et devront être remplacés par un flux de données fiable avant une publication de référence.

## D-005 — Namesia est un site éditorial de découverte des prénoms, pas un produit IA
**Statut : direction produit adoptée.** L'IA peut aider à produire ou structurer les fiches en coulisses, mais le site ne propose pas d'assistant IA aux visiteurs.

## D-006 — Déploiement Vercel limité à main
**Statut : adopté.** Le projet de référence est `namesia` — [namesia.vercel.app](https://namesia.vercel.app). Seule la branche `main` déploie en production ; les déploiements Preview sont désactivés pour préserver le quota de 100 déploiements par jour. La CI GitHub sur les PR remplace les previews comme contrôle automatisé avant fusion ; une preview n'est pas une condition de fusion.

## D-007 — Toute modification passe par une PR
**Statut : règle de travail adoptée.** Ne pas écrire directement sur `main`. Créer une branche dédiée, examiner le diff et vérifier les contrôles avant fusion.

## D-008 — Challenge avant implémentation
**Statut : règle de travail adoptée.** Repartir du besoin réel, comparer les options pertinentes et privilégier la solution la plus simple qui répond au besoin. Challenger sans créer de débats inutiles.

## D-009 — Auto-merge conditionnel
**Statut : adopté.** Regrouper le périmètre cohérent, relire le diff complet et vérifier les contrôles avant de décider de fusionner. Pas d'auto-merge par défaut ; l'envisager uniquement pour une PR à faible risque après approbation explicite et si GitHub impose réellement les contrôles requis. Pour les changements structurels, de données, de sécurité ou de déploiement, décision humaine explicite au moment de la fusion.

## D-010 — Versions du socle et compatibilité TypeScript
**Statut : adopté.** Utiliser Node.js 24 et les versions stables compatibles les plus récentes de Next.js, React et leurs types. Garder TypeScript 6 tant que `@typescript-eslint/parser` déclare une compatibilité `<6.1.0` ; ne pas adopter TypeScript 7 avant prise en charge officielle par la chaîne de lint.

## D-011 — Vulnérabilité transitive non corrigée dans l'outillage
**Statut : suivi.** `braces@3.0.3` est signalé par GHSA-vfj7-8cjw-p6xm et transite par l'outillage de lint. Aucun correctif amont n'est publié à ce jour. L'audit de production reste bloquant ; l'audit complet reste visible sans bloquer le reste de la CI pour ce constat non corrigeable, à réévaluer dès publication d'un correctif.
