# Chapitre : Introduction aux Frameworks JS - Vue.js 3

Ce chapitre pose les bases théoriques et techniques pour comprendre pourquoi et comment utiliser un framework moderne comme Vue.js.

## 1. Qu'est-ce qu'un Framework JavaScript ?

### Définition
Un **Framework** (ou "cadre de travail") est un ensemble d'outils, de bibliothèques et de conventions de programmation qui fournit une structure prête à l'emploi pour développer des applications. 

Contrairement à une simple bibliothèque (Library) où vous appelez le code quand vous en avez besoin, c'est le Framework qui impose une architecture : c'est lui qui "dirige" l'exécution de l'application.

### Pourquoi l'utiliser ?
En JavaScript "Vanilla" (pur), pour mettre à jour une interface, on doit manipuler manuellement le DOM (`document.getElementById`, etc.). C'est long, source d'erreurs et difficile à maintenir.

Un Framework apporte :
- **Une structure** : Une organisation standardisée du code (fichiers, dossiers).
- **La productivité** : Moins de code répétitif à écrire pour les tâches courantes.
- **La Réutilisabilité** : Découpage de l'interface en **composants** indépendants.
- **La Performance** : Optimisation automatique des mises à jour de l'affichage.

---

## 2. Le Data Binding (Liaison de données)

### Définitions techniques
Le **Data Binding** est le mécanisme qui permet de lier les données (le code JavaScript) à l'interface (le HTML). Lorsque la donnée change, l'interface se met à jour automatiquement.

On distingue deux types principaux :

#### A. Liaison Unidirectionnelle (One-Way Data Binding)
La donnée va du **JavaScript vers le HTML**. Si la variable change dans le script, le texte change sur la page, mais l'utilisateur ne peut pas modifier la variable depuis la page.
- **Exemple Vue :** Utilisation des moustaches `{{ }}`.

```html
<p>Bonjour {{ nomUser }} !</p>

<script setup>
  const nomUser = "Alice"; 
</script>
```

#### B. Liaison Bidirectionnelle (Two-Way Data Binding)
La donnée circule dans les **deux sens**. C'est très utilisé dans les formulaires.
1. Si le JavaScript change, le champ de saisie se met à jour.
2. Si l'utilisateur tape du texte dans le champ, la variable JavaScript est modifiée instantanément.
- **Exemple Vue :** Utilisation de la directive `v-model`.

```html
<input v-model="message" placeholder="Tapez quelque chose...">
<p>Vous avez écrit : {{ message }}</p>

<script setup>
  import { ref } from 'vue';
  const message = ref(""); 
</script>
```

---

### C. Comparaison pratique : Pourquoi utiliser le Data Binding ?

Voici la différence concrète pour afficher et mettre à jour un texte simple.

#### 1. La méthode "classique" (Sans Framework)
En JavaScript pur (Vanilla), on doit manipuler manuellement chaque élément. C'est la manipulation **impérative** : on doit donner des ordres précis au navigateur.

```html
<!-- HTML -->
<p id="text"></p>

<!-- SCRIPT -->
<script>
  let message = "Bonjour les étudiants !";
  
  // Étape 1 : Aller chercher l'élément par son ID
  const element = document.getElementById("text");
  
  // Étape 2 : Modifier son contenu manuellement
  element.innerText = message;
</script>
```

#### 2. La méthode moderne (Avec Framework - Vue.js)
Avec Vue.js, on utilise la manipulation **déclarative**. On lie simplement la donnée au HTML et le framework s'occupe de la mise à jour.

```html
<!-- SCRIPT -->
<script setup>
  const message = "Bonjour les étudiants !";
</script>

<!-- TEMPLATE -->
<template>
  <p>{{ message }}</p>
</template>
```

---

## 3. L'écosystème technique (L'Environnement)

Avant de coder, il faut comprendre les outils qui "font tourner" Vue.js.

### A. Node.js et NPM (Le moteur)
- **Node.js** : Permet d'exécuter du JavaScript sur votre ordinateur (pas seulement dans le navigateur).
- **NPM (Node Package Manager)** : Un magasin géant de bibliothèques. C'est lui qui installe Vue.js et ses outils.

### B. Vite (Le moteur de build)
Vite est l'outil moderne utilisé pour créer des projets Vue. Il est ultra-rapide car il utilise les modules ES natifs du navigateur. Il s'occupe de :
- Compiler votre code.
- Rafraîchir instantanément la page quand vous modifiez un fichier.

## 3. Les Concepts Logiques Fondamentaux

C'est ici que la magie de Vue opère.

### A. Le DOM Virtuel (Virtual DOM)
**Définition technique :** Le DOM Virtuel est une copie légère en mémoire du DOM réel, stockée sous forme d'objets JavaScript. 

