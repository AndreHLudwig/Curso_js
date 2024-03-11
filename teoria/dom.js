//DOM - Document Object Model

//Selecionar Elementos
const elmentoPorId = document.getElementById("meuId");

console.log(elmentoPorId);

const elementoPorId2 = document.querySelector("#meuId");

console.log(elementoPorId2);

const elementPorClasse = document.getElementsByClassName("minhaClasse");

console.log(elementPorClasse);

const elementPorClasse2 = document.querySelector(".minhaClasse");

console.log(elementPorClasse2);

//Manipular conteúdo de texto
const element = document.querySelector("#meuId");

console.log(element.textContent);

setTimeout(() => {
    element.textContent = "Mudei de texto";
}, 2000);

//trabalhando com atributos
const link = document.querySelector("a");

console.log(link);

link.setAttribute("href", "https://www.udesc.br/ceavi");

console.log(link.getAttribute("href"));

console.log(link.hasAttribute("href"));

link.removeAttribute("href");

//Manipulação de classes do CSS
const elemento = document.querySelector("#meuId");

elemento.classList.add("novaClasse");
elemento.classList.remove("novaClasse");

element.classList.toggle("outraClasse");
element.classList.toggle("outraClasse");

//Manipular o CSS
const elemento3 = document.querySelector("#meuId");

elemento3.style.color = "blue";
elemento3.style.backgroundColor = "silver";

//background-color => babackgroundColor

//Navegação entre nós
const elemento4 = document.querySelector("#meuInput");

// Obtendo o elemento pai
const pai = elemento4.parentNode;

console.log(pai);

//obter o primeiro filho
const primeiroFilho = pai.firstChild;

console.log(primeiroFilho);

const ultimoFilho = pai.lastChild;

console.log(ultimoFilho);

//Manipulação de estrutura do DOM
const novoElemento = document.createElement("div");

console.log(novoElemento);

novoElemento.textContent = "Minha div de JavaScript";

console.log(novoElemento);

//Adicionar elemento via document
document.body.appendChild(novoElemento);
document.body.insertBefore(novoElemento, pai);

document.body.removeChild(elmentoPorId);

//Eventos
const botao = document.querySelector("button");

botao.addEventListener("click", function(){
    console.log("Botão clicado!");
});

//Mouse
const elemento5 = document.querySelector("#meuFormulario");

elemento5.addEventListener("mouseover", function(){
    console.log("O mouse passou aqui!");
});

const campoInput = document.querySelector("#meuInput");

campoInput.addEventListener("keydown", function(){
    console.log("Tecla pressionada!");
});

//formulario

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    console.log("Formulário enviado!");
});

//propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function (){
    console.log("Clique capturado no pai");
});

document.querySelector("#elementoFilho").addEventListener("click", function (event){
    //event.stopPropagation(); //para a propagação de eventos

    console.log("Elemento Filho");
});

document.querySelector("#meuLink").addEventListener("click", function(event){
    event.preventDefault();

    console.log("Clicou no link!");
});

//delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(){
    if(event.target.matches(".classeDosFilhos")){
        console.log("Evento delegado para o filho!")
    }
});
