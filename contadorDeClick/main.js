const buttonInc = document.querySelector("#incrementButton");
const buttonDec = document.querySelector('#decrementButton');
const buttonZera = document.querySelector('#resetButton');
const countShow = document.querySelector("#counter");

let contador = 0;

function incrementaContador() { 
    contador++;
    countShow.innerHTML = contador;
}    


function decrementaContador() { 
    --contador;
    countShow.innerHTML = contador;
}  

function zeraContador() { 
    contador = 0;  
    countShow.innerHTML = contador;
}  

buttonInc.addEventListener("click",incrementaContador);
buttonDec.addEventListener("click",decrementaContador);
buttonZera.addEventListener("click",zeraContador );
