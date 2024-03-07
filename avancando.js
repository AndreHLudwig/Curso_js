//Avançando em Javascript

//Manipulção de arrays
const frutas = ["Maça", "Laranja"];

frutas.unshift("Mamão");
console.log(frutas);

//unshift adiciona no começo, push adiciona ao fim do array

frutas.shift();
//pop remove do fim, shift remove do começo;

console.log(frutas);

//map, filter, reduce -> arrow function

const numeros = [1, 2, 3, 4, 5, 6];

//find => retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num %2 === 0);
console.log(numeroPar);

//filter => retorna todos os elemntos verdadeiros ao critério
const numerosPares = numeros.filter((num) => num % 2 ===0);
console.log(numerosPares);

//Manipulação de Strings
const frase = " Olá, mundo!  ";

const palavra = frase.trim();
//const palavra = frase.trim().split(" ");
console.log(frase);
console.log(palavra);

const frase2 = "JavaScript é incrível!";

console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("!"));

//Exceções e tratamento de erros
const idade = 15;

// if(idade < 18){
//     throw new Error ("Você deve ter pelo menos 18 anos")
// }

try {
    const idade = 15;
    if(idade < 18){
        throw new Error ("Você deve ter pelo menos 18 anos");
    }
} catch (error) {
    console.log(error.message)
}

console.log ("continuando o programa...");

//Callback => função
function cumprimentar(nome, callback){
    console.log("Olá, " + nome);
    callback();
}

function mostrarSaudacao(){
    console.log("Como você está?");
}

cumprimentar("André", mostrarSaudacao);

cumprimentar("Maria", function (){
    console.log("Tá tudo bem?");
})

//settimeout => dps de um tempo algo é executado, uma vez

function exibirMensagem(){
    console.log("Essa mensagem será exibida após 3s");
}

//1000ms = 1s
setTimeout(exibirMensagem, 3000);

setTimeout(function(){
    console.log("Oi")
})

//Promises
const promessa = new Promise((resolve, reject) => {
    const condicao = true;
    if (condicao) {
      resolve("A condição é verdadeira!");
    } else {
      reject("A condição é falsa!");
    }
  });
  
  promessa.then((mensagem) => console.log(mensagem)) // "A condição é verdadeira!"