#!/usr/bin/env node
/* KEY-POINT === IMMUTABILITY === 005-immutability.js
  avoid mutability
  use immutable data
*/

let decouper = (aliments) => `morceaux de ${aliments}`;
let sansFrite = (aliment) => aliment !== "🍟";
let sansOignon = (aliment) => aliment !== "😭";

let bananesAlaPlaceDesOignons =
  (aliment) => aliment == "😭" ? "🍌" : aliment

let aliments = [
    "🍞"
  , "🍃"
  , "🍅"
  , "🍖"
  , "🍟"
  , "😭"
]

// the best recipe
let mesIngredientsPreferes =
  aliments
    .filter(sansFrite)
    .filter(sansOignon)
    .map(decouper)

let iWantSomethingSpecial =
  aliments
    .map(bananesAlaPlaceDesOignons) // (⏩ new list) ne pas toucher directement aux aliments
    .filter(sansFrite)
    .map(decouper)

let bananesKebab = iWantSomethingSpecial.reduce((resultatIntermediaire, ingredient) => {
  return resultatIntermediaire + ingredient + " "
}, "😜 🌮 avec: ")

let kebab = mesIngredientsPreferes.reduce((resultatIntermediaire, ingredient) => {
  return resultatIntermediaire + ingredient + " "
}, "🌮 avec: ")

console.log(bananesKebab)
console.log(kebab)
