# Chapitre : Introduction aux Frameworks JS - Vue.js 3

Ce chapitre pose les bases théoriques et techniques pour comprendre pourquoi et comment utiliser un framework moderne comme Vue.js.

## 1. Pourquoi utiliser un Framework JS ?

En JavaScript "Vanilla" (pur), pour mettre à jour une interface, on doit manipuler manuellement le DOM (`document.getElementById`, etc.). C'est long, source d'erreurs et difficile à maintenir sur de gros projets.

Un **Framework** (cadre de travail) apporte :
- **Une structure** : Une organisation claire du code.
- **Le Data Binding** : Synchronisation automatique entre les données et l'affichage.
- **La Réutilisabilité** : Créer des composants (boutons, formulaires) réutilisables.

## 2. L'écosystème technique (L'Environnement)

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
Vue ne modifie pas tout le site à chaque changement. Il crée une copie légère du site en mémoire (le DOM Virtuel), compare les changements, et ne met à jour que ce qui est strictement nécessaire dans le "vrai" site.

**Analogie de l'Architecte :**
Imaginez que le site web est un immeuble.
- **Le DOM Réel** est l'immeuble physique. Modifier une fenêtre demande de casser le mur (lent).
- **Le DOM Virtuel** est le plan de l'architecte. On modifie 10 détails sur le plan en 1 seconde (rapide), puis on compare l'ancien et le nouveau plan. On n'envoie les maçons que là où c'est nécessaire.

**Exemple concret :**
Si vous avez une liste de 1000 noms et que vous changez juste une lettre sur le 500ème nom :
- **En JS classique** : On reconstruit souvent toute la liste (1000 opérations).
- **En Vue.js** : Il détecte que seul un petit bout de texte a changé et ne fait **qu'une seule mise à jour** précise.

**Résultat : Performance maximale.**

### B. La Réactivité
La réactivité signifie que si vous changez une variable dans votre code JS, l'affichage sur la page web change **automatiquement**, sans recharger la page.

**Analogie de la Feuille Excel :**
Dans Excel, si `C1 = A1 + B1`. Dès que vous modifiez `A1`, `C1` se met à jour tout seul. C'est ça la réactivité.

**Exemple concret :**
Dans un **Panier d'Achat**, dès que l'utilisateur clique sur "+" pour une quantité, le prix total en bas de page se recalcule instantanément sans aucun rafraîchissement.

---

### C. Les Composants SFC (Single File Components)
Dans Vue, tout est composant. Un fichier `.vue` contient la structure, la logique et le style.

**Analogie des LEGO :**
Construire un site web devient un assemblage de briques indépendantes. Si vous modifiez la brique "Bouton", tous les boutons du site changent d'un coup.

**Exemple concret :**
Une **Barre de Navigation (Header)**. On la crée une seule fois dans `Header.vue`. Elle est ensuite "appelée" sur toutes les pages. Si on ajoute un lien "Contact" dans ce fichier, il apparaît partout sur le site.

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
