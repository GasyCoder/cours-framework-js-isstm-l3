// --- MINI-PROJET : COMPTEUR DE CLICS ---

// 1. Déclarer les variables (pour stocker le score)
let score = 0;

// 2. Sélectionner les éléments du DOM (ceux du index.html)
const affichage = document.getElementById("compteur");
const btnPlus = document.getElementById("btn-plus");
const btnMoins = document.getElementById("btn-moins");

// 3. Écouter les événements (clics sur les boutons)

// Action quand on clique sur "Plus"
btnPlus.addEventListener("click", function() {
    score = score + 1; // On change la donnée (le score)
    
    // On met à jour le DOM (l'affichage)
    affichage.textContent = score;
    affichage.style.color = "#28a745"; // On change la couleur en vert
});

// Action quand on clique sur "Moins"
btnMoins.addEventListener("click", function() {
    score = score - 1; // On change la donnée (le score)
    
    // On met à jour le DOM (l'affichage)
    affichage.textContent = score;
    affichage.style.color = "#dc3545"; // On change la couleur en rouge
});
