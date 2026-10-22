# État du projet

**Mis à jour :** 2026-10-23.

## Socle existant
- Dépôt GitHub : `Nabouna32/Namesia`.
- Application Next.js App Router, React et TypeScript.
- Interface initiale avec recherche côté client sur quelques exemples locaux.
- Projet Supabase nommé Namesia créé, mais aucune intégration applicative ni migration de schéma réalisée.
- Projet Vercel canonique : `namesia`, connecté au dépôt GitHub `Nabouna32/Namesia`.
- Le déploiement de production observé pour `namesia` est en état Vercel `READY`. Cela ne confirme pas à lui seul que toutes les protections, l'accessibilité publique ou le parcours utilisateur sont vérifiés.

## Direction produit confirmée
- Namesia est un site de découverte et de compréhension des prénoms.
- Les fiches peuvent être préparées avec l'aide de l'IA en coulisses ; il n'y a pas d'assistant IA ou de fonctionnalité IA destinée aux visiteurs dans le périmètre défini.
- Le public visé est large, avec notamment les futurs parents, mais la hiérarchie des parcours reste à préciser.
- L'URL de travail retenue est `https://namesia.vercel.app`. La marque et le nom du produit sont **Namesia**.

## Clarification Vercel
Deux projets distincts, `namesia` et `nemesia`, ont été observés dans le même espace Vercel. Les deux déployaient le même dépôt `Nabouna32/Namesia` et le même commit de `main` au moment de la vérification. `namesia` est le projet retenu comme référence ; l'utilisateur prévoit de supprimer le projet redondant `nemesia`. Ne pas supprimer ni modifier ce dernier à sa place. Réévaluer le statut si l'utilisateur confirme une suppression ou si la configuration Vercel change.

## Limites connues
- Exemples locaux uniquement, non vérifiés comme catalogue éditorial.
- Pas de schéma ni de migration Supabase.
- Pas de provenance éditoriale structurée ni de processus de vérification/publication.
- Pas de tests de parcours documentés.
- Lint, typecheck, build et état actuel du déploiement doivent être vérifiés pour chaque changement de code ; cette PR est documentaire.

## Prochaines étapes recommandées
1. Repartir de la page blanche pour prioriser les parcours et le périmètre de la fiche de prénom.
2. Définir un modèle éditorial qui gère variantes, origines concurrentes, provenance et niveau de confiance.
3. Choisir les sources et le processus de vérification avant d'importer ou publier des fiches.
4. Créer une première migration Supabase uniquement après validation du modèle ; passer par une PR.
5. Remplacer progressivement les exemples de démonstration par des données éditoriales vérifiées et tester le parcours de recherche vers la fiche.
