# Exercice pratique : Créer un composant réactif

Dans cet exercice, nous allons construire un **Calculateur de Note** intelligent.

## Objectif
- Utiliser `ref()` pour la réactivité.
- Utiliser `v-model` pour lier un champ de saisie à une variable.
- Utiliser le rendu conditionnel (`v-if`) et les classes dynamiques.

## Étape 1 : Créer le fichier du composant
Dans votre projet Vue (créé lors du TP précédent), créez un fichier `src/components/CalculateurNote.vue`.

## Étape 2 : Le code du composant
Copiez et essayez de comprendre le code suivant :

```vue
<script setup>
import { ref, computed } from 'vue'

// 1. Déclaration de la variable réactive (La donnée)
const note = ref(10)

// 2. Logique automatique (Propriété calculée)
const estAdmis = computed(() => {
  return note.value >= 10
})
</script>

<template>
  <div class="calculateur">
    <h2>Calculateur de Résultat</h2>

    <!-- Liaison bidirectionnelle avec v-model -->
    <label>Entrez votre note : </label>
    <input type="number" v-model="note" min="0" max="20" />

    <!-- Affichage réactif -->
    <div class="resultat" :class="{ 'succes': estAdmis, 'echec': !estAdmis }">
      <p v-if="estAdmis">Félicitations ! Vous êtes **Admis(e)**.</p>
      <p v-else>Désolé, vous êtes **Ajourné(e)**.</p>
    </div>
  </div>
</template>

<style scoped>
.calculateur {
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
}

.resultat {
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

.succes { background-color: #d4edda; color: #155724; }
.echec { background-color: #f8d7da; color: #721c24; }
</style>
```

## Étape 3 : Utiliser le composant
Ouvrez `src/App.vue` et remplacez son contenu pour afficher votre nouveau calculateur :

```vue
<script setup>
import CalculateurNote from './components/CalculateurNote.vue'
</script>

<template>
  <main>
    <h1>Bienvenue au cours Framework JS</h1>
    <CalculateurNote />
  </main>
</template>
```

## Questions pour les étudiants (Réflexion)
1. Pourquoi utilise-t-on `.value` dans le script mais pas dans le template ?
2. Que se passe-t-il si vous tapez "15" dans le champ ? Expliquez le chemin de la donnée (du champ vers la variable, puis vers le calcul de l'admission).
