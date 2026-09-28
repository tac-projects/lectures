# AGENTS.md — Projet « lectures »

## Périmètre de travail

- Travailler **exclusivement** dans `/var/www/lectures`.
- Ne pas explorer, lire ni modifier d'autres dossiers de `/var/www`, ni la configuration du serveur (nginx, services, etc.).
- Si une information manque, la **demander à Thomas** plutôt que d'aller la chercher ailleurs.

## Nature du projet

- Site statique : `index.html` + `assets/` (HTML/CSS/JS, **sans build ni dépendance**).
- Document **autoportant** : aucun lien externe, tout le contenu vit dans `assets/data.js`.
