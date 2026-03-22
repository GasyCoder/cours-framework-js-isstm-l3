## 0.4 La console (indispensable)

La console sert à :

* afficher des valeurs (`console.log`)
* voir les erreurs JavaScript
* tester rapidement des morceaux de code

---

# 1. Variables

## 1.1 Définition

Une variable est une “boîte” qui stocke une valeur.
On met une valeur dans la variable pour pouvoir la réutiliser plus tard.

Exemple :

* on stocke un prénom dans une variable `prenom`
* on réutilise `prenom` pour afficher un message

## 1.2 Règles de nommage

Une bonne variable doit être lisible (convention de nommage utilisée en programmation) :

* `note`, `age`, `totalPrix`, `nomEtudiant`
* camelCase : `totalPrix`, `nombreEtudiants`
* pas d’espace, pas d’accents, pas de tirets

## 1.3 Déclarer une variable (let, const)

Il existe deux mots importants :

* `let` : variable modifiable (on peut changer la valeur)
* `const` : variable non réassignable (on ne peut pas lui donner une autre valeur)

Exemple avec `let` :

```js
let prenom = "Aina";
console.log(prenom);

prenom = "Raja";
console.log(prenom);

prenom = "Florent";
console.log("Salama " + prenom);
```

Explication :

* `let prenom = "Aina";` crée une variable `prenom` contenant "Aina"
* `prenom = "Raja";` remplace la valeur par "Raja"
* La boîte est la même, seul le contenu change.

### Attention à ne pas confondre avec redéclaration 

 ```js 
 let prenom = "Aina";
 let prenom = "Raja"; // Erreur (Identifier 'prenom' has already been declared)
```

Exemple avec `const` :

```js
const pays = "Madagascar";
console.log(pays);

pays = "France"; // Erreur (interdit)
```

Explication :

* `const pays = "Madagascar";` crée une variable constante
* on ne peut pas la réassigner

---

# 2. Types de données

En JavaScript, les types de données se divisent en 2 grandes catégories, chaque valeur possède un **type**.
Un type de donnée décrit la nature d’une valeur :

- La nature de la valeur
- Les opérations possibles
- La manière dont la valeur est stockée en mémoire

Comprendre les types est essentiel pour éviter les erreurs et écrire un code correct.

## 2.1 Pourquoi les types sont importants

Une valeur peut être :

- du texte (ex : "Bonjour")
- un nombre (ex : 10)
- vrai ou faux (ex : true / false)

JavaScript doit connaître le type pour effectuer les bonnes opérations.

Exemple :

```js
let age = "10";
console.log(age + 5); // "105" (concaténation)

let nombre = 10;
console.log(nombre + 5); // 15 (addition);
```
----

## 2.2 Types primitifs

Ce sont des valeurs simples, stockées directement en mémoire.

Il y en a 7 types primitifs principaux : 

* `string` : texte
* `number` : nombre (nombres classiques (avec décimaux))
* `boolean` : vrai / faux
* `null` : absence volontaire de valeur
* `undefined` : valeur non définie
* `bigint` : très grand nombre entier
* `symbol` : valeur unique et identifiant spécial

Exemples :

```js
let texte = "Bonjour";      // string
let nombre = 10;            // number
let ok = true;              // boolean
let vide = null;            // null
let inconnu;                // undefined
let grand = 123456789n;     // bigint
let identifiant = Symbol(); // symbol
```

---

## 2.3 Types non primitifs (Types complexes)

Les types non primitifs peuvent contenir plusieurs valeurs.

Le principal type non primitif en JavaScript est :

* `object`

Un objet permet de regrouper plusieurs informations dans une seule variable.

### Exemple d’objet :

```js
let etudiant = {
    nom: "Aina",
    age: 22,
    estInscrit: true,
};
```

Accès aux valeurs :

```js
console.log(etudiant.nom); // "Aina"
console.log(etudiant.age); // 22
```

---

### Les tableaux sont aussi des objets

```js
let notes = [12, 15, 18];
console.log(typeof notes); // "object"
```

---

### Les fonctions sont aussi des objets

```js
function direBonjour() {
    console.log("Bonjour");
}

console.log(typeof direBonjour); // "function"
```

---

## 2.4 Différence importante : valeur vs référence

### Types primitifs → copiés par valeur

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
```

La valeur originale ne change pas.

---

### Types non primitifs → copiés par référence

```js
let user1 = { nom: "Aina" };
let user2 = user1;

user2.nom = "Raja";

console.log(user1.nom); // "Raja"
```

Les deux variables pointent vers le même objet en mémoire.

---

## 2.5 L’opérateur `typeof`

`typeof` permet de vérifier le type d’une valeur.

```js
console.log(typeof "Bonjour"); // "string"
console.log(typeof 10);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"
```

### Remarque importante

```js
console.log(typeof null); // "object"
```

`typeof null` renvoie `"object"`.

C’est un comportement historique de JavaScript.

---

# 3. Opérateurs (calculs et comparaisons)

## 3.1 Opérateurs arithmétiques (calculs)

* `+` addition
* `-` soustraction
* `*` multiplication
* `/` division
* `%` reste (modulo)

Exemple :

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (reste)
```

## 3.2 Comparaisons

Comparateurs :

* `===` égalité stricte (recommandé)
* `!==` différence stricte
* `>`, `<`, `>=`, `<=`

Exemple :

```js
console.log(5 === 5);   // true
console.log(5 === "5"); // false (pas le même type)
```

Important :

* `===` compare la valeur ET le type
* c’est pour éviter des surprises

## 3.3 Opérateurs logiques

