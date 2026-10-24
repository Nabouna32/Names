# Vision produit — Namesia

**Statut :** direction produit adoptée ; les fiches et données actuelles restent une maquette de démonstration.

## Promesse
Namesia est un univers de découverte des prénoms, à parts équilibrées entre contenu factuel et exploration symbolique. Le site mêle histoire, étymologie et repères culturels à des correspondances poétiques, une navigation par éléments, des variantes, des personnalités et des statistiques de popularité sourcées.

L'IA peut aider à préparer le contenu en coulisses ; Namesia n'est pas un assistant IA destiné aux visiteurs.

## Expérience
- Explorer les prénoms par recherche, prénoms apparentés et roue des éléments symboliques (feu, eau, air, terre, cosmos).
- Découvrir une fiche organisée en panneaux éditoriaux cohérents, avec des repères visuels/emoji pour les sections culturelles et un univers symbolique illustré par des vignettes colorées.
- Naviguer entre variantes et formes apparentées par des pastilles cliquables.
- Ne pas exposer dans l’interface les libellés internes de conception (« fiche prénom », « maquette », « en construction »). Expliquer les limites des données avec des formulations éditoriales claires, sans présenter des contenus non vérifiés comme des faits établis.
- Présenter au maximum 8 personnalités pertinentes par prénom, si les sources et la notoriété le justifient ; préciser les domaines et professions.
- Présenter les statistiques INSEE avec chiffres clés, courbe interactive et tableau consultable lorsque les données sont intégrées.
- Proposer un thème clair et un thème sombre réellement travaillés, avec lisibilité, responsive et accessibilité ; conserver un contraste suffisant sur les vignettes colorées dans les deux thèmes.
- Préserver une ambiance chaleureuse, immersive, colorée et poétique : Namesia ne doit pas ressembler à une encyclopédie austère.
- L’accueil est un point d’entrée fonctionnel, pas une vitrine de présentation du produit : privilégier la recherche, l’exploration et l’accès aux prénoms. Ne pas y présenter de démonstrations éditoriales autour d’un prénom précis (y compris un exemple de symbolique), ni de blocs qui décrivent le contenu du site ou annoncent des fonctionnalités à venir ; placer les détails dans les fiches ou les pages dédiées.
- Sur les fiches prénom, utiliser Dancing Script pour le prénom principal, en appliquant explicitement sa famille CSS afin qu’elle ne soit pas écrasée par la règle générique des titres ; garder les autres titres et contenus dans la typographie de lecture.
- Placer le fil d’Ariane dans le bloc de présentation du prénom, avec une icône maison SVG et des séparateurs discrets. Garder uniquement les ancres dans une barre sticky opaque, avec des pastilles colorées, un état actif bien visible et des cibles tactiles confortables ; la barre reste dans les limites de la fiche et ne recouvre pas le footer.

## Navigation et identité de marque
- Le header et le footer sont des composants communs aux pages ; leurs variantes restent limitées au contexte de navigation. Les espacements entre sections et avant le footer suivent des règles responsive partagées.
- Le footer reste léger : marque, liens d’exploration, lien « À propos » et copyright. La présentation générale et les précisions éditoriales communes sont regroupées sur la page « À propos ».
- Sur chaque fiche prénom, afficher une seule note informative discrète en bas, avec le symbole d’information standard ℹ et un fond bleu semi-transparent. Éviter les disclaimers génériques répétés dans les sections.
- N’afficher des liens légaux ou de confidentialité que lorsqu’ils mènent à des informations réelles et adaptées au service ; le copyright ne remplace pas les obligations légales.

## Principes éditoriaux
- Séparer faits documentés, traditions culturelles, hypothèses et créations poétiques.
- Les associations symboliques et les « vocations imaginaires » sont des propositions créatives, jamais des vérités scientifiques ni des prédictions sur les personnes.
- Ne pas présenter les traits de personnalité attribués aux prénoms comme des faits établis.
- Nuancer les étymologies concurrentes ; afficher saints et fêtes seulement lorsqu'ils sont pertinents et sourcés.
- Distinguer variantes, diminutifs et prénoms apparentés.
- Les personnalités sont vérifiables, variées quand c'est pertinent, et limitées à 8 par fiche.
- Les statistiques précisent source, période et périmètre. Avant l'intégration INSEE, des jeux entièrement fictifs peuvent servir à tester les graphiques et tableaux, à condition d'être signalés clairement comme inventés et de ne jamais être présentés comme des chiffres officiels.
- Les correspondances élémentaires sont une taxonomie éditoriale, pas une classification objective.

## Direction visuelle
- Palette expressive avec dégradés irisés et couleurs associées aux vignettes symboliques ; sur les fiches, panneaux doux et arrondis pour structurer la lecture sans encadrer chaque paragraphe.
- Emojis comme repères de catégories (✝️ saints, ⭐ personnalités, 📈 statistiques), sans remplacer les titres accessibles.
- Thèmes clair et sombre, formes douces et motifs célestes dosés.
- La poésie et la couleur coexistent avec une typographie lisible et une information factuelle structurée.

## État actuel
Le prototype visuel utilise des exemples locaux illustratifs. Les contenus, variantes et associations ne sont pas validés. La roue est interactive, mais ses correspondances sont provisoires. Les sources, célébrités vérifiées et statistiques INSEE ne sont pas connectées à une base de données.

## Prochaine étape
Valider la direction visuelle et les parcours, puis concevoir le modèle éditorial et la migration Supabase. Ne pas confondre la maquette avec un catalogue prêt à publication.
