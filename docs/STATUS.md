# État du projet

**Mis à jour :** 2026-10-23.

## Socle
- Next.js App Router, React, TypeScript strict, CSS natif ; Node.js 24+.
- CI sur les PR vers main : lint, TypeScript et build.
- Supabase créé mais non connecté ; aucune migration ni authentification.
- Vercel déploie depuis main ; previews désactivées volontairement.

## Produit et contenu
- Prototype avec une page de découverte et six fiches alimentés par des données locales.
- La direction produit privilégie une recherche directe et une exploration complémentaire.
- Les contenus et associations restent des exemples non vérifiés ; les statistiques présentes dans les fiches sont fictives.
- Les registres factuel et symbolique doivent être distingués visuellement et éditorialement.
- Favoris et comparaison reportés ; aucun compte utilisateur nécessaire pour le périmètre actuel.

## Limites connues
- Pas de catalogue éditorial validé, de données INSEE réelles, de sources connectées ni de Supabase applicatif.
- Les liens de variantes peuvent ne pas disposer d’une fiche dédiée.
- La vérification visuelle réelle sur plusieurs tailles d’écran reste nécessaire ; ne pas la confondre avec la CI.
- Des vulnérabilités de dépendances ont été signalées auparavant ; les examiner séparément et ne pas exécuter npm audit fix --force sans analyse.

## Prochaines étapes
1. Examiner la PR de refonte et ses contrôles CI.
2. Vérifier visuellement l’accueil et les fiches sur mobile et bureau.
3. Concevoir le modèle éditorial et la provenance avant les migrations Supabase.
4. Remplacer progressivement les exemples par des contenus sourcés.
