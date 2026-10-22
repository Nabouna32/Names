# État du projet

**Mis à jour :** 2026-10-23.

## Socle
- Application Next.js App Router, React et TypeScript ; Node.js 24+ requis.
- Recherche côté client sur quelques exemples locaux.
- Projet Supabase créé, sans intégration applicative ni migration de schéma.
- Projet Vercel : `namesia` — [namesia.vercel.app](https://namesia.vercel.app).
- Dépendances verrouillées dans `package-lock.json` ; installation CI reproductible via `npm ci`.
- CI sur les PR vers `main` : installation, lint, TypeScript et build. Aucun audit de vulnérabilités dans ce contrôle PR.
- Audit de sécurité séparé chaque lundi à 08:17 UTC, sur les dépendances de production et de développement ; déclenchement manuel possible.
- Dependabot vérifie chaque semaine les dépendances npm et les actions GitHub, en couvrant les mises à jour majeures, mineures et correctives.
- L'audit complet a signalé `braces@3.0.3`, dépendance transitive de développement sans correctif amont connu au moment du dernier audit ; le rapport hebdomadaire permet de détecter l'arrivée d'un correctif.
- Vercel Preview désactivé volontairement ; seule `main` déploie en production, pour préserver le quota de 100 déploiements par jour.

## Limites actuelles
- Les exemples locaux ne constituent pas un catalogue éditorial vérifié.
- Pas de schéma Supabase, de provenance éditoriale structurée ni de processus de vérification/publication.
- Pas de tests de parcours documentés.
- Sans déploiement Preview, les changements d'interface doivent être vérifiés localement et par CI avant fusion ; la production est vérifiée après fusion.

## Prochaines étapes
1. Prioriser les parcours et le périmètre de la fiche de prénom.
2. Définir le modèle éditorial, les sources et le processus de vérification.
3. Créer une migration Supabase après validation du modèle.
4. Remplacer les exemples de démonstration par des données vérifiées et tester la recherche jusqu'à la fiche.
