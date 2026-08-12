let name = "Stanley"
let age = '22'
let university = `UNN`  //template literals


console.log(name.length); //length of string
console.log(name.toUpperCase()); //uppercase
console.log(name.toLowerCase()); //lowercase
console.log(university[10]); //indexing
name[0] = 'j' //strings are immutable
console.log(name); //Stanl
console.log(university.firstIndexOf);

console.log(name.indexOf('a')); //index of a character

//slicing
console.log(name.slice(0,3));

let fullname = "prof. simon"
capitals = fullname.toUpperCase().slice.arguments