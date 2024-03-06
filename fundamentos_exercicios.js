//Exercícios de fundamentos

//Exercício 1: Olá, Mundo!
//Crie um script que imprima "Olá Mundo!" no console

console.log("Olá, Mundo!");

//Exercício 2: Conversão de tipos
//Dado o valor de uma String "1234", converta-o em um número e exiba o tipo da variável no console.

const stringValue = "1234";
const itConverted = Number(stringValue);
//const itConverted = +stringValue;

console.log(itConverted);
console.log(typeof(itConverted));

//Exercício 3: Manipulação de Strings
//Dado uma String "JavaScript é incrível", escreva um código que conte quantos caracteres a String tem e quantas palavras existem na frase.

const minhaString = "JavaScript é incrível"
const caracterNumber = minhaString.length;
console.log(`O número de caracteres é: ${caracterNumber}`);

const wordsNumber = minhaString.split(" ").length;
console.log(`O número de palavras é: ${wordsNumber}`);

//Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const nameArray = ["André", "Eduarda", "Maria", "Mateus", "Ellen"];

for(let u = 0; u < nameArray.length; u++){
    console.log(nameArray[u]);
}

// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). 
//  A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). 
//  Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

function conversaoDeHoras(horario24){
    // 14:20 => hora = 14, minuto = 20 => split()
    //const hora = horario24.split(":")[0]
    //const minuto = horario24.split(":")[1]

    const[hora,minuto] = horario24.split (":");
    // 15/12 = 3, 23 % 12 = 11
    // Falsy 12 % 12 = 0 => 12
    const hora12 = hora % 12 || 12;

    let periodo = "AM";

    if (hora > 12){
        periodo = "PM";
    }

    console.log(`${hora12}:${minuto} ${periodo}`);
}

conversaoDeHoras("15:18");
conversaoDeHoras("23:25");
conversaoDeHoras("08:34");