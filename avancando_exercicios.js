// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.

const compras = [];
compras.push("Queijo", "Arroz", "Pipoca", "Carne", "Banana");
console.log(compras);
compras.shift();
console.log(compras);

// Exercício de Manipulação de Array - find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42].
// Use a função find() para encontrar o primeiro número que é divisível por 7
// e maior que 10.

const numeros = [3, 7, 14, 21, 29, 36, 42];
const result = numeros.find((num) => num % 7 == 0 && num > 10);
console.log(result);

// Exercício de Manipulação de Array - filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40].
// Use a função filter() para criar um novo array que contenha apenas os números
// que são maiores que 20.

const numeros2 = [5, 10, 15, 20, 25, 30, 35, 40];
const filtrados = numeros2.filter((num) => num > 20);
console.log(filtrados);

// Exercício de Manipulação de String - split(), trim()

// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string e,
// em seguida, divida a string em palavras.

const phrase = " Bom dia, mundo! ";
const palavras = phrase.trim().split(" ");
console.log(palavras);

// Exercício de Manipulação de String - startsWith(), endsWith()

// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const StringRome = "O rato roeu a roupa do rei de Roma";
if(StringRome.startsWith("O")){
    console.log("A frase incia com 'O'!");
} else {
    console.log("A frase não incia com 'O'!");
};

if(StringRome.endsWith("Roma")){
    console.log("A frase incia com 'Roma'!");
} else {
    console.log("A frase não incia com 'Roma'!");
};