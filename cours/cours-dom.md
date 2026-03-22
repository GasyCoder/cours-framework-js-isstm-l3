# Cours : Manipulation du DOM en JavaScript

Le **DOM** (Document Object Model) est le "pont" entre votre fichier HTML et votre code JavaScript. C'est grâce au DOM que vous pouvez changer le contenu d'une page, ajouter des couleurs, ou réagir à un clic sans recharger la page.

---

## 1. Qu'est-ce que le DOM ?

Imaginez que votre page HTML est un **arbre**.
- La racine est `<html>`.
- Les branches sont `<body>`, `<div>`, `<h1>`, etc.
- Les feuilles sont le texte ou les liens.

En JavaScript, chaque branche et chaque feuille est un **objet** que l'on peut manipuler.

---

## 2. Sélectionner des éléments (Trouver)

Avant de modifier quelque chose, il faut d'abord le "trouver" dans la page.

### 2.1 `getElementById` (Le plus précis)
On utilise l'ID unique défini dans le HTML.
```html
<h1 id="mon-titre">Bonjour tout le monde</h1>
```
```js
const titre = document.getElementById("mon-titre");
console.log(titre); // Affiche l'élément h1 dans la console
```

### 2.2 `querySelector` (Le plus flexible)
Il utilise les sélecteurs CSS (`#` pour ID, `.` pour classe).
```js
const titre = document.querySelector("#mon-titre"); // Par ID
const bouton = document.querySelector(".btn-validation"); // Par Classe
const premierLien = document.querySelector("a"); // Par Balise
```

---

## 3. Modifier les éléments (Changer)

Une fois l'élément sélectionné, on peut changer son contenu ou son apparence.

### 3.1 Changer le texte (`textContent`)
```js
const titre = document.getElementById("mon-titre");
titre.textContent = "Bienvenue sur mon site !"; // Change le texte
```

### 3.2 Changer le style (`style`)
```js
titre.style.color = "blue"; // Change la couleur en bleu
titre.style.fontSize = "30px"; // Change la taille (attention au camelCase)
```

### 3.3 Ajouter/Enlever une classe (`classList`)
C'est mieux que de changer le style un par un.
```js
titre.classList.add("ma-classe-css"); // Ajoute une classe
titre.classList.remove("ancienne-classe"); // Enlève une classe
titre.classList.toggle("actif"); // Ajoute si absent, enlève si présent
```

---

## 4. Écouter les événements (Réagir)

Un événement, c'est quand l'utilisateur fait quelque chose (clic, taper au clavier, etc.).

### 4.1 Le Clic (`click`)
```html
<button id="mon-bouton">Clique ici</button>
```
```js
const btn = document.getElementById("mon-bouton");

btn.addEventListener("click", function() {
    alert("Bravo, tu as cliqué !");
    document.body.style.backgroundColor = "yellow";
});
```

### Bref: ``` addEventListener  ``` est une méthode JavaScript qui permet d’écouter un événement sur un élément HTML.

### 4.2 La Saisie (`input`)
Réagir quand l'utilisateur écrit dans un champ.
```html
<input type="text" id="nom" placeholder="Ton nom">
<p id="message"></p>
```
```js
const champ = document.getElementById("nom");
const message = document.getElementById("message");

champ.addEventListener("input", function() {
    message.textContent = "Tu es en train d'écrire : " + champ.value;
});
```

---

## 5. Créer et Ajouter des éléments (Construire)

On peut ajouter de nouveaux éléments HTML dynamiquement.

```js
// 1. Créer l'élément
const nouveauParagraphe = document.createElement("p");

// 2. Lui donner du contenu
nouveauParagraphe.textContent = "Je suis un nouveau texte ajouté par JS !";

// 3. L'ajouter dans la page (par exemple à la fin du body)
document.body.appendChild(nouveauParagraphe);
```

---

## 6. Mini-Projet : Compteur de clics

Voici un exemple complet que vous pouvez tester.

**HTML :**
```html
<h2 id="compteur">0</h2>
<button id="btn-plus">Ajouter 1</button>
<button id="btn-moins">Retirer 1</button>
```

**JavaScript :**
```js
let score = 0;
const affichage = document.getElementById("compteur");
const btnPlus = document.getElementById("btn-plus");
const btnMoins = document.getElementById("btn-moins");

btnPlus.addEventListener("click", function() {
    score = score + 1;
    affichage.textContent = score;
    affichage.style.color = "green";
});

btnMoins.addEventListener("click", function() {
    score = score - 1;
    affichage.textContent = score;
    affichage.style.color = "red";
});
```

---

### Résumé en 3 étapes :
1. **Sélectionner** (`document.getElementById`)
2. **Écouter** (`addEventListener`)
3. **Modifier** (`textContent`, `style`, `appendChild`)
