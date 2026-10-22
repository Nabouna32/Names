# AGENTS.md — Namesia

## Mission
Construire Namesia, un site de découverte des prénoms : ses visiteurs explorent les prénoms, leurs origines, significations, histoires et usages. Le contenu éditorial peut être préparé avec l'aide de l'IA, mais le site n'est pas un assistant IA et ne doit pas être présenté comme tel.

Ce guide aide à prendre de bonnes décisions ; il ne doit jamais devenir une contrainte immuable. Si une règle ou une décision devient contre-productive, expliquer pourquoi, proposer mieux et mettre à jour le guide.

## Méthode de travail obligatoire
Pour chaque tâche significative, repartir de la page blanche avant d'implémenter :
1. Reformuler le besoin utilisateur et le problème à résoudre.
2. Challenger la demande : si on repartait de zéro aujourd'hui, quelle solution serait la meilleure ? Comparer les options réellement pertinentes.
3. Présenter une recommandation claire, ses raisons, ses compromis et les conséquences produit/techniques.
4. Faire valider les choix structurants qui engagent durablement le produit ; trancher les détails réversibles sans débat inutile.
5. Implémenter, vérifier le résultat, puis mettre à jour les documents canoniques concernés dans le même changement.

Le challenge transversal est obligatoire : considérer produit, UX, modèle éditorial et données, sécurité, SEO, accessibilité, performance, coûts et maintenance selon la pertinence. Ne pas inventer des problèmes pour le principe ni multiplier les options équivalentes.

## Git et pull requests — règle stricte
- **Ne jamais modifier directement `main`.** Toute modification passe par une branche dédiée et une pull request (PR) vers `main`.
- Créer une branche courte et descriptive pour chaque unité de changement cohérente.
- La PR explique le problème, la proposition retenue, les alternatives ou compromis importants, les fichiers touchés et les vérifications effectuées.
- Examiner les changements et les résultats de vérification avant de proposer la fusion. Ne pas fusionner ni déclarer une PR validée sans autorisation explicite de l'utilisateur.
- Si une opération ou un outil ne permet pas de travailler hors de `main`, s'arrêter avant d'écrire et proposer une voie compatible.
- Ne jamais prétendre qu'un test, un build, une revue ou un déploiement a réussi sans résultat observé.

## Documentation canonique
La documentation fait partie du produit et doit évoluer avec le code, dans la même PR :
- `docs/PRODUCT.md` : promesse, publics, expérience, périmètre et principes éditoriaux.
- `docs/ARCHITECTURE.md` : architecture et flux réellement présents, puis cible clairement identifiée.
- `docs/DECISIONS.md` : décisions structurantes, raisons, alternatives et statut.
- `docs/STATUS.md` : état vérifié, limites connues, contrôles effectués et prochaines étapes.
- `README.md` : présentation et instructions utiles pour démarrer.
Ajouter un document uniquement s'il apporte une source canonique utile. Supprimer ou fusionner les éléments devenus obsolètes ou redondants. Distinguer explicitement l'existant, le prévu et les hypothèses ; ne pas documenter une intention comme une capacité livrée.

## Principes d'ingénierie
- Garder l'architecture proportionnée au besoin ; éviter la complexité prématurée.
- Privilégier TypeScript strict, accessibilité, responsive, SEO et performance.
- Ne pas ajouter de services tiers ou de dépendances sans bénéfice clair.
- Identifier les données de démonstration et ne pas les présenter comme un catalogue éditorial vérifié.
- Prévoir provenance, niveau de confiance et nuances pour les informations éditoriales ; l'IA ne rend pas une affirmation vraie par défaut.
- Versionner les migrations SQL et examiner la sécurité/RLS avant d'exposer des données.
- Ne jamais exposer une clé secrète ou `service_role` côté navigateur ou dans une variable `NEXT_PUBLIC_`.

## Vérification
Après les changements pertinents, lancer lint, contrôle TypeScript et build. Vérifier également le parcours touché et l'aperçu de déploiement lorsque possible. Si l'environnement ne permet pas un contrôle, le signaler sans le présenter comme réussi.

## Questions de challenge
- Le besoin réel est-il bien identifié ?
- Si on repart de zéro, conserverait-on cette approche ?
- Existe-t-il une solution plus simple ou plus robuste ?
- Quelles hypothèses, données ou dépendances pourraient invalider le choix ?
- Quelles conséquences sur UX, sécurité, SEO, coût et maintenance ?
- Quels documents sont devenus incomplets, faux ou redondants ?

Ce guide évolue avec Namesia : il doit améliorer le jugement, jamais empêcher une amélioration justifiée.
