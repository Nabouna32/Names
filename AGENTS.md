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

## Style des réponses
- Rendre les réponses faciles à parcourir : titres courts, listes et mise en évidence seulement quand cela aide.
- Utiliser quelques emojis pertinents comme repères visuels, sans accumulation.
- Rester sobre et adapter le format à la demande et au contexte.

## Git et pull requests
- **Ne jamais modifier directement `main`.** Toute modification passe par une branche et une PR vers `main`.
- **Continuer la PR existante pour un même chantier.** Pour les retours, corrections et ajustements qui appartiennent au même périmètre, pousser de nouveaux commits sur la branche de la PR déjà ouverte. Ne pas créer une nouvelle branche/PR à chaque demande.
- Avant de créer une PR, rechercher les PR ouvertes et comparer la branche de travail à `main`. Vérifier l'ascendance et le diff réel pour éviter les PR en doublon ou les changements déjà inclus dans une autre PR.
- Ne fermer, rouvrir ou remplacer une PR que si cela résout un vrai problème de périmètre ou de base ; si plusieurs PR couvrent le même travail, conserver une seule PR cohérente et fermer les doublons sans les fusionner.
- La PR explique le problème, la proposition retenue, les compromis importants, les fichiers touchés et les vérifications effectuées.
- Après chaque changement pertinent, exécuter `npm run lint`, `npm run typecheck`, `npm run build` et les tests disponibles ; inspecter les logs et corriger tout échec. Ne jamais annoncer un contrôle réussi sans résultat observé.
- **Aucune fusion sans approbation explicite de l'utilisateur pour cette fusion.** Une demande de modification, de mise à jour de documentation ou de préparation d'une PR n'est pas une autorisation de fusion. Ne pas activer l'auto-merge ni fusionner implicitement après les contrôles ; demander l'accord au moment où la PR est prête, puis vérifier le diff complet, les contrôles requis et les protections. Ne jamais contourner un blocage.
- Si un contrôle, une permission, une protection ou un conflit bloque la fusion, expliquer le blocage sans le contourner.

## Documentation canonique
La documentation fait partie du produit et doit évoluer avec le code, dans la même PR :
- `docs/PRODUCT.md` : promesse, publics, expérience, périmètre et principes éditoriaux.
- `docs/ARCHITECTURE.md` : architecture et flux réellement présents, puis cible clairement identifiée.
- `docs/DECISIONS.md` : décisions structurantes, raisons, alternatives et statut.
- `docs/STATUS.md` : état vérifié, limites connues, contrôles effectués et prochaines étapes.
- `README.md` : présentation et instructions utiles pour démarrer.
Ajouter un document uniquement s'il apporte une source canonique utile. Supprimer ou fusionner les éléments devenus obsolètes ou redondants. Distinguer explicitement l'existant, le prévu et les hypothèses.
- **Concision obligatoire :** documenter l'état actuel et les décisions encore utiles, pas le récit des conversations ou des opérations. Chaque information doit avoir une seule place canonique ; éviter les répétitions et les détails sans valeur durable.
- Garder les documents proportionnés au projet.

## Principes d'ingénierie
- Garder l'architecture proportionnée au besoin ; éviter la complexité prématurée.
- Privilégier TypeScript strict, accessibilité, responsive, SEO et performance.
- Ne pas ajouter de services tiers ou de dépendances sans bénéfice clair.
- Identifier les données de démonstration et ne pas les présenter comme un catalogue éditorial vérifié.
- Prévoir provenance, niveau de confiance et nuances pour les informations éditoriales ; l'IA ne rend pas une affirmation vraie par défaut.
- Versionner les migrations SQL et examiner la sécurité/RLS avant d'exposer des données.
- Ne jamais exposer une clé secrète ou `service_role` côté navigateur ou dans une variable `NEXT_PUBLIC_`.

## Vérification
La CI GitHub Actions exécute lint, TypeScript et build uniquement sur les pull requests vers `main`, en annulant les exécutions obsolètes encore en cours. Le déploiement Vercel de production est déclenché par `main` uniquement ; les previews sont désactivés pour limiter la consommation du quota de déploiements. Une preview n'est donc pas un prérequis de fusion. Si l'environnement ne permet pas un contrôle local, le dire et s'appuyer sur une CI observée, sans présenter un contrôle non exécuté comme réussi.

## Questions de challenge
- Le besoin réel est-il bien identifié ?
- Si on repart de zéro, conserverait-on cette approche ?
- Existe-t-il une solution plus simple ou plus robuste ?
- Quelles hypothèses, données ou dépendances pourraient invalider le choix ?
- Quelles conséquences sur UX, sécurité, SEO, coût et maintenance ?
- Quels documents sont devenus incomplets, faux ou redondants ?

Ce guide évolue avec Namesia : il doit améliorer le jugement, jamais empêcher une amélioration justifiée.
