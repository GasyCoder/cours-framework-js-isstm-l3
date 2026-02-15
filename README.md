# Cours complet : Les Frameworks JavaScript

### Du Frontend au Backend
---

## Table des matières

1. [Introduction générale](#1-introduction-générale)
2. [Rappels JavaScript essentiels (ES6+)](#2-rappels-javascript-essentiels-es6)
3. [Qu'est-ce qu'un framework JavaScript ?](#3-quest-ce-quun-framework-javascript)
4. [Partie I — Le Frontend](#partie-i--le-frontend)
   - [Chapitre 4 : Les concepts fondamentaux du frontend moderne](#chapitre-4--les-concepts-fondamentaux-du-frontend-moderne)
   - [Chapitre 5 : React.js — La bibliothèque de composants](#chapitre-5--reactjs--la-bibliothèque-de-composants)
   - [Chapitre 6 : Vue.js — Le framework progressif](#chapitre-6--vuejs--le-framework-progressif)
   - [Chapitre 7 : Angular — Le framework complet](#chapitre-7--angular--le-framework-complet)
   - [Chapitre 8 : Comparaison et choix d'un framework frontend](#chapitre-8--comparaison-et-choix-dun-framework-frontend)
5. [Partie II — Le Backend](#partie-ii--le-backend)
   - [Chapitre 9 : Node.js — JavaScript côté serveur](#chapitre-9--nodejs--javascript-côté-serveur)
   - [Chapitre 10 : Express.js — Le framework backend de référence](#chapitre-10--expressjs--le-framework-backend-de-référence)
   - [Chapitre 11 : API RESTful — Conception et implémentation](#chapitre-11--api-restful--conception-et-implémentation)
   - [Chapitre 12 : Connexion à une base de données](#chapitre-12--connexion-à-une-base-de-données)
   - [Chapitre 13 : Authentification et sécurité](#chapitre-13--authentification-et-sécurité)
   - [Chapitre 14 : Les frameworks backend avancés](#chapitre-14--les-frameworks-backend-avancés)
6. [Partie III — Fullstack et écosystème](#partie-iii--fullstack-et-écosystème)
   - [Chapitre 15 : Next.js et Nuxt.js — Le rendu côté serveur](#chapitre-15--nextjs-et-nuxtjs--le-rendu-côté-serveur)
   - [Chapitre 16 : Projet intégrateur fullstack](#chapitre-16--projet-intégrateur-fullstack)
7. [Conclusion générale et perspectives](#conclusion-générale-et-perspectives)
8. [Bibliographie et ressources](#bibliographie-et-ressources)

---

## 1. Introduction générale

### 1.1 Contexte et motivation

Le développement web a profondément évolué depuis les premières pages HTML statiques des années 1990. Aujourd'hui, les applications web sont devenues aussi complexes et riches que les applications de bureau traditionnelles. Des services comme Gmail, Trello, Spotify ou Netflix sont des applications web à part entière, offrant des interfaces interactives et réactives.

Cette évolution a été rendue possible grâce à un langage de programmation : **JavaScript**. Initialement conçu en 1995 par Brendan Eich pour ajouter de l'interactivité aux pages web dans le navigateur Netscape, JavaScript est devenu le langage le plus utilisé au monde. Sa particularité unique est de fonctionner à la fois **côté client** (dans le navigateur) et **côté serveur** (grâce à Node.js), ce qui permet de construire des applications complètes avec un seul langage.

Cependant, écrire des applications complexes en JavaScript pur (dit « vanilla ») devient rapidement ingérable : le code devient difficile à organiser, à maintenir et à faire évoluer. C'est précisément pour répondre à ce problème que les **frameworks** et **bibliothèques** JavaScript ont été créés.

### 1.2 Objectifs du cours

À l'issue de ce cours, vous serez capable de :

- Comprendre ce qu'est un framework JavaScript et pourquoi il est nécessaire dans le développement moderne.
- Maîtriser les concepts fondamentaux du développement frontend avec les frameworks React, Vue et Angular.
- Développer des API côté serveur avec Node.js et Express.js.
- Connecter une application à une base de données.
- Mettre en œuvre des mécanismes d'authentification et de sécurité.
- Réaliser un projet fullstack complet en JavaScript.

### 1.3 Organisation du cours

Le cours est organisé en trois grandes parties qui suivent une progression logique :

- **Partie I — Frontend** : Vous apprendrez à construire des interfaces utilisateur modernes, interactives et performantes.
- **Partie II — Backend** : Vous découvrirez comment créer des serveurs, des API et gérer les données côté serveur.
- **Partie III — Fullstack** : Vous assemblerez les deux parties pour construire une application complète.

---

## 2. Rappels JavaScript essentiels (ES6+)

Avant d'aborder les frameworks, il est indispensable de maîtriser les fonctionnalités modernes de JavaScript introduites depuis ECMAScript 2015 (ES6). Ces fonctionnalités sont massivement utilisées dans tous les frameworks.

### 2.1 Déclarations de variables : `let` et `const`

Avant ES6, on utilisait uniquement `var` pour déclarer des variables. Désormais, on préfère `let` et `const` qui offrent une portée de bloc (block scope) plus prévisible.

```javascript
// var a une portée de fonction (function scope) — à éviter
var nom = "Alice";

// let a une portée de bloc — utilisable quand la valeur change
let age = 25;
age = 26; // OK : réassignation autorisée

// const a une portée de bloc — la référence ne peut pas être réassignée
const PI = 3.14159;
// PI = 3.14; // ERREUR : réassignation impossible

// Attention : const ne rend pas l'objet immuable
const etudiant = { nom: "Bob", age: 22 };
etudiant.age = 23; // OK : on modifie une propriété, pas la référence
```

**Règle pratique :** Utilisez toujours `const` par défaut. N'utilisez `let` que lorsque vous avez réellement besoin de réassigner la variable. N'utilisez jamais `var` dans du code moderne.

### 2.2 Fonctions fléchées (Arrow Functions)

Les fonctions fléchées offrent une syntaxe plus concise et un comportement spécifique du mot-clé `this` (il conserve le `this` du contexte englobant).

```javascript
// Fonction classique
function addition(a, b) {
  return a + b;
}

// Fonction fléchée — forme complète
const addition = (a, b) => {
  return a + b;
};

// Fonction fléchée — forme raccourcie (retour implicite)
const addition = (a, b) => a + b;

// Avec un seul paramètre, les parenthèses sont optionnelles
const doubler = x => x * 2;

// Utilisation courante avec les méthodes de tableau
const nombres = [1, 2, 3, 4, 5];
const pairs = nombres.filter(n => n % 2 === 0);       // [2, 4]
const doubles = nombres.map(n => n * 2);               // [2, 4, 6, 8, 10]
const somme = nombres.reduce((acc, n) => acc + n, 0);  // 15
```

### 2.3 Déstructuration (Destructuring)

La déstructuration permet d'extraire des valeurs d'objets ou de tableaux de manière élégante.

```javascript
// Déstructuration d'objet
const etudiant = {
  nom: "Alice",
  age: 22,
  filiere: "Informatique",
  universite: "Université de Mahajanga"
};

// Au lieu de : const nom = etudiant.nom; const age = etudiant.age;
const { nom, age, filiere } = etudiant;
console.log(nom);     // "Alice"
console.log(filiere); // "Informatique"

// Renommage lors de la déstructuration
const { nom: nomEtudiant, age: ageEtudiant } = etudiant;

// Valeur par défaut
const { note = 0 } = etudiant; // note vaudra 0 car elle n'existe pas

// Déstructuration de tableau
const couleurs = ["rouge", "vert", "bleu"];
const [premiere, deuxieme, troisieme] = couleurs;
console.log(premiere); // "rouge"

// Ignorer des éléments
const [, , derniere] = couleurs;
console.log(derniere); // "bleu"
```

### 2.4 Opérateur spread (`...`) et rest

L'opérateur `...` (trois points) sert à deux choses selon le contexte.

```javascript
// SPREAD : « étaler » les éléments d'un tableau ou d'un objet

// Copie superficielle d'un tableau
const original = [1, 2, 3];
const copie = [...original];           // [1, 2, 3]
const etendu = [...original, 4, 5];    // [1, 2, 3, 4, 5]

// Fusion de tableaux
const a = [1, 2];
const b = [3, 4];
const fusion = [...a, ...b]; // [1, 2, 3, 4]

// Copie et modification d'objets (très utilisé dans React et Vue)
const config = { theme: "dark", langue: "fr" };
const nouvelleConfig = { ...config, langue: "en" }; 
// { theme: "dark", langue: "en" }

// REST : collecter le « reste » des arguments
function journaliser(premier, ...autres) {
  console.log("Premier :", premier);
  console.log("Autres :", autres);
}
journaliser("A", "B", "C", "D");
// Premier : A
// Autres : ["B", "C", "D"]
```

### 2.5 Template literals (Littéraux de gabarit)

```javascript
const nom = "Alice";
const age = 22;

// Avant ES6
const message = "Bonjour, je suis " + nom + " et j'ai " + age + " ans.";

// Avec les template literals (backticks `)
const message = `Bonjour, je suis ${nom} et j'ai ${age} ans.`;

// Multiligne
const html = `
  <div class="carte">
    <h2>${nom}</h2>
    <p>Âge : ${age}</p>
  </div>
`;

// Expressions dans les interpolations
const prix = 1500;
const tva = 0.2;
console.log(`Prix TTC : ${prix * (1 + tva)} Ar`); // "Prix TTC : 1800 Ar"
```

### 2.6 Modules (import / export)

Les modules permettent de découper le code en fichiers distincts et réutilisables. C'est le fondement de l'architecture de tout framework.

```javascript
// ===== fichier : mathUtils.js =====

// Export nommé (on peut en avoir plusieurs par fichier)
export const PI = 3.14159;

export function carre(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

// Export par défaut (un seul par fichier)
export default function addition(a, b) {
  return a + b;
}

// ===== fichier : main.js =====

// Import de l'export par défaut
import addition from './mathUtils.js';

// Import des exports nommés
import { PI, carre, cube } from './mathUtils.js';

// Import combiné
import addition, { PI, carre } from './mathUtils.js';

// Import avec alias
import { carre as carreDeNombre } from './mathUtils.js';

console.log(addition(3, 4));  // 7
console.log(carre(5));        // 25
console.log(PI);              // 3.14159
```

### 2.7 Promesses et async/await

JavaScript est **asynchrone par nature**. Les Promesses et `async/await` permettent de gérer les opérations qui prennent du temps (appels réseau, lecture de fichiers) sans bloquer l'exécution du programme.

```javascript
// Une Promesse représente une valeur qui sera disponible dans le futur

// Création d'une Promesse
const maPromesse = new Promise((resolve, reject) => {
  const succes = true;
  
  setTimeout(() => {
    if (succes) {
      resolve("Opération réussie !");
    } else {
      reject("Erreur : opération échouée.");
    }
  }, 2000); // Simule un délai de 2 secondes
});

// Consommation avec .then() et .catch()
maPromesse
  .then(resultat => console.log(resultat))   // "Opération réussie !"
  .catch(erreur => console.error(erreur));

// Syntaxe async/await — plus lisible (syntaxe recommandée)
async function recupererDonnees() {
  try {
    const reponse = await fetch('https://api.exemple.com/etudiants');
    
    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }
    
    const donnees = await reponse.json();
    console.log(donnees);
    return donnees;
  } catch (erreur) {
    console.error("Erreur lors de la récupération :", erreur.message);
  }
}

// Appel de la fonction asynchrone
recupererDonnees();
```

**Point clé :** `await` ne peut être utilisé que dans une fonction déclarée avec `async`. Il « met en pause » l'exécution de la fonction jusqu'à ce que la Promesse soit résolue, mais il ne bloque pas le reste du programme.

### 2.8 Méthodes de tableau fonctionnelles

Ces méthodes sont omniprésentes dans les frameworks pour manipuler et afficher des données.

```javascript
const etudiants = [
  { nom: "Alice", note: 16, filiere: "Info" },
  { nom: "Bob", note: 12, filiere: "Math" },
  { nom: "Charlie", note: 18, filiere: "Info" },
  { nom: "Diana", note: 9, filiere: "Info" },
  { nom: "Eve", note: 14, filiere: "Math" },
];

// map() — Transforme chaque élément et retourne un nouveau tableau
const noms = etudiants.map(e => e.nom);
// ["Alice", "Bob", "Charlie", "Diana", "Eve"]

// filter() — Garde uniquement les éléments qui satisfont la condition
const bonsEtudiants = etudiants.filter(e => e.note >= 14);
// [{ nom: "Alice", ... }, { nom: "Charlie", ... }, { nom: "Eve", ... }]

// find() — Retourne le premier élément qui satisfait la condition
const charlie = etudiants.find(e => e.nom === "Charlie");
// { nom: "Charlie", note: 18, filiere: "Info" }

// reduce() — Réduit le tableau à une seule valeur
const moyenneGenerale = etudiants.reduce((acc, e) => acc + e.note, 0) / etudiants.length;
// 13.8

// some() — Vérifie si AU MOINS UN élément satisfait la condition
const aDesEchecs = etudiants.some(e => e.note < 10); // true

// every() — Vérifie si TOUS les éléments satisfont la condition
const tousReussis = etudiants.every(e => e.note >= 10); // false

// Chaînage de méthodes — très puissant
const nomsInfoReussis = etudiants
  .filter(e => e.filiere === "Info")
  .filter(e => e.note >= 10)
  .map(e => e.nom)
  .sort();
// ["Alice", "Charlie"]
```

---

## 3. Qu'est-ce qu'un framework JavaScript ?

### 3.1 Définition

Un **framework** (cadriciel en français) est un ensemble structuré de code, de conventions et d'outils qui fournit un cadre de travail pour développer des applications. Il impose une architecture et des bonnes pratiques, permettant au développeur de se concentrer sur la logique métier plutôt que sur la plomberie technique.

La distinction entre **framework** et **bibliothèque** (library) est importante :

- **Bibliothèque** : Vous appelez le code de la bibliothèque quand vous en avez besoin. Vous gardez le contrôle du flux d'exécution. Exemple : jQuery, Lodash, React (techniquement).
- **Framework** : Le framework appelle votre code. C'est lui qui contrôle le flux d'exécution et vous fournit des points d'extension. Exemple : Angular, Vue.js, Express.js.

Ce principe s'appelle l'**inversion de contrôle** (Inversion of Control — IoC). Dans un framework, c'est le framework qui orchestre l'application ; votre code s'insère dans les emplacements prévus à cet effet.

> **Note :** React est techniquement une bibliothèque (il gère uniquement la vue), mais il est souvent considéré comme un framework car son écosystème (React Router, Redux, Next.js) couvre tous les aspects du développement.

### 3.2 Pourquoi utiliser un framework ?

Imaginez que vous devez construire une maison. Vous pourriez fabriquer chaque brique, chaque clou et chaque outil vous-même, ou vous pourriez utiliser des matériaux et outils standards. Un framework, c'est l'équivalent de ces matériaux et outils standards dans le développement web.

Les avantages concrets sont les suivants :

- **Productivité accrue** : Le framework gère les tâches répétitives (routage, gestion d'état, manipulation du DOM) pour que vous puissiez vous concentrer sur votre application.
- **Maintenabilité** : L'architecture imposée permet à n'importe quel développeur connaissant le framework de comprendre rapidement le code.
- **Performance** : Les frameworks modernes utilisent des techniques sophistiquées (DOM virtuel, compilation, lazy loading) pour optimiser les performances.
- **Écosystème** : Chaque framework dispose de milliers de bibliothèques complémentaires, de documentation abondante et d'une communauté active.
- **Sécurité** : Les frameworks intègrent des protections contre les vulnérabilités courantes (XSS, CSRF, injection).

### 3.3 Panorama de l'écosystème JavaScript

Voici une vue d'ensemble des principaux frameworks et bibliothèques, classés par domaine.

**Frontend (interface utilisateur) :**

| Outil | Type | Créateur | Première version | Philosophie |
|-------|------|----------|-----------------|-------------|
| React | Bibliothèque | Meta (Facebook) | 2013 | Composants déclaratifs, DOM virtuel |
| Vue.js | Framework progressif | Evan You | 2014 | Simplicité, adoption incrémentale |
| Angular | Framework complet | Google | 2016 (v2+) | Plateforme complète, TypeScript natif |
| Svelte | Compilateur | Rich Harris | 2016 | Compilation, pas de runtime |

**Backend (côté serveur) :**

| Outil | Type | Fondement | Philosophie |
|-------|------|-----------|-------------|
| Node.js | Environnement d'exécution | Moteur V8 de Chrome | JavaScript côté serveur |
| Express.js | Framework minimaliste | Node.js | Simplicité, flexibilité |
| NestJS | Framework structuré | Node.js + TypeScript | Architecture Angular-like |
| Fastify | Framework performant | Node.js | Vitesse, schéma JSON |

**Fullstack (frontend + backend intégrés) :**

| Outil | Basé sur | Particularité |
|-------|----------|---------------|
| Next.js | React | SSR, SSG, API Routes |
| Nuxt.js | Vue.js | SSR, SSG, auto-import |

### 3.4 Le concept de SPA (Single Page Application)

La plupart des frameworks frontend modernes construisent des **SPA** (Applications à Page Unique). Contrairement aux sites web traditionnels où chaque lien déclenche le chargement complet d'une nouvelle page depuis le serveur, une SPA charge une seule page HTML initiale, puis met à jour dynamiquement le contenu grâce à JavaScript.

**Fonctionnement d'un site traditionnel (Multi-Page Application) :**

```
Utilisateur clique → Requête HTTP au serveur → Serveur génère le HTML complet
→ Navigateur recharge toute la page → Affichage
```

**Fonctionnement d'une SPA :**

```
Utilisateur clique → JavaScript intercepte le clic → Requête AJAX/Fetch au serveur
→ Serveur renvoie uniquement les données (JSON) → JavaScript met à jour la partie
concernée de la page → Aucun rechargement complet
```

Les avantages d'une SPA sont une expérience utilisateur fluide (pas de rechargement), des transitions rapides entre les vues, et une séparation nette entre le frontend et le backend (communication via API). L'inconvénient principal est un premier chargement plus lent (tout le JavaScript doit être téléchargé) et des défis pour le référencement (SEO) — problèmes que les frameworks fullstack comme Next.js résolvent.

---

# Partie I — Le Frontend

---

## Chapitre 4 : Les concepts fondamentaux du frontend moderne

Avant de plonger dans un framework spécifique, comprenons les concepts communs à tous les frameworks frontend modernes. Ces concepts constituent le vocabulaire que vous retrouverez dans React, Vue et Angular.

### 4.1 Les composants

Un **composant** est une unité autonome et réutilisable de l'interface utilisateur. C'est le concept le plus important du développement frontend moderne.

Pensez à un composant comme à un bloc LEGO : chaque pièce a une forme, une couleur et un rôle précis. On les assemble pour créer des structures complexes. De la même manière, un composant encapsule son propre HTML (structure), CSS (style) et JavaScript (comportement).

```
Page d'accueil
├── Composant Header
│   ├── Composant Logo
│   └── Composant Navigation
│       ├── Composant LienNav ("Accueil")
│       ├── Composant LienNav ("Cours")
│       └── Composant LienNav ("Contact")
├── Composant ContenuPrincipal
│   ├── Composant CarteEtudiant (Alice)
│   ├── Composant CarteEtudiant (Bob)
│   └── Composant CarteEtudiant (Charlie)
└── Composant Footer
```

Chaque `CarteEtudiant` est le même composant réutilisé trois fois avec des données différentes.

### 4.2 Les props (propriétés)

Les **props** sont des données transmises d'un composant parent à un composant enfant. Elles sont **en lecture seule** : le composant enfant ne doit jamais modifier les props qu'il reçoit.

C'est comparable aux paramètres d'une fonction : le parent appelle le composant enfant en lui passant des données.

```
[Parent : ListeEtudiants]  ──props { nom, note }──▶  [Enfant : CarteEtudiant]
```

### 4.3 L'état (state)

L'**état** représente les données internes d'un composant qui peuvent changer au fil du temps. Quand l'état change, le framework met automatiquement à jour l'affichage. C'est ce qu'on appelle la **réactivité**.

La différence entre props et state est fondamentale :

| Caractéristique | Props | State |
|-----------------|-------|-------|
| Origine | Vient du parent | Interne au composant |
| Modification | Lecture seule | Modifiable |
| Responsabilité | Le parent contrôle | Le composant lui-même contrôle |
| Mise à jour | Déclenche un re-rendu si changement | Déclenche un re-rendu si changement |

### 4.4 Le cycle de vie des composants

Chaque composant passe par des phases au cours de son existence. Comprendre ce cycle de vie est essentiel pour savoir quand effectuer certaines opérations (charger des données, nettoyer des ressources).

```
CRÉATION (Mounting)
  │  Le composant est créé et inséré dans le DOM.
  │  C'est ici qu'on charge les données initiales (appels API).
  ▼
MISE À JOUR (Updating)
  │  Les props ou le state changent, le composant se re-rend.
  │  C'est ici qu'on réagit aux changements de données.
  ▼
DESTRUCTION (Unmounting)
  │  Le composant est retiré du DOM.
  │  C'est ici qu'on nettoie (timers, abonnements, connexions).
  ▼
FIN
```

### 4.5 Le DOM virtuel

Le **DOM** (Document Object Model) est la représentation en mémoire de la structure HTML de la page. Manipuler directement le DOM réel est coûteux en performances car chaque modification déclenche un recalcul du rendu par le navigateur.

Le **DOM virtuel** est une technique utilisée par React et Vue : au lieu de modifier directement le DOM réel, le framework maintient une copie légère du DOM en mémoire (le DOM virtuel). Quand l'état change, le framework crée un nouveau DOM virtuel, le compare avec l'ancien (algorithme de « diffing »), identifie les différences minimales, puis applique uniquement ces changements au DOM réel.

```
État change → Nouveau DOM virtuel → Comparaison (diff) → Modifications minimales → DOM réel mis à jour
```

### 4.6 Le data binding (liaison de données)

Le **data binding** établit un lien entre les données JavaScript et l'interface HTML.

- **One-way binding** (liaison unidirectionnelle) : Les données vont dans un seul sens, du code vers la vue. Si une variable change dans le code, la vue se met à jour, mais pas l'inverse. C'est l'approche de React.
- **Two-way binding** (liaison bidirectionnelle) : Les données vont dans les deux sens. Si l'utilisateur tape dans un champ de texte, la variable JavaScript se met à jour automatiquement, et inversement. C'est l'approche d'Angular et Vue (avec `v-model`).

---

## Chapitre 5 : React.js — La bibliothèque de composants

### 5.1 Présentation

React a été créé par Jordan Walke chez Facebook en 2013 pour résoudre les problèmes de complexité de l'interface du réseau social. Aujourd'hui, React est la bibliothèque frontend la plus populaire au monde, utilisée par Facebook, Instagram, Netflix, Airbnb, Uber et des millions d'autres projets.

Les principes fondamentaux de React sont au nombre de trois :

1. **Déclaratif** : Vous décrivez *ce que* l'interface doit afficher, et React se charge du *comment*.
2. **Composants** : L'interface est décomposée en composants réutilisables.
3. **Unidirectionnel** : Les données circulent du parent vers l'enfant (one-way data flow).

### 5.2 Installation et création d'un projet

Pour créer un nouveau projet React, l'outil officiel recommandé est **Vite** (prononcé « vite », c'est un outil français !).

```bash
# Prérequis : Node.js (version 18+) et npm installés
# Vérifiez votre installation :
node --version   # doit afficher v18.x.x ou supérieur
npm --version    # doit afficher 9.x.x ou supérieur

# Créer un nouveau projet React avec Vite
npm create vite@latest mon-app-react -- --template react

# Se déplacer dans le dossier du projet
cd mon-app-react

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le terminal affichera une URL comme http://localhost:5173
# Ouvrez-la dans votre navigateur
```

Structure du projet créé :

```
mon-app-react/
├── node_modules/        # Dépendances installées (ne pas toucher)
├── public/              # Fichiers statiques (images, favicon)
├── src/                 # Code source de l'application
│   ├── App.css          # Styles du composant App
│   ├── App.jsx          # Composant principal
│   ├── index.css        # Styles globaux
│   └── main.jsx         # Point d'entrée de l'application
├── index.html           # Page HTML unique (SPA)
├── package.json         # Configuration du projet et dépendances
└── vite.config.js       # Configuration de Vite
```

### 5.3 JSX — HTML dans JavaScript

**JSX** (JavaScript XML) est une extension syntaxique qui permet d'écrire du HTML directement dans le code JavaScript. Ce n'est pas du HTML standard — c'est du sucre syntaxique qui est transformé en appels de fonctions JavaScript par le compilateur.

```jsx
// Ceci est du JSX :
const element = <h1 className="titre">Bonjour, Monde !</h1>;

// Le compilateur le transforme en :
const element = React.createElement('h1', { className: 'titre' }, 'Bonjour, Monde !');
```

Règles importantes du JSX :

```jsx
// 1. Un seul élément racine (utiliser un Fragment <> si nécessaire)
// ❌ INCORRECT
return (
  <h1>Titre</h1>
  <p>Paragraphe</p>
);

// ✅ CORRECT — avec une div englobante
return (
  <div>
    <h1>Titre</h1>
    <p>Paragraphe</p>
  </div>
);

// ✅ CORRECT — avec un Fragment (ne crée pas de nœud DOM supplémentaire)
return (
  <>
    <h1>Titre</h1>
    <p>Paragraphe</p>
  </>
);

// 2. Les expressions JavaScript s'insèrent avec des accolades { }
const nom = "Alice";
return <h1>Bonjour, {nom} !</h1>;

// 3. « class » devient « className » (class est un mot réservé en JS)
return <div className="conteneur">...</div>;

// 4. « for » devient « htmlFor »
return <label htmlFor="email">Email :</label>;

// 5. Le style inline s'écrit avec un objet JavaScript
return <div style={{ color: 'blue', fontSize: '18px', marginTop: '10px' }}>...</div>;

// 6. Toutes les balises doivent être fermées, y compris les auto-fermantes
return <img src="photo.jpg" alt="Photo" />;  // noter le /
```

### 5.4 Composants fonctionnels

En React moderne, tous les composants sont des **fonctions** qui retournent du JSX. Les composants basés sur des classes existent mais ne sont plus recommandés pour le nouveau code.

```jsx
// ===== fichier : src/components/Salutation.jsx =====

// Un composant fonctionnel simple
// Convention : le nom commence toujours par une MAJUSCULE
function Salutation() {
  return (
    <div>
      <h2>Bienvenue sur notre plateforme !</h2>
      <p>Nous sommes ravis de vous accueillir.</p>
    </div>
  );
}

// Export pour pouvoir l'utiliser dans d'autres fichiers
export default Salutation;

// ===== fichier : src/App.jsx =====

import Salutation from './components/Salutation';

function App() {
  return (
    <div>
      <h1>Mon Application</h1>
      <Salutation />    {/* Utilisation du composant */}
      <Salutation />    {/* Réutilisation — le composant apparaît deux fois */}
    </div>
  );
}

export default App;
```

### 5.5 Props — Passer des données aux composants

Les props permettent de rendre les composants dynamiques et réutilisables.

```jsx
// ===== fichier : src/components/CarteEtudiant.jsx =====

// Les props sont reçues comme paramètre de la fonction
// On utilise la déstructuration pour plus de clarté
function CarteEtudiant({ nom, filiere, note, photo }) {
  // Déterminer le statut selon la note
  const estAdmis = note >= 10;
  
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      backgroundColor: estAdmis ? '#e8f5e9' : '#ffebee'
    }}>
      {/* Affichage conditionnel de l'image */}
      {photo && <img src={photo} alt={nom} style={{ width: '80px', borderRadius: '50%' }} />}
      
      <h3>{nom}</h3>
      <p>Filière : {filiere}</p>
      <p>Note : {note}/20</p>
      <p style={{ fontWeight: 'bold', color: estAdmis ? 'green' : 'red' }}>
        {estAdmis ? '✅ Admis(e)' : '❌ Ajourné(e)'}
      </p>
    </div>
  );
}

export default CarteEtudiant;

// ===== fichier : src/App.jsx =====

import CarteEtudiant from './components/CarteEtudiant';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Liste des étudiants</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <CarteEtudiant nom="Alice Rakoto" filiere="Informatique" note={16} />
        <CarteEtudiant nom="Bob Rabe" filiere="Mathématiques" note={8} />
        <CarteEtudiant nom="Charlie Andria" filiere="Informatique" note={14} />
      </div>
    </div>
  );
}

export default App;
```

### 5.6 State avec le hook `useState`

Le **state** (état local) permet à un composant de gérer des données qui changent au fil du temps. En React, on utilise le hook `useState`.

```jsx
import { useState } from 'react';

function Compteur() {
  // useState retourne un tableau de 2 éléments :
  // [1] La valeur actuelle de l'état
  // [2] Une fonction pour modifier cet état
  const [compteur, setCompteur] = useState(0); // 0 est la valeur initiale
  
  // IMPORTANT : Ne JAMAIS modifier l'état directement !
  // ❌ compteur = compteur + 1;     // Ne déclenchera PAS de re-rendu
  // ✅ setCompteur(compteur + 1);   // Déclenche un re-rendu

  return (
    <div>
      <h2>Compteur : {compteur}</h2>
      <button onClick={() => setCompteur(compteur + 1)}>
        Incrémenter (+1)
      </button>
      <button onClick={() => setCompteur(compteur - 1)}>
        Décrémenter (-1)
      </button>
      <button onClick={() => setCompteur(0)}>
        Réinitialiser
      </button>
    </div>
  );
}

export default Compteur;
```

Exemple plus complet — un formulaire d'inscription :

```jsx
import { useState } from 'react';

function FormulaireInscription() {
  // Chaque champ du formulaire a son propre état
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    filiere: 'informatique',
    accepteConditions: false
  });
  
  const [soumis, setSoumis] = useState(false);
  const [erreurs, setErreurs] = useState({});

  // Gestionnaire générique pour tous les champs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,                                    // Copie de l'état précédent
      [name]: type === 'checkbox' ? checked : value  // Mise à jour du champ concerné
    }));
  };

  // Validation du formulaire
  const valider = () => {
    const nouvellesErreurs = {};
    if (!formData.nom.trim()) nouvellesErreurs.nom = "Le nom est requis.";
    if (!formData.email.includes('@')) nouvellesErreurs.email = "Email invalide.";
    if (!formData.accepteConditions) nouvellesErreurs.conditions = "Vous devez accepter.";
    return nouvellesErreurs;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const nouvellesErreurs = valider();
    
    if (Object.keys(nouvellesErreurs).length === 0) {
      setSoumis(true);
      console.log("Données soumises :", formData);
    } else {
      setErreurs(nouvellesErreurs);
    }
  };

  // Affichage conditionnel après soumission
  if (soumis) {
    return (
      <div style={{ padding: '20px', backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
        <h2>Inscription réussie !</h2>
        <p>Bienvenue, {formData.nom} !</p>
        <p>Un email de confirmation a été envoyé à {formData.email}.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Inscription</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="nom">Nom complet :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        />
        {erreurs.nom && <span style={{ color: 'red', fontSize: '14px' }}>{erreurs.nom}</span>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        />
        {erreurs.email && <span style={{ color: 'red', fontSize: '14px' }}>{erreurs.email}</span>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="filiere">Filière :</label>
        <select
          id="filiere"
          name="filiere"
          value={formData.filiere}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        >
          <option value="informatique">Informatique</option>
          <option value="mathematiques">Mathématiques</option>
          <option value="physique">Physique</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            name="accepteConditions"
            checked={formData.accepteConditions}
            onChange={handleChange}
          />
          {' '}J'accepte les conditions d'utilisation
        </label>
        {erreurs.conditions && <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{erreurs.conditions}</span>}
      </div>

      <button
        onClick={handleSubmit}
        style={{
          width: '100%', padding: '10px',
          backgroundColor: '#1976d2', color: 'white',
          border: 'none', borderRadius: '4px', cursor: 'pointer'
        }}
      >
        S'inscrire
      </button>
    </div>
  );
}

export default FormulaireInscription;
```

### 5.7 Le hook `useEffect` — Effets de bord

`useEffect` permet d'exécuter du code en réaction à des événements du cycle de vie du composant : après le premier rendu, après chaque mise à jour, ou lors du démontage.

```jsx
import { useState, useEffect } from 'react';

function ListeUtilisateurs() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  // useEffect avec un tableau de dépendances vide [] 
  // → s'exécute UNE SEULE FOIS après le premier rendu (équivalent de componentDidMount)
  useEffect(() => {
    async function chargerDonnees() {
      try {
        const reponse = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!reponse.ok) {
          throw new Error('Erreur réseau');
        }
        
        const donnees = await reponse.json();
        setUtilisateurs(donnees);
      } catch (err) {
        setErreur(err.message);
      } finally {
        setChargement(false);
      }
    }
    
    chargerDonnees();
  }, []); // ← Tableau de dépendances vide = exécution au montage uniquement

  // Gestion des différents états d'affichage
  if (chargement) return <p>Chargement en cours...</p>;
  if (erreur) return <p style={{ color: 'red' }}>Erreur : {erreur}</p>;

  return (
    <div>
      <h2>Utilisateurs ({utilisateurs.length})</h2>
      <ul>
        {utilisateurs.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeUtilisateurs;
```

Les trois formes de `useEffect` :

```jsx
// 1. Sans tableau de dépendances → s'exécute après CHAQUE rendu
useEffect(() => {
  console.log("Rendu effectué");
});

// 2. Avec tableau vide → s'exécute UNE FOIS au montage
useEffect(() => {
  console.log("Composant monté");
}, []);

// 3. Avec dépendances → s'exécute quand une dépendance change
useEffect(() => {
  console.log(`Le compteur vaut maintenant : ${compteur}`);
}, [compteur]); // Se déclenche quand 'compteur' change

// 4. Avec fonction de nettoyage (cleanup)
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);
  
  // La fonction retournée est appelée au démontage du composant
  return () => {
    clearInterval(timer); // Nettoyage pour éviter les fuites de mémoire
  };
}, []);
```

### 5.8 Rendu conditionnel et listes

```jsx
function TableauDeBord({ utilisateur, notifications }) {
  return (
    <div>
      {/* Condition avec && (ET logique) */}
      {utilisateur && <h1>Bonjour, {utilisateur.nom} !</h1>}
      
      {/* Condition ternaire */}
      {utilisateur 
        ? <p>Vous êtes connecté.</p> 
        : <p>Veuillez vous connecter.</p>
      }
      
      {/* Rendu d'une liste avec map() */}
      {/* IMPORTANT : chaque élément d'une liste doit avoir une prop "key" unique */}
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>Aucune notification.</p>
      ) : (
        <ul>
          {notifications.map(notif => (
            <li key={notif.id} style={{
              color: notif.lue ? 'gray' : 'black',
              fontWeight: notif.lue ? 'normal' : 'bold'
            }}>
              {notif.message} — {new Date(notif.date).toLocaleDateString('fr-FR')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### 5.9 Communication enfant vers parent

Les données descendent via les props, mais comment un enfant communique-t-il avec son parent ? En passant une **fonction callback** en prop.

```jsx
import { useState } from 'react';

// Composant enfant
function FiltreFiliere({ filiereActive, onChangerFiliere }) {
  const filieres = ['Toutes', 'Informatique', 'Mathématiques', 'Physique'];
  
  return (
    <div style={{ marginBottom: '20px' }}>
      {filieres.map(filiere => (
        <button
          key={filiere}
          onClick={() => onChangerFiliere(filiere)}  // Appelle la fonction du parent
          style={{
            padding: '8px 16px',
            margin: '0 4px',
            backgroundColor: filiereActive === filiere ? '#1976d2' : '#e0e0e0',
            color: filiereActive === filiere ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {filiere}
        </button>
      ))}
    </div>
  );
}

// Composant parent
function PageEtudiants() {
  const [filiere, setFiliere] = useState('Toutes');
  
  const etudiants = [
    { id: 1, nom: "Alice", filiere: "Informatique", note: 16 },
    { id: 2, nom: "Bob", filiere: "Mathématiques", note: 12 },
    { id: 3, nom: "Charlie", filiere: "Informatique", note: 14 },
    { id: 4, nom: "Diana", filiere: "Physique", note: 11 },
  ];
  
  const etudiantsFiltres = filiere === 'Toutes' 
    ? etudiants 
    : etudiants.filter(e => e.filiere === filiere);

  return (
    <div>
      <h1>Gestion des étudiants</h1>
      {/* On passe la fonction setFiliere en prop */}
      <FiltreFiliere filiereActive={filiere} onChangerFiliere={setFiliere} />
      
      <p>{etudiantsFiltres.length} étudiant(s) affiché(s)</p>
      <ul>
        {etudiantsFiltres.map(e => (
          <li key={e.id}>{e.nom} — {e.filiere} — {e.note}/20</li>
        ))}
      </ul>
    </div>
  );
}

export default PageEtudiants;
```

### 5.10 React Router — Navigation dans une SPA

React Router est la bibliothèque standard pour gérer la navigation entre les différentes « pages » d'une application React.

```bash
# Installation
npm install react-router-dom
```

```jsx
// ===== fichier : src/App.jsx =====

import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

// Pages (composants)
function Accueil() {
  return <div><h2>Page d'accueil</h2><p>Bienvenue sur notre application !</p></div>;
}

function Etudiants() {
  return <div><h2>Liste des étudiants</h2><p>Ici s'affichera la liste.</p></div>;
}

function APropos() {
  return <div><h2>À propos</h2><p>Application de gestion universitaire.</p></div>;
}

function PageNonTrouvee() {
  return <div><h2>404 — Page non trouvée</h2><p>Cette page n'existe pas.</p></div>;
}

// Barre de navigation
function BarreNavigation() {
  const styleActif = { fontWeight: 'bold', color: '#1976d2' };
  
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f5f5f5', marginBottom: '20px' }}>
      {/* NavLink ajoute automatiquement une classe "active" au lien courant */}
      <NavLink to="/" style={({ isActive }) => isActive ? styleActif : {}}>
        Accueil
      </NavLink>
      {' | '}
      <NavLink to="/etudiants" style={({ isActive }) => isActive ? styleActif : {}}>
        Étudiants
      </NavLink>
      {' | '}
      <NavLink to="/a-propos" style={({ isActive }) => isActive ? styleActif : {}}>
        À propos
      </NavLink>
    </nav>
  );
}

// Application principale avec le routeur
function App() {
  return (
    <BrowserRouter>
      <BarreNavigation />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/etudiants" element={<Etudiants />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<PageNonTrouvee />} />  {/* Route catch-all */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

---

## Chapitre 6 : Vue.js — Le framework progressif

### 6.1 Présentation

Vue.js a été créé en 2014 par Evan You, un ancien ingénieur de Google qui a voulu prendre les meilleures idées d'Angular et de React pour créer un framework plus simple et accessible. Vue se distingue par sa philosophie **progressive** : vous pouvez l'adopter progressivement, en commençant par l'utiliser pour une seule partie d'une page existante, puis l'étendre à toute l'application.

Les caractéristiques principales de Vue sont sa courbe d'apprentissage douce, son excellent système de réactivité, sa syntaxe intuitive avec les directives, et une documentation considérée comme l'une des meilleures de l'écosystème.

### 6.2 Installation et création d'un projet

```bash
# Créer un nouveau projet Vue avec l'outil officiel create-vue (basé sur Vite)
npm create vue@latest mon-app-vue

# L'outil vous posera des questions interactives :
# ✔ Add TypeScript? → No (pour commencer)
# ✔ Add JSX Support? → No
# ✔ Add Vue Router? → Yes
# ✔ Add Pinia for state management? → Yes
# ✔ Add ESLint? → Yes

cd mon-app-vue
npm install
npm run dev
```

Structure du projet :

```
mon-app-vue/
├── src/
│   ├── assets/          # Ressources statiques (images, CSS)
│   ├── components/      # Composants réutilisables
│   ├── router/          # Configuration du routeur
│   ├── stores/          # Stores Pinia (gestion d'état)
│   ├── views/           # Composants « pages »
│   ├── App.vue          # Composant racine
│   └── main.js          # Point d'entrée
├── index.html
├── package.json
└── vite.config.js
```

### 6.3 Les Single File Components (SFC)

En Vue, chaque composant est défini dans un fichier `.vue` qui contient trois sections : le template (HTML), le script (JavaScript) et le style (CSS).

```vue
<!-- ===== fichier : src/components/CarteEtudiant.vue ===== -->

<template>
  <!-- Section HTML — le template du composant -->
  <div class="carte" :class="{ admis: estAdmis, ajourne: !estAdmis }">
    <h3>{{ nom }}</h3>
    <p>Filière : {{ filiere }}</p>
    <p>Note : {{ note }}/20</p>
    <p class="statut">
      {{ estAdmis ? '✅ Admis(e)' : '❌ Ajourné(e)' }}
    </p>
  </div>
</template>

<script setup>
// Section JavaScript — la logique du composant
// <script setup> est la syntaxe moderne recommandée (Composition API)

import { computed } from 'vue'

// Déclaration des props que ce composant accepte
const props = defineProps({
  nom: {
    type: String,
    required: true
  },
  filiere: {
    type: String,
    required: true
  },
  note: {
    type: Number,
    required: true,
    validator(value) {
      return value >= 0 && value <= 20
    }
  }
})

// Propriété calculée (computed) — se recalcule automatiquement quand ses dépendances changent
const estAdmis = computed(() => props.note >= 10)
</script>

<style scoped>
/* Section CSS — les styles du composant */
/* "scoped" signifie que ces styles ne s'appliquent qu'à CE composant */

.carte {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  transition: transform 0.2s;
}

.carte:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.admis {
  background-color: #e8f5e9;
  border-color: #4caf50;
}

.ajourne {
  background-color: #ffebee;
  border-color: #f44336;
}

.statut {
  font-weight: bold;
  font-size: 1.1em;
}
</style>
```

### 6.4 Les directives Vue

Vue utilise des **directives** — des attributs spéciaux préfixés par `v-` — pour ajouter du comportement réactif au HTML.

```vue
<template>
  <div>
    <!-- v-bind (:) — Liaison d'attribut dynamique -->
    <img :src="urlImage" :alt="description" />
    <a :href="lien" :class="{ actif: estActif }">Lien</a>
    
    <!-- v-if / v-else-if / v-else — Rendu conditionnel -->
    <div v-if="note >= 16">Mention Très Bien</div>
    <div v-else-if="note >= 14">Mention Bien</div>
    <div v-else-if="note >= 12">Mention Assez Bien</div>
    <div v-else-if="note >= 10">Passable</div>
    <div v-else>Ajourné</div>
    
    <!-- v-show — Affiche/cache avec CSS (display: none) -->
    <!-- Contrairement à v-if, l'élément reste dans le DOM -->
    <p v-show="afficherDetails">Détails supplémentaires...</p>
    
    <!-- v-for — Boucle pour afficher une liste -->
    <!-- :key est obligatoire pour aider Vue à optimiser le rendu -->
    <ul>
      <li v-for="etudiant in etudiants" :key="etudiant.id">
        {{ etudiant.nom }} — {{ etudiant.note }}/20
      </li>
    </ul>
    
    <!-- v-for avec index -->
    <ol>
      <li v-for="(etudiant, index) in etudiants" :key="etudiant.id">
        {{ index + 1 }}. {{ etudiant.nom }}
      </li>
    </ol>
    
    <!-- v-on (@) — Écoute d'événements -->
    <button @click="incrementer">Cliquer (+1)</button>
    <button @click="compteur--">Décrémenter (-1)</button>
    <input @keyup.enter="validerFormulaire" />  <!-- Modificateur .enter -->
    
    <!-- v-model — Liaison bidirectionnelle (two-way binding) -->
    <input v-model="recherche" placeholder="Rechercher un étudiant..." />
    <p>Vous cherchez : {{ recherche }}</p>
    
    <!-- v-model avec différents types d'input -->
    <textarea v-model="commentaire"></textarea>
    <select v-model="filiereChoisie">
      <option value="info">Informatique</option>
      <option value="math">Mathématiques</option>
    </select>
    <input type="checkbox" v-model="accepte" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const compteur = ref(0)
const recherche = ref('')
const commentaire = ref('')
const filiereChoisie = ref('info')
const accepte = ref(false)

const etudiants = ref([
  { id: 1, nom: 'Alice', note: 16 },
  { id: 2, nom: 'Bob', note: 12 },
  { id: 3, nom: 'Charlie', note: 8 },
])

function incrementer() {
  compteur.value++   // Avec ref(), on accède à la valeur via .value dans le script
}

function validerFormulaire() {
  console.log('Formulaire validé !')
}
</script>
```

### 6.5 Réactivité avec `ref` et `reactive`

Vue 3 propose deux fonctions principales pour créer des données réactives.

```vue
<script setup>
import { ref, reactive, computed, watch } from 'vue'

// ref() — pour les valeurs primitives (string, number, boolean)
// Dans le <script>, on accède à la valeur avec .value
// Dans le <template>, Vue déballe automatiquement (pas besoin de .value)
const compteur = ref(0)
const nom = ref('Alice')
compteur.value++           // Dans le script : .value obligatoire
// Dans le template : {{ compteur }}  — pas de .value

// reactive() — pour les objets et tableaux
// Pas besoin de .value
const formulaire = reactive({
  nom: '',
  email: '',
  filiere: 'informatique'
})
formulaire.nom = 'Bob'  // Modification directe, pas de .value

// computed() — propriété calculée, se met à jour automatiquement
const longueurNom = computed(() => nom.value.length)
const estValide = computed(() => formulaire.nom.length > 0 && formulaire.email.includes('@'))

// watch() — observer des changements et réagir
watch(compteur, (nouvelleValeur, ancienneValeur) => {
  console.log(`Compteur passé de ${ancienneValeur} à ${nouvelleValeur}`)
})

// Observation profonde d'un objet réactif
watch(
  () => formulaire.nom,
  (nouveauNom) => {
    console.log(`Nom changé : ${nouveauNom}`)
  }
)
</script>
```

### 6.6 Émission d'événements (enfant vers parent)

```vue
<!-- ===== Composant enfant : BarreRecherche.vue ===== -->
<template>
  <div class="barre-recherche">
    <input 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Rechercher..."
    />
    <button @click="$emit('effacer')">Effacer</button>
  </div>
</template>

<script setup>
// Déclaration des props
defineProps({
  modelValue: String
})

// Déclaration des événements émis
defineEmits(['update:modelValue', 'effacer'])
</script>

<!-- ===== Composant parent ===== -->
<template>
  <div>
    <!-- v-model sur un composant personnalisé -->
    <BarreRecherche v-model="termeRecherche" @effacer="termeRecherche = ''" />
    <p>Recherche : {{ termeRecherche }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BarreRecherche from './components/BarreRecherche.vue'

const termeRecherche = ref('')
</script>
```

### 6.7 Vue Router — Navigation

```javascript
// ===== fichier : src/router/index.js =====

import { createRouter, createWebHistory } from 'vue-router'

// Import des composants de pages
import Accueil from '../views/Accueil.vue'
import ListeEtudiants from '../views/ListeEtudiants.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/etudiants',
    name: 'etudiants',
    component: ListeEtudiants
  },
  {
    // Route dynamique avec paramètre
    path: '/etudiant/:id',
    name: 'detail-etudiant',
    // Chargement paresseux (lazy loading) — le composant n'est chargé que quand on visite la route
    component: () => import('../views/DetailEtudiant.vue')
  },
  {
    // Route catch-all pour les pages 404
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/PageNonTrouvee.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

```vue
<!-- ===== fichier : src/App.vue ===== -->
<template>
  <nav>
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/etudiants">Étudiants</RouterLink>
  </nav>
  
  <!-- Les composants de route s'affichent ici -->
  <RouterView />
</template>
```

---

## Chapitre 7 : Angular — Le framework complet

### 7.1 Présentation

Angular est un framework développé et maintenu par Google. Contrairement à React (bibliothèque légère) et Vue (framework progressif), Angular est une **plateforme complète** : elle inclut nativement tout ce dont on a besoin pour une application d'entreprise — routage, formulaires, client HTTP, injection de dépendances, tests, internationalisation.

Angular utilise **TypeScript** comme langage principal (un sur-ensemble de JavaScript qui ajoute le typage statique). Cela peut sembler plus complexe au départ, mais c'est un avantage majeur pour les projets de grande envergure.

### 7.2 Concepts clés propres à Angular

Angular introduit plusieurs concepts architecturaux avancés.

**Les modules (`@NgModule`)** organisent l'application en unités fonctionnelles. Chaque module déclare les composants, directives et services qu'il utilise. Les composants Angular autonomes (standalone) permettent maintenant de se passer de modules dans beaucoup de cas.

**L'injection de dépendances** (DI) est un patron de conception où les dépendances d'un composant lui sont fournies de l'extérieur plutôt que créées en interne. Angular a un système de DI intégré très puissant.

**Les services** encapsulent la logique métier et les appels API. Ils sont partagés entre les composants via l'injection de dépendances.

**Les observables (RxJS)** sont au cœur d'Angular. Au lieu de Promesses, Angular utilise les Observables de la bibliothèque RxJS pour gérer les flux de données asynchrones.

### 7.3 Installation et création d'un projet

```bash
# Installer Angular CLI globalement
npm install -g @angular/cli

# Créer un nouveau projet
ng new mon-app-angular
# Choisir : CSS, activer le routage

cd mon-app-angular

# Lancer le serveur de développement
ng serve
# Accessible sur http://localhost:4200

# Générer un composant
ng generate component components/carte-etudiant
# ou en abrégé :
ng g c components/carte-etudiant

# Générer un service
ng generate service services/etudiant
```

### 7.4 Un composant Angular

```typescript
// ===== fichier : src/app/components/carte-etudiant/carte-etudiant.component.ts =====

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Le décorateur @Component configure le composant
@Component({
  selector: 'app-carte-etudiant',     // La balise HTML pour utiliser ce composant
  standalone: true,                     // Composant autonome (Angular 17+)
  imports: [CommonModule],              // Modules nécessaires
  template: `
    <div class="carte" [ngClass]="{ 'admis': estAdmis, 'ajourne': !estAdmis }">
      <h3>{{ nom }}</h3>
      <p>Filière : {{ filiere }}</p>
      <p>Note : {{ note }}/20</p>
      <p class="statut">
        {{ estAdmis ? '✅ Admis(e)' : '❌ Ajourné(e)' }}
      </p>
    </div>
  `,
  styles: [`
    .carte {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      margin: 8px;
    }
    .admis { background-color: #e8f5e9; }
    .ajourne { background-color: #ffebee; }
    .statut { font-weight: bold; }
  `]
})
export class CarteEtudiantComponent {
  // @Input() déclare une propriété qui sera reçue du parent (équivalent des props)
  @Input() nom: string = '';
  @Input() filiere: string = '';
  @Input() note: number = 0;

  // Propriété calculée (getter)
  get estAdmis(): boolean {
    return this.note >= 10;
  }
}
```

Utilisation dans le composant parent :

```typescript
// ===== fichier : src/app/app.component.ts =====

import { Component } from '@angular/core';
import { CarteEtudiantComponent } from './components/carte-etudiant/carte-etudiant.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CarteEtudiantComponent],
  template: `
    <h1>Gestion des étudiants</h1>
    <div class="grille">
      <!-- Boucle *ngFor pour itérer sur la liste -->
      <app-carte-etudiant
        *ngFor="let etudiant of etudiants"
        [nom]="etudiant.nom"
        [filiere]="etudiant.filiere"
        [note]="etudiant.note"
      />
    </div>
  `
})
export class AppComponent {
  etudiants = [
    { nom: 'Alice Rakoto', filiere: 'Informatique', note: 16 },
    { nom: 'Bob Rabe', filiere: 'Mathématiques', note: 8 },
    { nom: 'Charlie Andria', filiere: 'Informatique', note: 14 },
  ];
}
```

### 7.5 Service et injection de dépendances

```typescript
// ===== fichier : src/app/services/etudiant.service.ts =====

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface TypeScript pour typer les données
export interface Etudiant {
  id: number;
  nom: string;
  filiere: string;
  note: number;
}

// @Injectable rend ce service injectable dans n'importe quel composant
// providedIn: 'root' → une seule instance partagée dans toute l'application (singleton)
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:3000/api/etudiants';

  // HttpClient est injecté automatiquement par Angular
  constructor(private http: HttpClient) {}

  // Les méthodes retournent des Observables (pas des Promesses)
  getTous(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl);
  }

  getParId(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/${id}`);
  }

  creer(etudiant: Omit<Etudiant, 'id'>): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apiUrl, etudiant);
  }

  modifier(id: number, etudiant: Partial<Etudiant>): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/${id}`, etudiant);
  }

  supprimer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

```typescript
// ===== Utilisation du service dans un composant =====

import { Component, OnInit } from '@angular/core';
import { EtudiantService, Etudiant } from '../services/etudiant.service';

@Component({
  selector: 'app-liste-etudiants',
  standalone: true,
  template: `
    <div *ngIf="chargement">Chargement...</div>
    <div *ngIf="erreur" class="erreur">{{ erreur }}</div>
    
    <ul *ngIf="!chargement && !erreur">
      <li *ngFor="let e of etudiants">
        {{ e.nom }} — {{ e.filiere }} — {{ e.note }}/20
      </li>
    </ul>
  `
})
export class ListeEtudiantsComponent implements OnInit {
  etudiants: Etudiant[] = [];
  chargement = true;
  erreur: string | null = null;

  // Le service est injecté via le constructeur
  constructor(private etudiantService: EtudiantService) {}

  // ngOnInit est le hook de cycle de vie appelé après l'initialisation
  ngOnInit(): void {
    this.etudiantService.getTous().subscribe({
      next: (donnees) => {
        this.etudiants = donnees;
        this.chargement = false;
      },
      error: (err) => {
        this.erreur = 'Erreur de chargement';
        this.chargement = false;
      }
    });
  }
}
```

---

## Chapitre 8 : Comparaison et choix d'un framework frontend

### 8.1 Tableau comparatif synthétique

| Critère | React | Vue.js | Angular |
|---------|-------|--------|---------|
| **Type** | Bibliothèque | Framework progressif | Plateforme complète |
| **Langage** | JavaScript/JSX | JavaScript/SFC | TypeScript |
| **Courbe d'apprentissage** | Moyenne | Douce | Raide |
| **Taille du bundle** | ~40 Ko | ~30 Ko | ~150 Ko |
| **DOM virtuel** | Oui | Oui | Non (détection de changements) |
| **Data binding** | Unidirectionnel | Bidirectionnel (v-model) | Bidirectionnel |
| **Écosystème** | Très vaste, fragmenté | Modéré, cohérent | Intégré, complet |
| **Mainteneur** | Meta (Facebook) | Communauté (Evan You) | Google |
| **Adapté pour** | Tout type de projet | Petits à grands projets | Applications d'entreprise |
| **Part de marché** | Dominant | En croissance | Stable |

### 8.2 Critères de choix

Le choix d'un framework dépend du contexte. Pour un **projet personnel ou startup**, React ou Vue conviennent parfaitement grâce à leur flexibilité et leur rapidité de développement. Pour une **application d'entreprise** avec une grande équipe, Angular offre une structure imposée qui facilite la collaboration. Pour un **débutant**, Vue est souvent recommandé pour sa documentation et sa simplicité. Pour le **marché de l'emploi**, React domine largement en nombre d'offres.

---

# Partie II — Le Backend

---

## Chapitre 9 : Node.js — JavaScript côté serveur

### 9.1 Qu'est-ce que Node.js ?

Node.js est un **environnement d'exécution** (runtime) qui permet d'exécuter du JavaScript en dehors du navigateur. Créé en 2009 par Ryan Dahl, il repose sur le moteur **V8** de Google Chrome, le même moteur qui exécute JavaScript dans le navigateur Chrome.

Avant Node.js, JavaScript ne pouvait s'exécuter que dans un navigateur. Le développement côté serveur nécessitait un autre langage (PHP, Java, Python, Ruby). Node.js a changé cette donne : désormais, un développeur peut utiliser JavaScript pour le frontend **et** le backend, réduisant la barrière entre les deux.

### 9.2 Architecture événementielle non bloquante

La caractéristique fondamentale de Node.js est son modèle d'exécution **mono-thread, événementiel et non bloquant** (single-threaded, event-driven, non-blocking I/O).

Pour comprendre ce concept, comparons avec un modèle traditionnel (comme PHP avec Apache) :

**Modèle traditionnel (multi-thread bloquant) :**
```
Client A fait une requête → Serveur crée un Thread A → Thread A attend la base de données... → Réponse
Client B fait une requête → Serveur crée un Thread B → Thread B attend la base de données... → Réponse
Client C fait une requête → Serveur crée un Thread C → ...
// Chaque requête bloque un thread. 10 000 clients = 10 000 threads en mémoire
```

**Modèle Node.js (mono-thread non bloquant) :**
```
Client A fait une requête → Node envoie la requête à la BD (sans attendre) → passe au suivant
Client B fait une requête → Node envoie la requête à la BD (sans attendre) → passe au suivant
Client C fait une requête → ...
BD répond pour Client A → Node envoie la réponse à Client A
// Un seul thread gère des milliers de connexions simultanées
```

Node.js utilise une **boucle d'événements** (Event Loop) qui traite les opérations de manière asynchrone. Les opérations longues (lecture de fichiers, requêtes réseau, accès base de données) sont déléguées au système d'exploitation, et Node.js est notifié quand elles sont terminées.

### 9.3 npm — Le gestionnaire de paquets

**npm** (Node Package Manager) est le gestionnaire de paquets de Node.js et le plus grand registre de bibliothèques open source au monde. Chaque projet Node.js contient un fichier `package.json` qui décrit le projet et ses dépendances.

```bash
# Initialiser un nouveau projet
npm init -y

# Installer une dépendance de production
npm install express

# Installer une dépendance de développement (tests, linting, etc.)
npm install --save-dev nodemon

# Installer globalement (outils en ligne de commande)
npm install -g typescript
```

```json
// package.json — fichier central de tout projet Node.js
{
  "name": "mon-api-universitaire",
  "version": "1.0.0",
  "description": "API pour la gestion universitaire",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.0",
    "jest": "^29.0.0"
  }
}
```

### 9.4 Premier serveur HTTP avec Node.js pur

```javascript
// ===== fichier : server.js =====

// Importation du module http intégré à Node.js
const http = require('http');

// Définition du port
const PORT = 3000;

// Création du serveur
const serveur = http.createServer((requete, reponse) => {
  // requete contient les informations de la requête HTTP
  // reponse permet d'envoyer la réponse au client
  
  console.log(`${requete.method} ${requete.url}`);
  
  // Configuration des en-têtes de la réponse
  reponse.setHeader('Content-Type', 'application/json; charset=utf-8');
  
  // Routage basique
  if (requete.url === '/' && requete.method === 'GET') {
    reponse.statusCode = 200;
    reponse.end(JSON.stringify({ 
      message: 'Bienvenue sur l\'API universitaire !',
      version: '1.0.0'
    }));
  } 
  else if (requete.url === '/etudiants' && requete.method === 'GET') {
    const etudiants = [
      { id: 1, nom: 'Alice Rakoto', filiere: 'Informatique' },
      { id: 2, nom: 'Bob Rabe', filiere: 'Mathématiques' },
    ];
    reponse.statusCode = 200;
    reponse.end(JSON.stringify(etudiants));
  }
  else {
    reponse.statusCode = 404;
    reponse.end(JSON.stringify({ erreur: 'Route non trouvée' }));
  }
});

// Le serveur écoute sur le port spécifié
serveur.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
```

Ce code fonctionne, mais on voit immédiatement le problème : gérer le routage manuellement devient très vite ingérable. C'est pourquoi on utilise un framework comme Express.js.

---

## Chapitre 10 : Express.js — Le framework backend de référence

### 10.1 Présentation

Express.js est le framework backend le plus populaire de l'écosystème Node.js. Créé en 2010 par TJ Holowaychuk, c'est un framework **minimaliste et flexible** qui fournit les outils essentiels pour construire des applications web et des API.

Express simplifie considérablement le développement côté serveur en fournissant un système de routage élégant, un mécanisme de middleware puissant, la gestion des requêtes et réponses HTTP, et la possibilité de servir des fichiers statiques.

### 10.2 Installation et premier serveur

```bash
mkdir mon-api
cd mon-api
npm init -y
npm install express
npm install --save-dev nodemon
```

```javascript
// ===== fichier : src/server.js =====

const express = require('express');

// Création de l'application Express
const app = express();
const PORT = 3000;

// Middleware pour parser le JSON dans le corps des requêtes
app.use(express.json());

// Middleware pour parser les données de formulaires URL-encoded
app.use(express.urlencoded({ extended: true }));

// Route GET sur la racine
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bienvenue sur l\'API universitaire !',
    version: '1.0.0',
    endpoints: {
      etudiants: '/api/etudiants',
      filieres: '/api/filieres'
    }
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});
```

### 10.3 Le concept de Middleware

Un **middleware** est une fonction qui a accès à l'objet requête (`req`), l'objet réponse (`res`), et à la fonction `next()` qui passe le contrôle au middleware suivant. Les middlewares forment une **chaîne de traitement** : chaque requête traverse une série de middlewares avant d'atteindre le gestionnaire de route final.

```
Requête HTTP →  [Middleware 1: Logger]  →  [Middleware 2: Auth]  →  [Route Handler]  → Réponse
```

```javascript
// ===== Exemples de middlewares =====

// 1. Middleware de journalisation (logging) — s'applique à TOUTES les requêtes
app.use((req, res, next) => {
  const debut = Date.now();
  
  // On écoute la fin de la réponse pour calculer la durée
  res.on('finish', () => {
    const duree = Date.now() - debut;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} → ${res.statusCode} (${duree}ms)`);
  });
  
  next(); // IMPORTANT : appeler next() pour passer au middleware suivant
});

// 2. Middleware CORS (Cross-Origin Resource Sharing)
// Permet aux frontends hébergés sur un autre domaine d'accéder à l'API
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173', // URL du frontend Vite
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// 3. Middleware d'authentification personnalisé
function verifierAuthentification(req, res, next) {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ erreur: 'Token d\'authentification requis' });
    // Pas de next() → la chaîne s'arrête ici
  }
  
  try {
    // Vérification du token (simplifié)
    const utilisateur = verifierToken(token);
    req.utilisateur = utilisateur; // On ajoute l'utilisateur à la requête
    next(); // Token valide → on continue
  } catch (err) {
    return res.status(403).json({ erreur: 'Token invalide' });
  }
}

// Application du middleware uniquement sur certaines routes
app.get('/api/profil', verifierAuthentification, (req, res) => {
  res.json({ utilisateur: req.utilisateur });
});
```

### 10.4 Routage

```javascript
// ===== fichier : src/routes/etudiants.js =====

const express = require('express');
const router = express.Router();

// Données en mémoire (en production, on utiliserait une base de données)
let etudiants = [
  { id: 1, nom: 'Alice Rakoto', filiere: 'Informatique', note: 16 },
  { id: 2, nom: 'Bob Rabe', filiere: 'Mathématiques', note: 12 },
  { id: 3, nom: 'Charlie Andria', filiere: 'Informatique', note: 14 },
  { id: 4, nom: 'Diana Razafy', filiere: 'Physique', note: 9 },
];

let prochainId = 5;

// GET /api/etudiants — Récupérer tous les étudiants
// Supporte les filtres par query string : ?filiere=Informatique&noteMin=10
router.get('/', (req, res) => {
  let resultat = [...etudiants];
  
  // Filtrage par filière
  if (req.query.filiere) {
    resultat = resultat.filter(e => 
      e.filiere.toLowerCase() === req.query.filiere.toLowerCase()
    );
  }
  
  // Filtrage par note minimum
  if (req.query.noteMin) {
    resultat = resultat.filter(e => e.note >= parseInt(req.query.noteMin));
  }
  
  res.json({
    total: resultat.length,
    etudiants: resultat
  });
});

// GET /api/etudiants/:id — Récupérer un étudiant par son ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const etudiant = etudiants.find(e => e.id === id);
  
  if (!etudiant) {
    return res.status(404).json({ erreur: `Étudiant avec l'ID ${id} non trouvé` });
  }
  
  res.json(etudiant);
});

// POST /api/etudiants — Créer un nouvel étudiant
router.post('/', (req, res) => {
  const { nom, filiere, note } = req.body;
  
  // Validation des données
  const erreurs = [];
  if (!nom || nom.trim().length === 0) erreurs.push('Le nom est requis.');
  if (!filiere) erreurs.push('La filière est requise.');
  if (note === undefined || note < 0 || note > 20) erreurs.push('La note doit être entre 0 et 20.');
  
  if (erreurs.length > 0) {
    return res.status(400).json({ erreurs });
  }
  
  const nouvelEtudiant = {
    id: prochainId++,
    nom: nom.trim(),
    filiere,
    note: parseFloat(note)
  };
  
  etudiants.push(nouvelEtudiant);
  
  // 201 Created — la ressource a été créée avec succès
  res.status(201).json(nouvelEtudiant);
});

// PUT /api/etudiants/:id — Modifier un étudiant existant (remplacement complet)
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = etudiants.findIndex(e => e.id === id);
  
  if (index === -1) {
    return res.status(404).json({ erreur: `Étudiant avec l'ID ${id} non trouvé` });
  }
  
  const { nom, filiere, note } = req.body;
  
  etudiants[index] = { id, nom, filiere, note: parseFloat(note) };
  
  res.json(etudiants[index]);
});

// DELETE /api/etudiants/:id — Supprimer un étudiant
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = etudiants.findIndex(e => e.id === id);
  
  if (index === -1) {
    return res.status(404).json({ erreur: `Étudiant avec l'ID ${id} non trouvé` });
  }
  
  const supprime = etudiants.splice(index, 1)[0];
  
  res.json({ message: `Étudiant "${supprime.nom}" supprimé avec succès` });
});

module.exports = router;

// ===== fichier : src/server.js — Enregistrement des routes =====

const express = require('express');
const cors = require('cors');
const etudiantsRoutes = require('./routes/etudiants');

const app = express();

app.use(cors());
app.use(express.json());

// Montage du routeur sur le préfixe /api/etudiants
app.use('/api/etudiants', etudiantsRoutes);

// Middleware de gestion des erreurs (toujours en dernier)
app.use((err, req, res, next) => {
  console.error('Erreur serveur :', err.stack);
  res.status(500).json({ erreur: 'Erreur interne du serveur' });
});

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
```

---

## Chapitre 11 : API RESTful — Conception et implémentation

### 11.1 Les principes REST

**REST** (Representational State Transfer) est un style d'architecture pour la conception d'API web. Ce n'est pas un protocole ni un standard, mais un ensemble de contraintes et de bonnes pratiques définies par Roy Fielding dans sa thèse de doctorat en 2000.

Les principes fondamentaux de REST sont les suivants.

**Client-Serveur** : Le client (frontend) et le serveur (backend) sont séparés et communiquent via HTTP. Chacun peut évoluer indépendamment.

**Sans état (Stateless)** : Chaque requête du client contient toute l'information nécessaire. Le serveur ne conserve pas d'état de session entre les requêtes.

**Ressources identifiées par des URI** : Chaque entité (étudiant, cours, note) est une ressource accessible via une URL unique.

**Méthodes HTTP standard** : Les opérations CRUD (Create, Read, Update, Delete) correspondent aux méthodes HTTP.

| Opération | Méthode HTTP | URI | Description |
|-----------|-------------|-----|-------------|
| Créer | POST | `/api/etudiants` | Crée un nouvel étudiant |
| Lire tous | GET | `/api/etudiants` | Récupère la liste des étudiants |
| Lire un | GET | `/api/etudiants/42` | Récupère l'étudiant d'ID 42 |
| Modifier | PUT | `/api/etudiants/42` | Modifie entièrement l'étudiant 42 |
| Modifier partiellement | PATCH | `/api/etudiants/42` | Modifie certains champs de l'étudiant 42 |
| Supprimer | DELETE | `/api/etudiants/42` | Supprime l'étudiant 42 |

### 11.2 Codes de statut HTTP

Les codes de statut indiquent le résultat de la requête. Ils se répartissent en 5 catégories :

| Code | Catégorie | Signification | Utilisation courante |
|------|-----------|---------------|---------------------|
| 200 | Succès | OK | Requête GET ou PUT réussie |
| 201 | Succès | Created | Ressource créée (POST réussi) |
| 204 | Succès | No Content | Suppression réussie (pas de corps de réponse) |
| 400 | Erreur client | Bad Request | Données invalides envoyées par le client |
| 401 | Erreur client | Unauthorized | Authentification requise |
| 403 | Erreur client | Forbidden | Authentifié mais pas autorisé |
| 404 | Erreur client | Not Found | Ressource inexistante |
| 409 | Erreur client | Conflict | Conflit (ex : email déjà utilisé) |
| 422 | Erreur client | Unprocessable Entity | Données valides syntaxiquement mais sémantiquement incorrectes |
| 500 | Erreur serveur | Internal Server Error | Erreur inattendue côté serveur |

### 11.3 Bonnes pratiques de conception d'API REST

```
# Conventions de nommage des routes

# ✅ CORRECT — noms pluriels, tout en minuscules, tirets pour les mots composés
GET    /api/etudiants
GET    /api/etudiants/42
POST   /api/etudiants
GET    /api/etudiants/42/notes            # sous-ressource : notes de l'étudiant 42
GET    /api/annees-universitaires          # tirets, pas de camelCase ni underscore

# ❌ INCORRECT
GET    /api/getEtudiants                  # pas de verbes dans l'URL
GET    /api/etudiant                      # utiliser le pluriel
GET    /api/Etudiants                     # pas de majuscules
GET    /api/etudiants/supprimer/42        # pas de verbes (utiliser DELETE)
```

---

## Chapitre 12 : Connexion à une base de données

### 12.1 MongoDB avec Mongoose

MongoDB est une base de données **NoSQL** orientée documents. Les données sont stockées sous forme de documents JSON (techniquement BSON). **Mongoose** est une bibliothèque ODM (Object Document Mapper) qui facilite l'interaction avec MongoDB depuis Node.js.

```bash
npm install mongoose
```

```javascript
// ===== fichier : src/config/database.js =====

const mongoose = require('mongoose');

const connecterBD = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/universite', {
      // Options recommandées (gérées automatiquement dans les versions récentes)
    });
    console.log('✅ Connecté à MongoDB avec succès');
  } catch (erreur) {
    console.error('❌ Erreur de connexion à MongoDB :', erreur.message);
    process.exit(1); // Arrête le serveur si la BD est inaccessible
  }
};

module.exports = connecterBD;
```

```javascript
// ===== fichier : src/models/Etudiant.js =====

const mongoose = require('mongoose');

// Le schéma définit la structure des documents dans la collection
const schemaEtudiant = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, 'Le nom est obligatoire'],
    trim: true,                    // Supprime les espaces en début/fin
    minlength: [2, 'Le nom doit contenir au moins 2 caractères'],
    maxlength: [100, 'Le nom ne peut pas dépasser 100 caractères']
  },
  email: {
    type: String,
    required: [true, 'L\'email est obligatoire'],
    unique: true,                   // Index unique — pas de doublons
    lowercase: true,                // Convertit en minuscules automatiquement
    match: [/^\S+@\S+\.\S+$/, 'Format d\'email invalide']
  },
  filiere: {
    type: String,
    required: true,
    enum: {
      values: ['Informatique', 'Mathématiques', 'Physique', 'Chimie'],
      message: 'Filière "{VALUE}" non reconnue'
    }
  },
  note: {
    type: Number,
    min: [0, 'La note ne peut pas être négative'],
    max: [20, 'La note ne peut pas dépasser 20'],
    default: 0
  },
  dateInscription: {
    type: Date,
    default: Date.now
  },
  actif: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true  // Ajoute automatiquement createdAt et updatedAt
});

// Propriété virtuelle (non stockée en BD, calculée à la volée)
schemaEtudiant.virtual('estAdmis').get(function() {
  return this.note >= 10;
});

// S'assurer que les virtuels apparaissent dans le JSON
schemaEtudiant.set('toJSON', { virtuals: true });

// Méthode d'instance
schemaEtudiant.methods.getMention = function() {
  if (this.note >= 16) return 'Très Bien';
  if (this.note >= 14) return 'Bien';
  if (this.note >= 12) return 'Assez Bien';
  if (this.note >= 10) return 'Passable';
  return 'Ajourné';
};

// Méthode statique
schemaEtudiant.statics.trouverParFiliere = function(filiere) {
  return this.find({ filiere, actif: true }).sort({ nom: 1 });
};

// Création et export du modèle
// 'Etudiant' → collection 'etudiants' dans MongoDB
const Etudiant = mongoose.model('Etudiant', schemaEtudiant);

module.exports = Etudiant;
```

```javascript
// ===== fichier : src/routes/etudiants.js — version avec MongoDB =====

const express = require('express');
const router = express.Router();
const Etudiant = require('../models/Etudiant');

// GET /api/etudiants — Récupérer tous les étudiants avec filtrage et pagination
router.get('/', async (req, res) => {
  try {
    const { filiere, noteMin, page = 1, limite = 10, tri = 'nom' } = req.query;
    
    // Construction du filtre dynamique
    const filtre = { actif: true };
    if (filiere) filtre.filiere = filiere;
    if (noteMin) filtre.note = { $gte: parseFloat(noteMin) };
    
    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limite);
    
    // Exécution de la requête
    const [etudiants, total] = await Promise.all([
      Etudiant.find(filtre)
        .sort(tri)
        .skip(skip)
        .limit(parseInt(limite)),
      Etudiant.countDocuments(filtre)
    ]);
    
    res.json({
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limite)),
      etudiants
    });
  } catch (erreur) {
    res.status(500).json({ erreur: erreur.message });
  }
});

