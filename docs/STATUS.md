# État du projet

**Mis à jour :** 2026-10-23.

## Socle existant
- Dépôt GitHub : `Nabouna32/Namesia`.
- Application Next.js App Router, React et TypeScript.
- Interface initiale avec recherche côté client sur quelques exemples locaux.
- Projet Supabase nommé Namesia créé, mais aucune intégration applicative ni migration de schéma réalisée.
- Le projet Vercel `namesia` est relié au dépôt et son déploiement de production sur le commit actuel a été observé comme prêt. Le domaine `nemesia.vercel.app` appartient actuellement au projet Vercel distinct `nemesia`, pas au projet `namesia`.

## Direction produit confirmée
- Namesia est un site de découverte et de compréhension des prénoms.
- Les fiches peuvent être préparées avec l'aide de l'IA en coulisses ; il n'y a pas d'assistant IA ou de fonctionnalité IA destinée aux visiteurs dans le périmètre défini.
- Le public visé est large, avec notamment les futurs parents, mais la hiérarchie des parcours reste à préciser.
- La marque et le nom du produit restent **Namesia**. L'URL de développement souhaitée est `https://nemesia.vercel.app`, mais elle est actuellement associée à un projet Vercel distinct et ne doit pas être considérée comme l'URL du déploiement Namesia.

## État de la qualité technique
- La PR de fond précédente a passé ses contrôles avant fusion ; le commit de fusion est maintenant signalé en succès par les deux checks Vercel.
- Une PR séparée propose de mettre à niveau le framework et les outils vers leurs versions stables récentes. Les contrôles de cette PR doivent être attendus avant de déclarer la nouvelle chaîne validée.
- Le dépôt ne disposait pas de `package-lock.json` à l'état initial ; la reproductibilité de l'installation reste à finaliser plutôt que de fabriquer un lockfile non généré par npm.

## Limites produit connues
- Exemples locaux uniquement, non vérifiés comme catalogue éditorial.
- Pas de schéma ni de migration Supabase.
- Pas de provenance éditoriale structurée ni de processus de vérification/publication.
- Pas de tests de parcours documentés.

## Prochaines étapes recommandées
1. Valider la mise à niveau de la chaîne technique dans une PR, corriger les incompatibilités éventuelles et ne fusionner qu'après des contrôles verts.
2. Générer et committer un lockfile npm à partir d'une installation réelle, puis passer CI à `npm ci`.
3. Clarifier si le domaine `nemesia.vercel.app` doit être transféré/associé au projet Vercel Namesia ; ne pas modifier le projet Vercel distinct par inadvertance.
4. Repartir de la page blanche pour prioriser les parcours et le périmètre de la fiche de prénom.
5. Définir un modèle éditorial qui gère variantes, origines concurrentes, provenance et niveau de confiance.
6. Choisir les sources et le processus de vérification avant d'importer ou publier des fiches.
7. Créer une première migration Supabase uniquement après validation du modèle ; passer par une PR.
8. Remplacer progressivement les exemples de démonstration par des données éditoriales vérifiées et tester le parcours de recherche vers la fiche.
