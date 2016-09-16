#!/usr/bin/env node
/* KEY-POINT === MUTABILITY == 004-mutability.js
*/

let decouper = (aliments) => `morceaux de ${aliments}`;
let sansFrite = (aliment) => aliment !== "🍟";
let sansOignon = (aliment) => aliment !== "😭";

let aliments = [
    "🍞"
  , "🍃"
  , "🍅"
  , "🍖"
  , "🍟"
  , "😭"
]

aliments[5] = "🍌"; // mutability is bad

let ingredients =
  aliments
    .filter(sansFrite)
    .filter(sansOignon)
    .map(decouper)

let kebab = ingredients.reduce((resultatIntermediaire, ingredient) => {
  return resultatIntermediaire + ingredient + " "
}, "🌮 avec: ")

console.log(kebab)
// who is the 💥💀 who put 🍌 in my 🌮 ❓