// GET /api/etudiants/:id
router.get('/:id', async (req, res) => {
  try {
    const etudiant = await Etudiant.findById(req.params.id);
    
    if (!etudiant) {
      return res.status(404).json({ erreur: 'Étudiant non trouvé' });
    }
    
    res.json(etudiant);
  } catch (erreur) {
    // Gestion de l'erreur d'ID invalide (format MongoDB)
    if (erreur.name === 'CastError') {
      return res.status(400).json({ erreur: 'Format d\'ID invalide' });
    }
    res.status(500).json({ erreur: erreur.message });
  }
});

// POST /api/etudiants
router.post('/', async (req, res) => {
  try {
    const etudiant = new Etudiant(req.body);
    const sauvegarde = await etudiant.save();
    res.status(201).json(sauvegarde);
  } catch (erreur) {
    // Erreur de validation Mongoose
    if (erreur.name === 'ValidationError') {
      const messages = Object.values(erreur.errors).map(e => e.message);
      return res.status(400).json({ erreurs: messages });
    }
    // Erreur de doublon (email unique)
    if (erreur.code === 11000) {
      return res.status(409).json({ erreur: 'Cet email est déjà utilisé' });
    }
    res.status(500).json({ erreur: erreur.message });
  }
});

// PUT /api/etudiants/:id
router.put('/:id', async (req, res) => {
  try {
    const etudiant = await Etudiant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // retourne le document modifié + valide les données
    );
    
    if (!etudiant) {
      return res.status(404).json({ erreur: 'Étudiant non trouvé' });
    }
    
    res.json(etudiant);
  } catch (erreur) {
    if (erreur.name === 'ValidationError') {
      const messages = Object.values(erreur.errors).map(e => e.message);
      return res.status(400).json({ erreurs: messages });
    }
    res.status(500).json({ erreur: erreur.message });
  }
});