* `&&` ET
* `||` OU
* `!` NON

Exemple :

```js
let age = 20;
let carteEtudiant = true;

console.log(age >= 18 && carteEtudiant === true); // true
console.log(age >= 18 || carteEtudiant === false); // true
console.log(!carteEtudiant); // false
```

---

# 4. Conditions (if / else)

## 4.1 Principe

Une condition sert à exécuter du code seulement si une règle est vraie.

Structure :

```js
if (condition) {
  // code si vrai
} else {
  // code si faux
}
```

## 4.2 Exemple simple

Exemple : si la note est >= 50 alors "Admis", sinon "Échec"

```js
let note = 60;

if (note >= 50) {
  console.log("Admis");
} else {
  console.log("Échec");
}
```

Explication :

* `note >= 50` renvoie true ou false
* si true : on exécute le premier bloc
* si false : on exécute le bloc `else`

## 4.3 Plusieurs cas (else if)

```js
let note = 75;

if (note >= 90) {
  console.log("Excellent");
} else if (note >= 50) {
  console.log("Passable");
} else {
  console.log("Insuffisant");
}
```

Explication :

* on teste plusieurs niveaux
* dès qu’un bloc est vrai, les autres ne sont pas exécutés

---

# 5. Boucles (répéter)

## 5.1 Pourquoi une boucle

Une boucle sert à répéter une action automatiquement.
Exemple : afficher 1 à 10, ou parcourir une liste.

## 5.2 Boucle for

Structure :

```js
for (départ; condition; changement) {
  // code répété
}
```

Exemple :

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Explication :

* `let i = 1` : on commence à 1
* `i <= 5` : on continue tant que c’est vrai
* `i++` : on augmente i de 1 après chaque tour

## 5.3 Boucle while

```js
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

Explication :

* on répète tant que `i <= 5` est vrai
* attention : oublier `i++` peut créer une boucle infinie

---

# 6. Fonctions (le cœur du JavaScript)

## 6.1 Définition

Une fonction est un bloc de code réutilisable.
On l’écrit une fois, on l’appelle plusieurs fois.

## 6.2 Fonction simple

```js
function direBonjour() {
  console.log("Bonjour");
}

direBonjour();
direBonjour();
```

Explication :

* `function direBonjour()` crée la fonction
* `direBonjour()` l’exécute

## 6.3 Paramètres et arguments

```js
function saluer(nom) {
  console.log("Bonjour " + nom);
}

saluer("Aina");
saluer("Raja");
```

Explication :

* `nom` est un paramètre (variable interne)
* `"Aina"` est un argument (valeur donnée à l’appel)

## 6.4 return (très important)

`return` renvoie une valeur que l’on peut réutiliser.

```js
function addition(a, b) {
  return a + b;
}

let resultat = addition(2, 3);
console.log(resultat); // 5
```

Différence :

* `console.log` affiche
* `return` renvoie une valeur au programme

---

# 7. Tableaux (Array)

## 7.1 Définition

Un tableau est une liste de valeurs.

```js
const fruits = ["pomme", "banane", "orange"];
```

## 7.2 Accéder à un élément

```js
console.log(fruits[0]); // "pomme"
console.log(fruits[1]); // "banane"
```

## 7.3 Taille du tableau

```js
console.log(fruits.length); // 3
```

## 7.4 Parcourir un tableau

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Explication :

* on commence à 0 car les index commencent à 0
* on s’arrête à `length - 1`

---

# 8. Objets

## 8.1 Définition

Un objet regroupe plusieurs informations liées dans une seule variable.

Exemple : un étudiant (nom, âge, filière)

```js
const etudiant = {
  nom: "Miora",
  age: 21,
  filiere: "GI"
};
```

## 8.2 Lire une propriété

```js
console.log(etudiant.nom);
console.log(etudiant.age);
```

## 8.3 Modifier une propriété

```js
etudiant.age = 22;
console.log(etudiant.age);
```

---

# 9. DOM (Manipuler le HTML)

## 9.1 Définition

Le DOM est la représentation du HTML que JavaScript peut lire et modifier.

## 9.2 Sélectionner un élément par id

HTML :

```html
<h2 id="titre">Titre initial</h2>
```

JS :

```js
const titre = document.getElementById("titre");
console.log(titre.textContent);
```

Explication :

* `getElementById("titre")` récupère l’élément HTML ayant cet id
* `textContent` lit le texte dedans

## 9.3 Modifier le texte

```js
titre.textContent = "Titre modifié par JavaScript";
```

## 9.4 querySelector

`querySelector` utilise la syntaxe CSS :

```js
const titre = document.querySelector("#titre");
```

---

# 10. Événements (click, input)

## 10.1 Principe

Un événement est une action utilisateur :

* click sur un bouton
* saisie dans un champ input

On écoute l’événement avec `addEventListener`.

## 10.2 Exemple click

HTML :

```html
<button id="btn">Clique</button>
<p id="result"></p>
```

JS :

```js
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", function () {
  result.textContent = "Bouton cliqué";
});
```

Explication :

* on sélectionne le bouton
* on écoute `click`
* quand ça arrive, on exécute la fonction

## 10.3 Exemple input (écrire dans un champ)

HTML :

```html
<input id="nom" placeholder="Tape ton nom" />
<p id="affichage"></p>
```

JS :

```js
const input = document.querySelector("#nom");
const affichage = document.querySelector("#affichage");

input.addEventListener("input", function () {
  affichage.textContent = input.value;
});
```

Explication :

* `input.value` est le texte tapé
* on affiche en direct dans le paragraphe