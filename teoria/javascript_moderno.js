// ES6+ => versão do javascricpt
//let e const
let n = 10;
n = 20;

const x = 15;

function testeVar(){
    var x = 1;
    if(true){
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

function testeLet(){
    let x = 1;
    if(true){
        let x = 2;
        console.log(x);
    }
    console.log(x);
}//As chaves separam os blocos quando falamos de let e const, ao contrário de var

testeVar();
testeLet();

//Arrow function
const soma = (a,b) => a + b;

console.log(soma(3, 5));

const quadrado = (numero) => numero * numero;

console.log(quadrado(7));

const cumprimento = (nome) => {
    const mensagem = `Alô, ${nome}!`;
    return mensagem;
}

console.log(cumprimento("Magnata"));


//Template literals
const nome2 = "Maria";
const nome3 = "Eduarda"
const idade = 22;

console.log(`O nome dela é ${nome2} e ela tem ${idade} anos!`);
console.log(`O nome dela é ${nome3} e ela tem ${8 + 7 + 9} anos!`);

//Destructuring -> Desestruturação
const pessoa = {nome: "Zeca", anos: 43, profissao: "Programador"};

const { nome: novoNome, novaIdade: anos, profissao} = pessoa; //objeto

console.log(novoNome, profissao);

const numeros = [1,2,3,4]; //array

const [primeiro, segundo, terceiro] = numeros;

console.log(primeiro, segundo, terceiro);
console.log(segundo + 5);

//Spread operator => espalhamento
const array1 = [1,2,3];
const array2 = [...array1, 4, 5, 6, 7, 8, 9, 10];

console.log(array2);

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0);

console.log(soma2(1, 2, 3, 4, 5, 6, 7));

//default parameters
function saudacao(nome = "visitante"){
    console.log(`Olá, ${nome}`);
}

saudacao();
saudacao("André");

//object literals enhancements
//{nome: "Andre"}

const nomeNovo = "Felipe";
const idadeNova = 25;

const pessoaNova = {nome: nomeNovo, idade: idadeNova};
console.log(pessoaNova);

const saudacaoObject = {
    dizerOi(){
        console.log("Oi")
    }
}

saudacaoObject.dizerOi();

//Classes e Heranças
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        console.log(`Olá pessoal, meu nome é ${this.nome}`);
    }
}

const joao = new Pessoa("João", 33);

console.log(joao);

joao.falar();

const pedro = new Pessoa("Pedro", 33);

class Funcionario extends Pessoa{
    constructor(nome, idade, salario){
        super(nome, idade)
        this.salario = salario;
    }
    falarFuncionario(){
        super.falar();
        console.log(`Eu ganho R$ ${this.salario}`);
    }
}

const mario = new Funcionario("Mario", 44, 3200);

console.log(mario);
mario.falar();
mario.falarFuncionario();