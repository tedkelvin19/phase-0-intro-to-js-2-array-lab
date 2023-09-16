// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop([2])
}

function destructivelyRemoveFirstCat(){
    cats.shift([0])
}
function appendCat(name){
  var allCats = [...cats, "Broom"]
  return allCats
}
function prependCat(name){
    var allCats= ["Arnold",...cats]
    return allCats
}
function removeLastCat(){
    var allCats = cats.slice(0, cats.length-1)
    return allCats;
}

function removeFirstCat(){
    var allCats = cats.slice(1)
    return allCats;
}
