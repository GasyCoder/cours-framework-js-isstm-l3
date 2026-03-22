# Glossaire du DOM (Document Object Model)

Ce glossaire regroupe les concepts et méthodes essentiels pour manipuler le HTML avec JavaScript.

---

### 1. Concepts Fondamentaux
*   **DOM (Document Object Model)** : Interface de programmation qui représente une page HTML comme un arbre d'objets. Chaque balise, texte ou attribut est un "nœud" manipulable.
*   **Nœud (Node)** : L'unité de base de l'arbre DOM. Types principaux : *Élément* (balises), *Texte* (contenu), *Attribut*.
*   **Document** : L'objet racine représentant toute la page web (`document.xxx`).

---

### 2. Sélection (Trouver des éléments)
*   **`getElementById("id")`** : Récupère l'élément unique ayant l'ID spécifié.
*   **`querySelector("sélecteur")`** : Récupère le **premier** élément correspondant à un sélecteur CSS (`#id`, `.classe`, `balise`).
*   **`querySelectorAll("sélecteur")`** : Récupère **tous** les éléments correspondants sous forme de `NodeList`.
*   **`getElementsByClassName("classe")`** : Récupère tous les éléments possédant une classe spécifique.

---

### 3. Modification (Contenu et Style)
*   **`textContent`** : Récupère ou définit le texte brut (sécurisé).
*   **`innerHTML`** : Récupère ou définit le contenu HTML (permet d'insérer des balises).
*   **`value`** : Propriété pour les formulaires (`input`, `textarea`) pour récupérer la saisie.
*   **`style`** : Modifie le CSS en ligne (ex: `el.style.backgroundColor = "red"`).
*   **`classList`** : Gère les classes CSS :
    *   `.add("classe")` : Ajouter.
    *   `.remove("classe")` : Supprimer.
    *   `.toggle("classe")` : Alterne l'ajout/suppression.

---

### 4. Événements (Interactivité)
*   **`addEventListener("type", callback)`** : Attache une fonction à un événement.
*   **`click`** : Déclenché au clic.
*   **`input` / `change`** : Déclenchés lors de la modification d'un champ.
*   **`submit`** : Déclenché à l'envoi d'un formulaire.
*   **`event` (ou `e`)** : Objet contenant les détails de l'événement (ex: `e.target`).

---

### 5. Structure et Navigation
*   **`createElement("balise")`** : Crée un nouvel élément en mémoire.
*   **`appendChild(enfant)`** : Ajoute un élément à la fin d'un parent.
*   **`remove()`** : Supprime l'élément du DOM.
*   **`parentElement`** : Accède au parent direct.
*   **`children`** : Liste des enfants directs.

---

### Résumé de la méthode de travail :
1.  **Sélectionner** : `const el = document.querySelector(".ma-classe");`
2.  **Écouter** : `el.addEventListener("click", () => { ... });`
3.  **Modifier** : `el.textContent = "Nouveau texte";`