// DELETE /api/etudiants/:id — Suppression logique (soft delete)
router.delete('/:id', async (req, res) => {
  try {
    const etudiant = await Etudiant.findByIdAndUpdate(
      req.params.id,
      { actif: false },
      { new: true }
    );
    
    if (!etudiant) {
      return res.status(404).json({ erreur: 'Étudiant non trouvé' });
    }
    
    res.json({ message: `Étudiant "${etudiant.nom}" désactivé avec succès` });
  } catch (erreur) {
    res.status(500).json({ erreur: erreur.message });
  }
});

module.exports = router;
```

### 12.2 SQL avec Sequelize (MySQL/PostgreSQL)

Pour les bases de données relationnelles, **Sequelize** est l'ORM (Object-Relational Mapper) le plus utilisé avec Node.js.

```bash
npm install sequelize mysql2   # Pour MySQL
# ou
npm install sequelize pg       # Pour PostgreSQL
```

```javascript
// ===== fichier : src/models/Etudiant.js — version Sequelize =====

const { Sequelize, DataTypes, Model } = require('sequelize');

// Connexion à la base de données
const sequelize = new Sequelize('universite', 'root', 'mot_de_passe', {
  host: 'localhost',
  dialect: 'mysql',   // ou 'postgres'
  logging: false       // Désactive les logs SQL en console
});

