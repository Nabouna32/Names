# État du projet

**Mis à jour :** 2026-10-23.

## Socle existant
- Dépôt GitHub : `Nabouna32/Namesia`.
- Application Next.js App Router, React et TypeScript.
- Interface initiale avec recherche côté client sur quelques exemples locaux.
- Projet Supabase nommé Namesia créé, mais aucune intégration applicative ni migration de schéma réalisée.
- Projet Vercel `namesia` précédemment observé comme relié au dépôt. Le statut du dernier déploiement et la configuration de l'URL de développement doivent être vérifiés séparément.

## Direction produit confirmée
- Namesia est un site de découverte et de compréhension des prénoms.
- Les fiches peuvent être préparées avec l'aide de l'IA en coulisses ; il n'y a pas d'assistant IA ou de fonctionnalité IA destinée aux visiteurs dans le périmètre défini.
- Le public visé est large, avec notamment les futurs parents, mais la hiérarchie des parcours reste à préciser.
- L'URL souhaitée pendant le développement est `https://nemesia.vercel.app`, tandis que la marque et le nom du produit restent **Namesia**. L'association du domaine à Vercel n'est pas confirmée ici.

## Limites connues
- Exemples locaux uniquement, non vérifiés comme catalogue éditorial.
- Pas de schéma ni de migration Supabase.
- Pas de provenance éditoriale structurée ni de processus de vérification/publication.
- Pas de tests de parcours documentés.
- Lint, typecheck, build et état actuel du déploiement n'ont pas été exécutés ou confirmés dans le cadre de cette mise à jour documentaire.

## Prochaines étapes recommandées
1. Vérifier le déploiement Vercel et la configuration de `nemesia.vercel.app`.
2. Repartir de la page blanche pour prioriser les parcours et le périmètre de la fiche de prénom.
3. Définir un modèle éditorial qui gère variantes, origines concurrentes, provenance et niveau de confiance.
4. Choisir les sources et le processus de vérification avant d'importer ou publier des fiches.
5. Créer une première migration Supabase uniquement après validation du modèle ; passer par une PR.
6. Remplacer progressivement les exemples de démonstration par des données éditoriales vérifiées et tester le parcours de recherche vers la fiche.
