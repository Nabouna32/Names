# Namesia

Namesia est un site de découverte des prénoms : explorer leurs origines, significations, histoires et usages. L'IA peut aider à préparer les fiches éditoriales en coulisses ; le site lui-même n'est pas un assistant IA.

## Développement

Prérequis : Node.js 20.9+ et npm.

```bash
npm install
npm run dev
```

Vérifications : `npm run lint`, `npm run typecheck`, `npm run build`.

Le projet Vercel canonique est `namesia`, connecté au dépôt `Nabouna32/Namesia`. L'URL de travail retenue est `https://namesia.vercel.app`. Le projet Vercel redondant `nemesia` est destiné à être supprimé par l'utilisateur ; ne pas le considérer comme la cible du déploiement.

## Documentation canonique

- [Vision produit](docs/PRODUCT.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Décisions](docs/DECISIONS.md)
- [État du projet](docs/STATUS.md)
- [Guide agents et méthode de travail](AGENTS.md)

## Contribution au projet

Ne pas modifier directement `main`. Toute modification, y compris documentaire, se fait sur une branche dédiée et passe par une pull request. Chaque tâche significative commence par une remise à plat du besoin et un challenge de la solution, puis met à jour les documents canoniques concernés dans la même PR.

Les exemples de prénoms de l'interface actuelle sont des données de démonstration, pas un catalogue éditorial vérifié. Supabase n'est pas encore connecté à l'application.