// Définition du modèle
class Etudiant extends Model {
  // Méthode d'instance
  getMention() {
    if (this.note >= 16) return 'Très Bien';
    if (this.note >= 14) return 'Bien';
    if (this.note >= 12) return 'Assez Bien';
    if (this.note >= 10) return 'Passable';
    return 'Ajourné';
  }
}

Etudiant.init({
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Le nom est requis' },
      len: { args: [2, 100], msg: 'Le nom doit contenir entre 2 et 100 caractères' }
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Format d\'email invalide' }
    }
  },
  filiere: {
    type: DataTypes.ENUM('Informatique', 'Mathématiques', 'Physique', 'Chimie'),
    allowNull: false
  },
  note: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    validate: {
      min: { args: [0], msg: 'La note ne peut pas être négative' },
      max: { args: [20], msg: 'La note ne peut pas dépasser 20' }
    }
  },
  actif: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: 'Etudiant',
  tableName: 'etudiants',
  timestamps: true      // createdAt et updatedAt automatiques
});

module.exports = { sequelize, Etudiant };
```

---

## Chapitre 13 : Authentification et sécurité

### 13.1 Authentification par JWT (JSON Web Token)

Le **JWT** est le mécanisme d'authentification le plus répandu dans les API REST modernes. Il fonctionne selon le principe suivant :

```
1. L'utilisateur envoie ses identifiants (email + mot de passe)
2. Le serveur vérifie les identifiants
3. Si valides → le serveur génère un TOKEN JWT et le renvoie au client
4. Le client stocke le token et l'envoie dans l'en-tête de chaque requête suivante
5. Le serveur vérifie le token à chaque requête protégée
```

Un JWT est composé de trois parties séparées par des points : `HEADER.PAYLOAD.SIGNATURE`. Le header contient le type de token et l'algorithme. Le payload contient les données (ID utilisateur, rôle, date d'expiration). La signature garantit que le token n'a pas été modifié.

```bash
npm install jsonwebtoken bcryptjs
```

```javascript
// ===== fichier : src/models/Utilisateur.js =====

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schemaUtilisateur = new mongoose.Schema({
  nom: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  motDePasse: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['etudiant', 'enseignant', 'admin'], default: 'etudiant' }
}, { timestamps: true });

