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