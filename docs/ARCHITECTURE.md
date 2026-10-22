# Architecture — Namesia

**Mis à jour :** 2026-10-23.

## État actuel vérifié dans le dépôt
- Next.js App Router, React et TypeScript strict.
- CSS du projet, sans bibliothèque UI ajoutée au départ.
- Page d'accueil côté client qui filtre des exemples de prénoms codés localement.
- Aucun accès applicatif à Supabase, aucune authentification et aucune API métier.
- Le site ne propose pas de fonctionnalité d'IA aux visiteurs. L'IA peut être utilisée dans le processus éditorial en amont ; ce n'est pas une dépendance runtime définie pour l'application.

## Flux actuel
Le navigateur filtre des exemples statiques intégrés au code. Ces exemples sont destinés au prototype, pas une source éditoriale vérifiée. Aucun flux de publication ou de validation des fiches n'est encore implémenté.

## Cible provisoire
- Next.js pour l'interface, les routes et le rendu.
- Supabase/Postgres pour les données métier, avec migrations versionnées lorsque le schéma sera défini.
- Accès serveur par défaut et exposition publique minimale ; politiques RLS adaptées si et là où elles sont nécessaires.
- Vercel pour les déploiements reliés à GitHub.
- Un modèle de contenu qui permet de conserver la provenance et les nuances des affirmations éditoriales.

Cette cible reste révisable. Ne pas introduire de cache, moteur de recherche spécialisé, système d'authentification ou service IA dans le site avant d'avoir validé un besoin concret.

## Environnement
- Dépôt : `Nabouna32/Namesia`.
- Projet Vercel : `namesia` — [namesia.vercel.app](https://namesia.vercel.app).
- Le prototype ne nécessite aucune variable d'environnement. À l'intégration de Supabase, documenter les noms requis dans `.env.example`. Les secrets ne doivent jamais être accessibles au navigateur.

## À réévaluer avant implémentation
- Modèle des prénoms, variantes, origines multiples, affirmations sourcées et révisions éditoriales.
- Recherche Postgres vs recherche avancée, rendu statique vs dynamique.
- Stratégie de vérification et de publication du contenu produit avec l'aide de l'IA.
- Bibliothèque UI uniquement si elle apporte un gain réel.
