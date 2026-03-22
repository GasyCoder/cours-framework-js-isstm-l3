# TP : Installation et Premier Projet Vue.js

Ce TP a pour objectif de configurer votre environnement de développement et de créer votre tout premier projet Vue.js.

## Étape 1 : Vérifier l'installation de Node.js

Ouvrez un terminal et tapez les commandes suivantes :

```bash
node -v
npm -v
```

Si ces commandes affichent une version (ex: v18.0.0+), vous êtes prêt. Sinon, téléchargez Node.js sur [nodejs.org](https://nodejs.org/).

## Étape 2 : Créer le projet avec l'outil officiel

Dans votre dossier de travail, lancez la commande suivante :

```bash
npm create vue@latest
```

Répondez aux questions comme suit pour un premier projet simple :
- **Project name**: mon-premier-projet
- **Add TypeScript?**: No
- **Add JSX Support?**: No
- **Add Vue Router?**: No
- **Add Pinia?**: No
- **Add Vitest?**: No
- **Add Cypress?**: No
- **Add ESLint?**: No
- **Add Prettier?**: No

## Étape 3 : Installer les dépendances

Le dossier est créé, mais il manque les bibliothèques. Entrez dans le dossier et installez tout ce qui est nécessaire :

```bash
cd mon-premier-projet
npm install
```

## Étape 4 : Lancer le serveur de développement

Pour voir votre application en direct :

```bash
npm run dev
```

Ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`).

## Étape 5 : Comprendre la structure du projet

Explorez le dossier avec VS Code :
- `index.html` : Le point d'entrée unique de votre application.
- `src/main.js` : Le fichier JavaScript qui lance Vue.
- `src/App.vue` : Votre composant principal (C'est ici que l'on commence à coder).
- `package.json` : Contient la liste des outils installés.

## Défi rapide : Modifiez votre premier texte !
Ouvrez `src/App.vue`, cherchez un texte dans le `<template>` et remplacez-le par votre nom. Regardez votre navigateur... Magie ! La mise à jour est instantanée.
