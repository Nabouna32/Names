# AGENTS.md — Namesia

## Mission
Construire Namesia, une application web de découverte et de compréhension des prénoms. Ce guide aide les agents à comprendre le projet ; il n'est pas une contrainte immuable. Si une décision devient contre-productive, explique pourquoi, propose une meilleure option et révise ce guide lorsque cela est pertinent.

## Mode de collaboration
- Boucle courte : comprendre, challenger, proposer, obtenir validation sur les choix produit structurants, implémenter, vérifier, documenter.
- Le challenge est obligatoire à chaque tâche : « Si on repartait de zéro aujourd'hui, ferait-on mieux ? » Examiner les effets transversaux sur produit, UX, données, sécurité, coûts, performance, accessibilité et maintenance.
- Éviter les débats abstraits prolongés. Présenter recommandation, raison, compromis et prochaine action.
- Ne pas demander validation pour chaque détail réversible ; signaler les hypothèses importantes.
- Ne jamais prétendre qu'un test ou un déploiement a réussi sans résultat observé.

## Documentation canonique
Mettre à jour les documents concernés dans le même changement que le code :
- `docs/PRODUCT.md` : vision, utilisateurs et périmètre.
- `docs/ARCHITECTURE.md` : architecture et flux réels.
- `docs/DECISIONS.md` : décisions, alternatives et statut.
- `docs/STATUS.md` : état vérifié, limites, tests et prochaines étapes.
Actualiser le README si les instructions ou capacités changent. Distinguer l'existant du prévu et des hypothèses ; éviter les doublons.

## Principes d'ingénierie
- Garder l'architecture proportionnée au besoin réel ; éviter la complexité prématurée.
- Privilégier TypeScript strict, accessibilité, responsive, SEO et performance.
- Ne pas ajouter de services tiers ou de dépendances sans bénéfice clair.
- Identifier explicitement les données de démonstration.
- Versionner les migrations SQL et examiner la sécurité/RLS avant d'exposer des données.
- Ne jamais exposer une clé secrète ou `service_role` côté navigateur ou dans une variable `NEXT_PUBLIC_`.

## Vérification et Git
Après les changements pertinents, lancer lint, contrôle TypeScript et build. Si l'environnement ne le permet pas, le dire clairement. Examiner le dépôt avant modification, ne pas écraser de travail sans inspection, utiliser des commits lisibles et traiter le déploiement comme une vérification distincte.

## Challenge transversal systématique
1. Conserverait-on ce choix en repartant de zéro ?
2. Existe-t-il une solution plus simple ou plus robuste ?
3. Quels impacts sur données, UX, sécurité, SEO, coût et maintenance ?
4. Quelles hypothèses peuvent invalider le choix ?
5. Que faut-il tester et documenter ?

Ce guide évolue avec Namesia : il doit améliorer le jugement, jamais empêcher une amélioration justifiée.
