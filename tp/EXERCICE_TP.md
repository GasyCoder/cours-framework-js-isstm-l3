# TP Pratique : Ma Liste de Tâches Dynamique 

**Objectif :** Créer une application simple qui permet d'ajouter des tâches à une liste, de les marquer comme "faites" et de les supprimer.

Ce TP utilise tout ce que vous avez vu : **Variables, Fonctions, DOM et Événements.**

---

## 1. Préparation (HTML/CSS)

Copiez ce code dans votre fichier **`tp-liste.html`** pour avoir une base propre.

---

## 2. Le travail à faire (dans `js/script.js`)

### Étape 1 : Sélectionner les éléments
Dans votre fichier **`js/script.js`**, commencez par sélectionner :
- L'input texte (`#task-input`)
- Le bouton ajouter (`#add-btn`)
- La liste `<ul>` (`#task-list`)

### Étape 2 : Écouter le clic
Ajoutez un `addEventListener` sur le bouton "Ajouter" pour déclencher une fonction quand on clique.

### Étape 3 : La logique d'ajout
Dans votre fonction :
1. Récupérez la valeur tapée dans l'input.
2. **Condition :** Si l'input n'est pas vide :
   - Créez un élément `<li>`.
   - Mettez le texte de la tâche à l'intérieur.
   - Ajoutez ce `<li>` à la liste `<ul>` (utilisez `appendChild`).
   - Videz le champ de texte pour la prochaine tâche.
3. **Bonus :** Si l'input est vide, affichez une `alert("Veuillez écrire une tâche !")`.

### Étape 4 : Marquer comme "Fait" (Optionnel - Niveau Moyen)
Lors de la création du `<li>`, ajoutez-lui un écouteur de clic qui lui ajoute/enlève la classe CSS `.done` (utilisez `classList.toggle("done")`).

### Étape 5 : Supprimer une tâche (Niveau Moyen+)
1. À chaque création de tâche, créez aussi un bouton "Supprimer" (`<button class="delete-btn">`).
2. Ajoutez ce bouton à l'intérieur du `<li>`.
3. Ajoutez un clic sur ce bouton de suppression pour retirer le `<li>` de la page (utilisez `element.remove()`).

---

## 3. Objectif Final
Votre application doit permettre d'ajouter des tâches à l'infini, de les barrer en cliquant dessus, et de les supprimer avec le bouton rouge.

**Bonne chance !** 
