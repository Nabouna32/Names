# Architecture — Namesia

**Mis à jour :** 2026-10-22.

## État actuel
- Next.js App Router, React et TypeScript strict.
- CSS du projet, sans bibliothèque UI ajoutée au départ.
- Recherche côté client sur des exemples codés localement.
- Aucun accès applicatif à Supabase, aucune authentification et aucune API métier.

## Flux actuel
Le navigateur filtre des exemples statiques. Ils servent uniquement au prototype et ne sont pas une source éditoriale.

## Cible provisoire
- Next.js pour interface, routes et rendu.
- Supabase/Postgres pour les données métier, avec migrations versionnées.
- Accès serveur par défaut ; exposition publique minimale et politiques RLS adaptées.
- Vercel pour les déploiements reliés à GitHub.

Cette cible reste révisable. Ne pas introduire de cache ou de moteur de recherche spécialisé avant d'avoir validé le besoin.

## Environnement
Le prototype ne nécessite aucune variable d'environnement. À l'intégration de Supabase, documenter les noms requis dans `.env.example`. Les secrets ne doivent jamais être accessibles au navigateur.

## À réévaluer
Recherche Postgres vs recherche avancée, rendu statique vs dynamique, bibliothèque UI et provenance éditoriale des données.