**Fonctionnement :** 
1. Quand une donnée change, Vue crée un nouveau DOM Virtuel.
2. Il compare ce nouveau plan avec l'ancien (processus appelé **"Diffing"**).
3. Il calcule le nombre minimum de modifications nécessaires.
4. Il applique uniquement ces changements au DOM réel (processus de **"Patching"**).

**Analogie de l'Architecte :**
Imaginez que le site web est un immeuble.
- **Le DOM Réel** est l'immeuble physique. Modifier une fenêtre demande de casser le mur (lent).
- **Le DOM Virtuel** est le plan de l'architecte. On modifie 10 détails sur le plan en 1 seconde (rapide), puis on compare l'ancien et le nouveau plan. On n'envoie les maçons que là où c'est nécessaire.

### B. La Réactivité
**Définition technique :** La réactivité est un paradigme de programmation qui permet de lier des sources de données à des "consommateurs" (comme l'interface utilisateur). Dans Vue 3, cela repose sur les **Proxies JavaScript** qui interceptent les modifications des objets pour déclencher automatiquement des mises à jour.

**En résumé :** Si vous changez une variable dans votre code JS, l'affichage sur la page web change **automatiquement**, sans recharger la page.

**Analogie de la Feuille Excel :**
Dans Excel, si `C1 = A1 + B1`. Dès que vous modifiez `A1`, `C1` se met à jour tout seul. C'est ça la réactivité.

---

### C. Les Directives
**Définition :** Les directives sont des attributs HTML spéciaux (commençant par `v-`) qui indiquent à Vue d'appliquer un comportement spécial à un élément du DOM.

**Les plus courantes :**
- `v-bind` (ou `:`) : Lie un attribut HTML à une donnée (ex: `:src="imagePath"`).
- `v-on` (ou `@`) : Écoute les événements (ex: `@click="maFonction"`).
- `v-if` / `v-else` : Affiche ou cache un élément selon une condition.
- `v-for` : Répète un élément pour chaque item d'une liste.
- `v-model` : Liaison bidirectionnelle (vu précédemment).

---

### D. Les Composants SFC (Single File Components)
Dans Vue, tout est composant. Un fichier `.vue` contient la structure, la logique et le style au même endroit.

**Analogie de la Maison :**
- `<template>` : **Les murs** (la structure HTML).
- `<script setup>` : **Le cerveau/l'électricité** (la logique JS).
- `<style>` : **La décoration** (le design CSS).

**Structure type d'un fichier .vue :**
```vue
<script setup>
// Logique (JS)
</script>

<template>
  <!-- Affichage (HTML) -->
</template>

<style scoped>
/* Design (CSS) */
</style>
```

**Analogie des LEGO :**
Construire un site web devient un assemblage de briques indépendantes. Si vous modifiez la brique "Bouton", tous les boutons du site changent d'un coup.

---

### D. La Donnée : ref() vs reactive()
En Vue 3, on doit déclarer si une donnée est réactive (surveillée).

**Analogies :**
1. **ref() - La Boîte Unique** : Imaginez une boîte qui contient **une seule valeur** (un chiffre, un nom). Pour changer la valeur à l'intérieur, vous devez ouvrir la boîte (utiliser `.value` en JS).
   - *Idéal pour :* `ref(0)`, `ref("Aina")`, `ref(true)`.
2. **reactive() - L'Armoire à tiroirs** : Imaginez une armoire avec plusieurs tiroirs. Vous changez directement le contenu d'un tiroir sans ouvrir l'armoire entière.
   - *Idéal pour :* Les objets complexes `reactive({ nom: "Aina", age: 20 })`.

**Exemple concret :**
```javascript
const score = ref(0); // On utilise score.value pour changer le chiffre
const etudiant = reactive({ nom: "Aina", note: 15 }); // On utilise etudiant.note directement
```

---

### E. L'outil indispensable : Vue DevTools
**Analogie du Scanner à rayons X :**
Si votre site a un bug, vous ne voyez pas ce qui se passe "dans le cerveau" (la mémoire). **Vue DevTools** est une extension pour votre navigateur (Chrome/Firefox) qui vous permet de voir en direct :
- Quelles sont les variables actuelles.
- Si le DOM Virtuel s'est mis à jour.
- Comment les composants communiquent entre eux.

---

## 4. Deux manières de coder : Options API vs Composition API

Vue 3 offre deux styles de programmation :

| Style | Analogie | Idéal pour... |
| :--- | :--- | :--- |
| **Options API** | **Le Classeur** : Chaque chose a son tiroir fixe (`data`, `methods`). | Débutants, petits projets. |
| **Composition API** | **Le Sac à Dos** : On regroupe tout par fonctionnalité (ex: tout le code de "Recherche" ensemble). | Projets complexes, réutilisation. |

**Exemple réel :**
Si vous gérez une "Liste de tâches" et un "Compteur de temps" sur la même page :
- **Options API** : Mélange les fonctions des deux dans le même tiroir "Methods".
- **Composition API** : Sépare proprement le code des tâches du code du compteur.
