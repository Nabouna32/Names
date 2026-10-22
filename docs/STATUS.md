# État du projet

**Mis à jour :** 2026-10-23.

## Socle existant
- Dépôt GitHub : `Nabouna32/Namesia`.
- Application Next.js App Router, React et TypeScript.
- Interface initiale avec recherche côté client sur quelques exemples locaux.
- Projet Supabase créé, sans intégration applicative ni migration de schéma.
- Projet Vercel : `namesia` — [namesia.vercel.app](https://namesia.vercel.app).

## Direction produit
- Site de découverte et de compréhension des prénoms.
- L'IA peut aider à préparer les fiches en coulisses ; aucune fonctionnalité IA destinée aux visiteurs n'est prévue.
- Le public est large, notamment les futurs parents ; la hiérarchie des parcours reste à préciser.

## Limites connues
- Exemples locaux uniquement, non vérifiés comme catalogue éditorial.
- Pas de schéma ni de migration Supabase.
- Pas de provenance éditoriale structurée ni de processus de vérification/publication.
- Pas de tests de parcours documentés.

## Prochaines étapes
1. Prioriser les parcours et le périmètre de la fiche de prénom.
2. Définir un modèle éditorial qui gère variantes, origines concurrentes, provenance et niveau de confiance.
3. Choisir les sources et le processus de vérification avant d'importer ou publier des fiches.
4. Créer une première migration Supabase après validation du modèle.
5. Remplacer progressivement les exemples de démonstration par des données éditoriales vérifiées et tester le parcours de recherche vers la fiche.
