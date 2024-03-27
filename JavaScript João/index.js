// 1. Declarar uma variável com o seu nome
var nome1 = "João";
// 2. Declarar uma variável com o seu sobrenome 
var sobrenome = "Carvalho";
// 3. Declarar uma variável nomeCompleto atribuindo os valores das variaveis nome e sobrenome
var nomeCompleto = "João Carvalho";
// 4. Declarar uma variável com a sua idade 
let idade = 16;
// 5. Declarar uma variável com a sua comida favorita e não atribuir valor
let pizza = null;
// 6. Atribuir valor a sua comida favorita 
let comidaFavorita = pizza;
// 7. Verifique o erro na variavel criada abaixo que utiliza Template String:
const frase = `Olá, eu sou ${nomeCompleto} e tenho ${idade} anos`;
console.log(frase);

// 8. Verifique o tipo da variável que contém o seu nome. Dica: console.log(typeof nomeDaVariavel)
console.log(typeof nomeCompleto);
// Dica saber mais sobre operadores: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators
// 9. Qual o resultado da seguinte expressão?
const total = 10 + 5 * 2 / 2 + 20;
console.log(total);
// 10. Somar a string '200' com o número 50 e retornar 250
let resultadosoma = Number('200') + 50
let resultadosoma1 = +"200" + 51
let resultadosoma2 = parseInt("200");
console.log(resultadosoma);
console.log(resultadosoma1);
// 11. Incremente o número 5 e retorne o seu valor incrementado
let x = 7
let incremento = x+=1
console.log(incremento);
// 12. Verifique se a sua idade é maior do que a de algum parente, dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let idadeDoParente = 47

if (idade > idadeDoParente) {
    console.log("É maior");
} else if (idade < idadeDoParente){
    console.log("É menor");
} else {
    console.log("É igual");
}
// 13. Qual valor é retornado na seguinte expressão?
const expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// 3 && "5" && 3
// 14. O que irá aparecer no console?

if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// 15. O que irá aparecer no console?

if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}

// 16. Crie uma função que receba como parametro o peso e a altura, e retorne o imc. Dica: calculo para imc: peso / (altura ** 2);
let altura = 1.72;
let peso = 90;
let imc = peso / (altura ** 2);
console.log("Seu Imc é:",imc);
// 17. Crie uma função que verifica se um número é par, e retorne uma mensagem contendo o numero escolhido e se é ou nao par.
function parOuimpar(num){
if (num % 2 === 0) {
    return "O número "+ num + " é par"
} else {
    return "O número "+ num + " não é par"
}
}

let resultado = parOuimpar(27);
console.log(resultado)
// 18. Crie uma função que retorne o tipo de dado do argumento passado nela. Dica use o typeof para verificar o tipo
function tipodedado (dado) {
    return typeof dado;
}

let dado1 = tipodedado(17);
let dado2 = tipodedado("Boa noite");
console.log(dado1 + " " + dado2);
// Dica: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// 19. Crie uma função que receba um nome e retorne uma mensagem de saudação para o usuario (bom dia/boa tarde/boa noite fulano!) de acordo com o horario
function saudacao(nome) {
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >= 5 && hora <12) {
        return "Bom Dia " + nome;
    } else if (hora >= 12 && hora < 18) {
        return "Boa Tarde " + nome
    } else {
        return "Boa Noite " + nome
    }
}

const nomeUsuario = "Fulano";
console.log(saudacao(nomeUsuario));
// 20. Crie uma função que me informe a data de hoje quando chamada
function getdatadehoje () {
    const hoje = new Date();
    return hoje.toDateString();
}
console.log(getdatadehoje());