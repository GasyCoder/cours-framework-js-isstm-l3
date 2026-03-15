# TP Pratique : Ma Liste de Tâches Dynamique 

**Objectif :** Créer une application simple qui permet d'ajouter des tâches à une liste, de les marquer comme "faites" et de les supprimer.

Ce TP utilise tout ce que vous avez vu : **Variables, Fonctions, DOM et Événements.**

---

## 1. Préparation (HTML/CSS)

Copiez ce code dans votre fichier **`tp-liste.html`** pour avoir une base propre.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP - Liste de Tâches</title>
    <style>
        body { font-family: sans-serif; display: flex; justify-content: center; padding: 50px; background: #f0f2f5; }
        .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); width: 350px; }
        h1 { text-align: center; color: #333; }
        .input-group { display: flex; gap: 10px; margin-bottom: 20px; }
        input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
        button#add-btn { padding: 10px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; }
        ul { list-style: none; padding: 0; }
        li { 
            background: #fff; border-bottom: 1px solid #eee; padding: 10px; 
            display: flex; justify-content: space-between; align-items: center; 
        }
        li:last-child { border-bottom: none; }
        .done { text-decoration: line-through; color: gray; }
        .delete-btn { background: #ff4d4d; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Mes Tâches</h1>
        <div class="input-group">
            <input type="text" id="task-input" placeholder="Quelle tâche faire ?">
            <button id="add-btn">Ajouter</button>
        </div>
        <ul id="task-list">
            <!-- Les tâches s'afficheront ici -->
        </ul>
    </div>
    <script src="tp-script.js"></script>
</body>
</html>
```

---

## 2. Le travail à faire (dans `tp-script.js`)

### Étape 1 : Sélectionner les éléments
Dans votre fichier **`tp-script.js`**, commencez par sélectionner :
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