// Hook "pre-save" — hache le mot de passe avant la sauvegarde
schemaUtilisateur.pre('save', async function(next) {
  // Ne hacher que si le mot de passe a été modifié
  if (!this.isModified('motDePasse')) return next();
  
  // Génération du sel et hachage
  const sel = await bcrypt.genSalt(10);
  this.motDePasse = await bcrypt.hash(this.motDePasse, sel);
  next();
});

// Méthode pour vérifier le mot de passe
schemaUtilisateur.methods.verifierMotDePasse = async function(motDePasseCandidat) {
  return bcrypt.compare(motDePasseCandidat, this.motDePasse);
};

// Ne jamais renvoyer le mot de passe dans le JSON
schemaUtilisateur.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.motDePasse;
  return obj;
};

module.exports = mongoose.model('Utilisateur', schemaUtilisateur);
```

```javascript
// ===== fichier : src/routes/auth.js =====

const express = require('express');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/Utilisateur');

const router = express.Router();

// Clé secrète pour signer les tokens (en production, utiliser une variable d'environnement)
const JWT_SECRET = process.env.JWT_SECRET || 'ma_cle_secrete_tres_longue_et_complexe';
const JWT_EXPIRE = '24h';

// Fonction utilitaire pour générer un token
function genererToken(utilisateur) {
  return jwt.sign(
    { id: utilisateur._id, email: utilisateur.email, role: utilisateur.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRE }
  );
}

