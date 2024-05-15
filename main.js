// acessando por TAG
// no plural, vários elementos por página
let vTitulo = document.getElementsByTagName("h1");
console.log(vTitulo);

let vList = document.getElementsByTagName("li");
console.log(vList); 
console.log(vList[1]);

//acessando por ID
// no singular, um elemento por página
let vParagrafo = document.getElementById("paragrafo");
console.log(vParagrafo);


//acessando por class
// deseja acessar vários elementos, como uma regra de CSS

let vItensLista = document.getElementsByClassName("item");
console.log(vItensLista);
