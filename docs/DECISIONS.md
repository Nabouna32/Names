# Décisions — Namesia

Les décisions sont révisables. Toute révision importante doit expliquer le contexte, les options considérées et les conséquences. Le statut distingue une décision adoptée d'une hypothèse ou d'un sujet encore ouvert.

## D-001 — Next.js App Router, React, TypeScript
**Statut : adopté pour le socle.** Choisi pour le rendu, le SEO et l'intégration Vercel. Alternative : React/Vite pour une SPA plus simple. À réévaluer si les besoins de rendu serveur ne justifient pas la complexité de Next.js.

## D-002 — Pas de bibliothèque UI au départ
**Statut : provisoire.** Le CSS suffit pour valider l'expérience initiale. Réexaminer si le nombre de composants ou les besoins d'accessibilité justifient une dépendance.

## D-003 — Supabase comme base prévue
**Statut : prévu, intégration non réalisée.** Concevoir le modèle éditorial, les relations et les sources avant de figer le schéma.

## D-004 — Données de démonstration locales
**Statut : adopté pour le prototype.** Les exemples actuels ne constituent pas un catalogue éditorial vérifié et devront être remplacés par un flux de données fiable avant une publication de référence.

## D-005 — Namesia est un site éditorial de découverte des prénoms, pas un produit IA
**Statut : direction produit adoptée.** L'IA peut aider à produire ou structurer les fiches en coulisses, mais le site ne propose pas d'assistant IA aux visiteurs et ne doit pas être présenté comme tel. Cela maintient l'attention sur la découverte des prénoms et la fiabilité éditoriale. Toute fonctionnalité IA côté visiteur nécessiterait une décision produit distincte.

## D-006 — Projet Vercel canonique et URL Namesia
**Statut : adopté.** Le projet Vercel `namesia`, connecté au dépôt GitHub `Nabouna32/Namesia`, est le projet canonique. L'URL de travail retenue est `https://namesia.vercel.app`. Un projet Vercel distinct nommé `nemesia` a été trouvé, mais il déploie le même dépôt et le même commit : il est redondant pour le workflow retenu et l'utilisateur prévoit de le supprimer. Ne pas déplacer de domaine ni modifier/supprimer ce projet à la place de l'utilisateur. Le nom du produit reste **Namesia**.

## D-007 — Toute modification passe par une PR
**Statut : règle de travail adoptée.** Ne pas écrire directement sur `main`. Créer une branche dédiée, maintenir les documents canoniques dans la même PR, expliquer le besoin, le challenge, la solution retenue et les vérifications. Ne pas fusionner sans autorisation explicite de l'utilisateur. Cette règle s'applique aussi aux changements de documentation.

## D-008 — Page blanche et challenge systématiques
**Statut : règle de travail adoptée.** Pour chaque tâche significative, repartir du problème réel, challenger la demande, présenter une recommandation argumentée et ses compromis, puis agir sans débat excessif. Faire valider les choix structurants ; trancher les détails réversibles.