// POST /api/auth/inscription
router.post('/inscription', async (req, res) => {
  try {
    const { nom, email, motDePasse, role } = req.body;
    
    // Vérifier si l'utilisateur existe déjà
    const existant = await Utilisateur.findOne({ email });
    if (existant) {
      return res.status(409).json({ erreur: 'Cet email est déjà utilisé' });
    }
    
    // Créer le nouvel utilisateur
    const utilisateur = new Utilisateur({ nom, email, motDePasse, role });
    await utilisateur.save();
    
    // Générer le token
    const token = genererToken(utilisateur);
    
    res.status(201).json({
      message: 'Inscription réussie',
      token,
      utilisateur
    });
  } catch (erreur) {
    if (erreur.name === 'ValidationError') {
      const messages = Object.values(erreur.errors).map(e => e.message);
      return res.status(400).json({ erreurs: messages });
    }
    res.status(500).json({ erreur: 'Erreur lors de l\'inscription' });
  }
});

// POST /api/auth/connexion
router.post('/connexion', async (req, res) => {
  try {
    const { email, motDePasse } = req.body;
    
    // Vérification des champs
    if (!email || !motDePasse) {
      return res.status(400).json({ erreur: 'Email et mot de passe requis' });
    }
    
    // Recherche de l'utilisateur
    const utilisateur = await Utilisateur.findOne({ email });
    if (!utilisateur) {
      return res.status(401).json({ erreur: 'Identifiants incorrects' });
    }
    
    // Vérification du mot de passe
    const motDePasseValide = await utilisateur.verifierMotDePasse(motDePasse);
    if (!motDePasseValide) {
      return res.status(401).json({ erreur: 'Identifiants incorrects' });
    }
    
    // Générer le token
    const token = genererToken(utilisateur);
    
    res.json({
      message: 'Connexion réussie',
      token,
      utilisateur
    });
  } catch (erreur) {
    res.status(500).json({ erreur: 'Erreur lors de la connexion' });
  }
});

