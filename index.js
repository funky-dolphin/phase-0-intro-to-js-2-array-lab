// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(appendCat){
    appendCat= cats.push("Ralph")
}
function destructivelyPrependCat(prependCat){
    prependCat=cats.unshift("Bob")
}
function destructivelyRemoveLastCat(removeLastCat){
    removeLastCat=cats.pop()
}
function destructivelyRemoveFirstCat(removeFirstCat){
    removeFirstCat=cats.shift()
}
function appendCat(name) {
    let newCats = cats.slice();
    newCats.push(name);
    return newCats;
}
function prependCat(name){
    let newCats = [name,...cats]
    return newCats
}
function removeLastCat() {
    let newCats = cats.slice();
    newCats.pop();
    return newCats;
}
function removeFirstCat(){
    let newCats = cats.slice();
    newCats.shift()
    return newCats
}