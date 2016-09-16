#!/usr/bin/env node
/* KEY-POINT === NO ITERATIONS === 003-no-iterations.js
  More "functional style"
  don't iterate, (for, while) to transform data
  -> use map, reduce, filter
*/

// === préparer un Kebab ===

function decouper(aliments)  {
  return `morceaux de ${aliments}`;
}
function sansFrite(aliment) {
  return aliment !== "🍟";
}
function sansOignon(aliment) {
  return aliment !== "😭";
}

let aliments = [
    "🍞"
  , "🍃"
  , "🍅"
  , "🍖"
  , "🍟"
  , "😭" // 😡 pas d'emoji oignons
]

// ingrédients pour faire mon Kebab
let ingredients =
  aliments
    .filter(sansFrite)    // ⏩ new list
    .filter(sansOignon)   // ⏩ new list
    .map(decouper)        // ⏩ new list (transformer en un autre [])

console.log("ingrédients:", ingredients)

// ⚡️ combiner les ingredients
let kebab = ingredients.reduce(function(resultatIntermediaire, ingredient) {
  return resultatIntermediaire + ingredient + " "
}, "🌮 avec: ")

console.log(kebab)