module.exports = router;
```

```javascript
// ===== fichier : src/middleware/auth.js =====

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'ma_cle_secrete_tres_longue_et_complexe';

// Middleware de vérification du token
function authentifier(req, res, next) {
  // Le token est envoyé dans l'en-tête Authorization sous la forme "Bearer <token>"
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ erreur: 'Token d\'authentification manquant' });
  }
  
  const token = authHeader.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.utilisateur = decoded; // Ajoute les infos utilisateur à la requête
    next();
  } catch (erreur) {
    if (erreur.name === 'TokenExpiredError') {
      return res.status(401).json({ erreur: 'Token expiré' });
    }
    return res.status(403).json({ erreur: 'Token invalide' });
  }
}

// Middleware d'autorisation par rôle
function autoriser(...rolesAutorises) {
  return (req, res, next) => {
    if (!req.utilisateur) {
      return res.status(401).json({ erreur: 'Non authentifié' });
    }
    
    if (!rolesAutorises.includes(req.utilisateur.role)) {
      return res.status(403).json({ 
        erreur: 'Accès refusé. Rôle requis : ' + rolesAutorises.join(' ou ')
      });
    }
    
    next();
  };
}

module.exports = { authentifier, autoriser };
```

```javascript
// ===== Utilisation dans les routes protégées =====

const { authentifier, autoriser } = require('../middleware/auth');

// Route accessible uniquement aux utilisateurs authentifiés
router.get('/profil', authentifier, (req, res) => {
  res.json({ utilisateur: req.utilisateur });
});

// Route accessible uniquement aux administrateurs
router.delete('/etudiants/:id', authentifier, autoriser('admin'), async (req, res) => {
  // Seul un admin peut supprimer un étudiant
});

// Route accessible aux enseignants et administrateurs
router.post('/notes', authentifier, autoriser('enseignant', 'admin'), async (req, res) => {
  // Seuls les enseignants et les admins peuvent créer des notes
});
```

### 13.2 Variables d'environnement

Les informations sensibles (clés secrètes, mots de passe de base de données) ne doivent jamais être écrites en dur dans le code. On utilise des variables d'environnement.

```bash
npm install dotenv
```

```env
# ===== fichier : .env (à NE JAMAIS committer dans Git) =====
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/universite
JWT_SECRET=une_tres_longue_chaine_secrete_aleatoire_42xyz
JWT_EXPIRE=24h
```

```javascript
// Au début de server.js
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
```

```gitignore
# ===== fichier : .gitignore =====
node_modules/
.env
```

---

## Chapitre 14 : Les frameworks backend avancés

### 14.1 NestJS — L'architecture Angular côté serveur

NestJS est un framework Node.js qui emprunte l'architecture d'Angular (modules, décorateurs, injection de dépendances, TypeScript natif). Il est idéal pour les applications d'entreprise qui nécessitent une structure rigoureuse.

```typescript
// ===== Exemple de contrôleur NestJS =====

import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';

@Controller('etudiants')   // Toutes les routes commenceront par /etudiants
export class EtudiantController {
  
  // Injection de dépendances automatique
  constructor(private readonly etudiantService: EtudiantService) {}

  @Get()
  async findAll() {
    return this.etudiantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.etudiantService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createEtudiantDto: CreateEtudiantDto) {
    return this.etudiantService.create(createEtudiantDto);
  }
}
```

### 14.2 Fastify — La performance avant tout

Fastify se distingue par ses performances exceptionnelles (jusqu'à deux fois plus rapide qu'Express dans certains benchmarks) et son système de validation par schéma JSON intégré.

```javascript
const fastify = require('fastify')({ logger: true });

// Schéma de validation intégré (JSON Schema)
const schemaEtudiant = {
  type: 'object',
  required: ['nom', 'filiere', 'note'],
  properties: {
    nom: { type: 'string', minLength: 2 },
    filiere: { type: 'string', enum: ['Informatique', 'Mathématiques', 'Physique'] },
    note: { type: 'number', minimum: 0, maximum: 20 }
  }
};

fastify.post('/api/etudiants', {
  schema: {
    body: schemaEtudiant,
    response: {
      201: schemaEtudiant
    }
  }
}, async (request, reply) => {
  const etudiant = await creerEtudiant(request.body);
  reply.code(201).send(etudiant);
});

fastify.listen({ port: 3000 });
```

---

# Partie III — Fullstack et écosystème

---

## Chapitre 15 : Next.js et Nuxt.js — Le rendu côté serveur

### 15.1 Le problème des SPA pures

Les SPA classiques ont deux limitations. Premièrement, le **SEO** (référencement) : les moteurs de recherche ont du mal à indexer le contenu généré dynamiquement par JavaScript. Deuxièmement, le **temps de chargement initial** : le navigateur doit télécharger tout le JavaScript avant d'afficher quoi que ce soit.

### 15.2 Les stratégies de rendu

Les frameworks fullstack comme Next.js et Nuxt.js proposent plusieurs stratégies de rendu.

**CSR (Client-Side Rendering)** — Le rendu classique des SPA. Le HTML est vide, tout est rendu par JavaScript dans le navigateur.

**SSR (Server-Side Rendering)** — Le serveur génère le HTML complet à chaque requête. Le navigateur reçoit une page prête à afficher, puis JavaScript prend le relais pour la rendre interactive (« hydratation »).

**SSG (Static Site Generation)** — Les pages sont générées au moment du build (compilation). Idéal pour les contenus qui ne changent pas souvent (blogs, documentation).

**ISR (Incremental Static Regeneration)** — Combinaison de SSG et SSR : les pages sont générées statiquement mais se régénèrent automatiquement à intervalles définis.

### 15.3 Next.js — Le framework React fullstack

Next.js, développé par Vercel, est devenu le framework React le plus populaire. Depuis la version 13, il utilise l'**App Router** avec les React Server Components.

```bash
npx create-next-app@latest mon-app-next
cd mon-app-next
npm run dev
```

```
mon-app-next/
├── app/                     # Dossier principal (App Router)
│   ├── layout.js            # Layout racine (commun à toutes les pages)
│   ├── page.js              # Page d'accueil (route /)
│   ├── etudiants/
│   │   ├── page.js          # Route /etudiants
│   │   └── [id]/
│   │       └── page.js      # Route dynamique /etudiants/:id
│   └── api/
│       └── etudiants/
│           └── route.js     # API Route /api/etudiants
├── public/                  # Fichiers statiques
└── package.json
```

```jsx
// ===== fichier : app/page.js — Page d'accueil (Server Component par défaut) =====

// Les Server Components s'exécutent sur le serveur — pas de useState, pas de useEffect
// Mais ils peuvent directement accéder aux données (BD, fichiers, API)
export default async function PageAccueil() {
  return (
    <main>
      <h1>Université de Mahajanga — Portail Étudiant</h1>
      <p>Bienvenue sur le système de gestion universitaire.</p>
    </main>
  );
}
```

```jsx
// ===== fichier : app/etudiants/page.js — Liste des étudiants (SSR) =====

