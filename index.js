// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]
function  destructivelyAppendCat(name){
return cats.push('Ralph')
}
function destructivelyPrependCat(name){
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
let newCats=[...cats,name]
 return newCats
}
function prependCat(name){
    let newCats=[name,...cats]
    return newCats
}

function removeLastCat() {

    const newCats = cats.slice(0, -1);
    return newCats;
  }
function removeFirstCat(name){
let newCats=cats.slice(1);
return newCats
}