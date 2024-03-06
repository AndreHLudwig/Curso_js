//Fundamentos
// var nome = "valor";
var minhaVariavel = "Olá, Programador";

console.log(minhaVariavel);
/*
Comments
*/
var meuNumero = 10;

console.log(meuNumero);
console.log(meuNumero + 5);
console.log("10" + 5);

//checagem tipo de variável
console.log(typeof meuNumero);

var boolean = true; //false
console.log(typeof boolean);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log (meuObjeto);
console.log (meuArray);
console.log (meuNull);
console.log (meuUndefined);

//let e const
//Outras formas de declarar variáveis
let x = 10;
const y = 5;

console.log(typeof x);

console.log (x, y);

//Operadores aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//Operadores de comparação
console.log(x == y);
console.log(x != y);

console.log("5" == 5);
console.log("5" === 5); //tipo de dado
console.log("5" !== 5);

//Operadores lógicos
// AND &&
// OR ||
console.log (10 > 5 && 20 > 5);
console.log (10 > 5 && 20 < 5);
console.log (10 < 5 && 20 < 5);

console.log (10 > 5 || 20 > 5);
console.log (10 > 5 || 20 < 5);
console.log (10 < 5 || 20 < 5);

//Conversão de tipos

const meuNumero2 = "123";
const meuNumeroConvertido = Number(meuNumero2);

console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

// Estrutura de condição - if, else, else if

const idade = 16;

if (idade < 13){
    console.log("Criança");
} else if (idade < 20){
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

//Switch

const fruta = "Melão";

switch(fruta){
    case "Banana":
        console.log ("Banana é a fruta!");
        break;
    case "Maçã":
        console.log ("Maça é a fruta!");
        break;
    case "Abacaxi":
        console.log ("Abacaxi é a fruta!")
        break;
        default:
            console.log("Fruta não encontrada!");
}

//Estruturas de repetição
//contador, condição de limite, incremento
for(let x = 0; x < 5; x++){
    console.log("O valor de x é:" + x);
}

let i = 0;
while (i < 5){
    console.log("O valor de i é:" + i);

    i++;
}

//do while

let j = 0;

do{
    console.log ("O valor de j é:" + j);

    j++;
} while(j < 5);

//Funções
//function nome (arg1, arg2) {corpo da função};

function cumprimentar (nome){
    console.log("Olá, " + nome + "!");
}

cumprimentar("André");

//escopo de variáveis

let cor = "azul";

function showColor(){
    let cor = "verde";
    console.log(cor);
}

console.log(cor);
showColor();

//------------------------------------------------------------//
//hoisting = içamento
testeHoisting();

function testeHoisting(){
    console.log("Deu certo!");
}

//arrow function
const testeArrow = () => console.log("Isso também é uma função");

testeArrow();

//truthy e falsy
const minhaVariavel1 = ""; //falsy
const minhaVariavel2 = "Something"; //truthy

if(minhaVariavel1){
    console.log("É verdadeiro!");
} else {
    console.log("É falso!");
}

if(minhaVariavel2){
    console.log("É verdadeiro!");
} else {
    console.log("É falso!");
}

//array, listas
const numeros = [1,2,3,4,5];

console.log(numeros);

console.log(numeros[0]);
console.log(numeros[2]);

numeros.push(6);
console.log(numeros);

//prototype => OBJETO => objeto2
//Array => nossos arrays

numeros.pop();
console.log(numeros);

//strings
const minhaStringNova = "Hello, Word!";
//concatenação = +
const minhaString3 = minhaStringNova + " Como você está?";

console.log(minhaString3);

//Interpolação

const minhaString4 = `${minhaStringNova} Como você está?`;
console.log(minhaString4);

console.log(minhaString4.length); //qtd de carecteres
console.log(minhaString4[7]);
console.log(minhaString4.toLocaleUpperCase());

//Data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

//Math
console.log(Math.PI);

console.log(Math.round(3.6));

console.log(Math.sqrt(25));

console.log(Math.pow(6,2));