// Fonction asynchrone → les données sont récupérées côté serveur
async function getEtudiants() {
  const res = await fetch('http://localhost:3000/api/etudiants', {
    cache: 'no-store'  // Force le re-fetch à chaque requête (SSR)
    // Alternatives :
    // cache: 'force-cache'                → SSG (données statiques)
    // next: { revalidate: 60 }            → ISR (régénération toutes les 60 secondes)
  });
  
  if (!res.ok) throw new Error('Erreur de chargement');
  return res.json();
}

export default async function PageEtudiants() {
  const { etudiants } = await getEtudiants();
  
  return (
    <div>
      <h1>Liste des étudiants</h1>
      <ul>
        {etudiants.map(e => (
          <li key={e.id}>
            <a href={`/etudiants/${e.id}`}>{e.nom}</a> — {e.filiere} — {e.note}/20
          </li>
        ))}
      </ul>
    </div>
  );
}
```

```jsx
// ===== fichier : app/etudiants/[id]/page.js — Page de détail dynamique =====

async function getEtudiant(id) {
  const res = await fetch(`http://localhost:3000/api/etudiants/${id}`);
  if (!res.ok) throw new Error('Étudiant non trouvé');
  return res.json();
}

export default async function PageDetailEtudiant({ params }) {
  const etudiant = await getEtudiant(params.id);
  
  return (
    <div>
      <h1>{etudiant.nom}</h1>
      <p>Filière : {etudiant.filiere}</p>
      <p>Note : {etudiant.note}/20</p>
      <p>Statut : {etudiant.note >= 10 ? 'Admis' : 'Ajourné'}</p>
      <a href="/etudiants">← Retour à la liste</a>
    </div>
  );
}
```

```javascript
// ===== fichier : app/api/etudiants/route.js — API Route Next.js =====

import { NextResponse } from 'next/server';

// Données simulées (en production → base de données)
const etudiants = [
  { id: '1', nom: 'Alice Rakoto', filiere: 'Informatique', note: 16 },
  { id: '2', nom: 'Bob Rabe', filiere: 'Mathématiques', note: 12 },
  { id: '3', nom: 'Charlie Andria', filiere: 'Informatique', note: 14 },
];

// GET /api/etudiants
export async function GET() {
  return NextResponse.json({ etudiants });
}

// POST /api/etudiants
export async function POST(request) {
  const body = await request.json();
  
  const nouvelEtudiant = {
    id: String(Date.now()),
    ...body
  };
  
  etudiants.push(nouvelEtudiant);
  
  return NextResponse.json(nouvelEtudiant, { status: 201 });
}
```

### 15.4 Nuxt.js — Le framework Vue.js fullstack

Nuxt.js est l'équivalent de Next.js pour Vue.js. Il offre les mêmes fonctionnalités (SSR, SSG, routage automatique) avec la syntaxe et la philosophie Vue.

```bash
npx nuxi@latest init mon-app-nuxt
cd mon-app-nuxt
npm install
npm run dev
```

```vue
<!-- ===== fichier : pages/etudiants.vue — Nuxt génère automatiquement la route =====  -->

<template>
  <div>
    <h1>Liste des étudiants</h1>
    
    <div v-if="pending">Chargement en cours...</div>
    <div v-else-if="error">Erreur : {{ error.message }}</div>
    <ul v-else>
      <li v-for="e in etudiants" :key="e.id">
        <NuxtLink :to="`/etudiants/${e.id}`">{{ e.nom }}</NuxtLink>
        — {{ e.filiere }} — {{ e.note }}/20
      </li>
    </ul>
  </div>
</template>

<script setup>
// useFetch est un composable Nuxt qui gère le chargement des données
// Il fonctionne côté serveur ET côté client automatiquement
const { data: etudiants, pending, error } = await useFetch('/api/etudiants')
</script>
```

---

## Chapitre 16 : Projet intégrateur fullstack

### 16.1 Description du projet

Pour consolider tous les concepts étudiés, voici la description d'un projet complet : un **Système de Gestion des Résultats Universitaires**.

L'application permet de gérer les étudiants, les matières et les notes, avec un tableau de bord affichant les statistiques.

### 16.2 Architecture du projet

```
projet-gestion-universitaire/
├── backend/                        # API Express.js
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js         # Connexion MongoDB
│   │   ├── models/
│   │   │   ├── Etudiant.js
│   │   │   ├── Matiere.js
│   │   │   ├── Note.js
│   │   │   └── Utilisateur.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── etudiants.js
│   │   │   ├── matieres.js
│   │   │   └── notes.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── validation.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/                       # Application React (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── CarteEtudiant.jsx
│   │   │   ├── FormulaireNote.jsx
│   │   │   └── TableauStatistiques.jsx
│   │   ├── pages/
│   │   │   ├── Accueil.jsx
│   │   │   ├── Connexion.jsx
│   │   │   ├── ListeEtudiants.jsx
│   │   │   ├── DetailEtudiant.jsx
│   │   │   └── TableauDeBord.jsx
│   │   ├── services/
│   │   │   └── api.js              # Configuration Axios / Fetch
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # Contexte d'authentification
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

### 16.3 Communication frontend-backend

Le service API centralise toutes les communications avec le serveur.

```javascript
// ===== fichier : frontend/src/services/api.js =====

const API_BASE_URL = 'http://localhost:3000/api';

// Fonction utilitaire pour les requêtes HTTP
async function requeteAPI(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    },
    ...options
  };
  
  const reponse = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  // Gestion des erreurs d'authentification
  if (reponse.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/connexion';
    throw new Error('Session expirée');
  }
  
  const donnees = await reponse.json();
  
  if (!reponse.ok) {
    throw new Error(donnees.erreur || 'Erreur du serveur');
  }
  
  return donnees;
}

// Fonctions exportées pour chaque ressource
export const authAPI = {
  connexion: (credentials) => 
    requeteAPI('/auth/connexion', {
      method: 'POST',
      body: JSON.stringify(credentials)
    }),
    
  inscription: (donnees) =>
    requeteAPI('/auth/inscription', {
      method: 'POST',
      body: JSON.stringify(donnees)
    })
};

export const etudiantsAPI = {
  getTous: (params = '') => requeteAPI(`/etudiants${params}`),
  getParId: (id) => requeteAPI(`/etudiants/${id}`),
  creer: (donnees) => requeteAPI('/etudiants', { method: 'POST', body: JSON.stringify(donnees) }),
  modifier: (id, donnees) => requeteAPI(`/etudiants/${id}`, { method: 'PUT', body: JSON.stringify(donnees) }),
  supprimer: (id) => requeteAPI(`/etudiants/${id}`, { method: 'DELETE' })
};

export const notesAPI = {
  getToutesParEtudiant: (etudiantId) => requeteAPI(`/etudiants/${etudiantId}/notes`),
  creer: (donnees) => requeteAPI('/notes', { method: 'POST', body: JSON.stringify(donnees) })
};
```

```jsx
// ===== fichier : frontend/src/pages/ListeEtudiants.jsx =====

import { useState, useEffect } from 'react';
import { etudiantsAPI } from '../services/api';
import CarteEtudiant from '../components/CarteEtudiant';

function ListeEtudiants() {
  const [etudiants, setEtudiants] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [recherche, setRecherche] = useState('');
  const [filiereFiltre, setFiliereFiltre] = useState('');

  useEffect(() => {
    chargerEtudiants();
  }, []);

  async function chargerEtudiants() {
    try {
      setChargement(true);
      const donnees = await etudiantsAPI.getTous();
      setEtudiants(donnees.etudiants);
    } catch (err) {
      setErreur(err.message);
    } finally {
      setChargement(false);
    }
  }

  // Filtrage côté client
  const etudiantsFiltres = etudiants.filter(e => {
    const correspondNom = e.nom.toLowerCase().includes(recherche.toLowerCase());
    const correspondFiliere = !filiereFiltre || e.filiere === filiereFiltre;
    return correspondNom && correspondFiliere;
  });

  if (chargement) return <p>Chargement...</p>;
  if (erreur) return <p style={{ color: 'red' }}>Erreur : {erreur}</p>;

  return (
    <div>
      <h1>Étudiants ({etudiantsFiltres.length})</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={recherche}
          onChange={e => setRecherche(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />
        <select 
          value={filiereFiltre} 
          onChange={e => setFiliereFiltre(e.target.value)}
          style={{ padding: '8px' }}
        >
          <option value="">Toutes les filières</option>
          <option value="Informatique">Informatique</option>
          <option value="Mathématiques">Mathématiques</option>
          <option value="Physique">Physique</option>
        </select>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {etudiantsFiltres.map(e => (
          <CarteEtudiant key={e.id || e._id} {...e} />
        ))}
      </div>
      
      {etudiantsFiltres.length === 0 && (
        <p>Aucun étudiant ne correspond à vos critères.</p>
      )}
    </div>
  );
}

export default ListeEtudiants;
```

---

## Conclusion générale et perspectives

### Ce que nous avons appris

Ce cours a parcouru l'ensemble de l'écosystème JavaScript moderne, des rappels ES6 fondamentaux jusqu'à la construction d'applications fullstack complètes. Vous avez acquis une compréhension solide des concepts de composants, réactivité et état dans les frameworks frontend (React, Vue, Angular), de la création d'API REST sécurisées avec Node.js et Express.js, de la persistance des données avec MongoDB et les ORM, de l'authentification par JWT, et des frameworks fullstack comme Next.js et Nuxt.js.

### Les tendances actuelles et futures

L'écosystème JavaScript évolue rapidement. Voici les tendances à surveiller.

**Server Components** (React Server Components) brouillent la frontière entre frontend et backend en exécutant des composants directement sur le serveur. **TypeScript** est devenu quasi incontournable dans les projets professionnels. **Edge Computing** permet d'exécuter le code au plus près des utilisateurs grâce à des plateformes comme Vercel Edge Functions ou Cloudflare Workers. **L'IA intégrée** au développement (assistants de code, génération de composants) transforme la façon dont on développe.

### Conseils pour aller plus loin

1. **Pratiquez régulièrement** : La théorie ne suffit pas. Construisez des projets personnels.
2. **Maîtrisez un framework avant de tous les apprendre** : Choisissez React ou Vue et approfondissez-le.
3. **Lisez les documentations officielles** : Elles sont la source la plus fiable et la plus à jour.
4. **Contribuez à l'open source** : C'est un excellent moyen d'apprendre et de se faire connaître.
5. **Restez curieux** : L'écosystème évolue vite. Suivez les blogs, les conférences et les newsletters.

---

## Bibliographie et ressources

### Documentation officielle

- **React** : https://react.dev
- **Vue.js** : https://vuejs.org
- **Angular** : https://angular.dev
- **Node.js** : https://nodejs.org/docs
- **Express.js** : https://expressjs.com
- **Next.js** : https://nextjs.org/docs
- **Nuxt.js** : https://nuxt.com/docs
- **MongoDB / Mongoose** : https://mongoosejs.com/docs

### Ressources pédagogiques recommandées

- **MDN Web Docs** (Mozilla) : https://developer.mozilla.org — La référence pour JavaScript, HTML et CSS.
- **JavaScript.info** : https://javascript.info — Tutoriel complet et moderne sur JavaScript.
- **FreeCodeCamp** : https://www.freecodecamp.org — Cours gratuits avec exercices pratiques.

### Outils de développement

- **Visual Studio Code** : Éditeur de code recommandé (extensions : ESLint, Prettier, Vetur/Volar pour Vue, ES7+ React snippets).
- **Postman / Insomnia** : Tester les API REST.
- **MongoDB Compass** : Interface graphique pour MongoDB.
- **Chrome DevTools** : Débogage intégré au navigateur.

---

## Exercices récapitulatifs

### Exercice 1 — React : Gestionnaire de tâches
Créez une application React « To-Do List » avec les fonctionnalités suivantes : ajouter, supprimer, marquer comme fait, filtrer (toutes / en cours / terminées). Utilisez `useState` pour gérer l'état et stockez les tâches dans un tableau.

### Exercice 2 — Vue.js : Catalogue de produits
Créez une application Vue qui affiche une liste de produits avec une barre de recherche, un filtre par catégorie, un tri par prix, et un panier d'achat simple. Utilisez la Composition API (`ref`, `computed`, `watch`).

### Exercice 3 — Express.js : API de bibliothèque
Créez une API REST pour une bibliothèque universitaire avec les endpoints CRUD pour les livres (`/api/livres`), le filtrage par auteur, catégorie et disponibilité, la pagination, et la validation des données. Connectez l'API à MongoDB avec Mongoose.

### Exercice 4 — Projet fullstack
Combinez les exercices précédents : créez un frontend React ou Vue qui consomme votre API Express. Ajoutez l'authentification JWT, un tableau de bord avec des statistiques, et la gestion des rôles (bibliothécaire / étudiant).

---

*Ce support de cours est publié sous licence Creative Commons CC BY-SA 4.0.*  
*Dernière mise à jour : 2025*