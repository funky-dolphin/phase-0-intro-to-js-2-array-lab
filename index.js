const cats = ["Milo", "Otis", "Garfield"]

function ArrayFunctions(){
    cats.length=0
    cats.push("Milo", "Otis", "Garfield")
}ArrayFunctions()

function destructivelyAppendCat(){
    cats.push("Ralph")
  }

function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
   let newCats=cats.slice()
    newCats.push(name)
    return newCats
} appendCat("Broom")


function prependCat(name){
    let newCats = cats.slice()
    newCats.unshift(name)
    return newCats
}prependCat("Ralph")

function removeLastCat(){
    let newCats=cats.slice(0,2)
    return newCats
}

function removeFirstCat(){
    let newCats=cats.slice(1)
    return newCats
}