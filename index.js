function acionarQuestao01() {
  const numero = Number (document.getElementById("input01").value);
  const retorno = document.getElementById("resultado01");

  if (numero % 2 === 0) {
    retorno.innerText = ("O número é par");
  }
  else {
    retorno.innerText = ("O número é ímpar");
    return;
  }
}

function acionarQuestao02() {
  const numero1 = Number (document.getElementById("input02").value);
  const numero2 = Number (document.getElementById("input02-2").value);
  const retorno = document.getElementById("resultado02");

  if (numero1 > numero2) {
    retorno.innerText = (`${numero1} é maior que ${numero2}`);
  }
  else if (numero1 < numero2) {
    retorno.innerText = (`${numero2} é maior que ${numero1}`);
  }
  else {
    retorno.innerText = ("Os números são iguais");
    return;
  }
}

function acionarQuestao03() {
  const data = document.getElementById("input03").value;
  const dataAtual = new Date();
  const anoInserido = new Date(data).getFullYear();
  const anoAtual = dataAtual.getFullYear();
  const idade = anoAtual - anoInserido;
  const retorno = document.getElementById("resultado03");

  if (idade > 150 || idade < 0) {
    retorno.innerText = ("Idade inválida");
    return;
  }

  if (idade >= 16) {
    retorno.innerText = (`A pessoa tem ${idade} anos e pode votar`);
  }
  else {
    retorno.innerText = (`A pessoa tem ${idade} anos e não pode votar`);
    return;
  }
}

function acionarQuestao04() {
  const salario = Number (document.getElementById("input04").value);
  const reajuste = Number (document.getElementById("input04-2").value);
  const aumento = (salario * reajuste) / 100;
  const novoSalario = salario + aumento;
  const retorno = document.getElementById("resultado04");

  if (novoSalario < 0) {
    retorno.innerText = ("Salario inválido");
    return;
  }

  retorno.innerText = (`O novo salário é R$ ${novoSalario.toFixed(2)}`);
}

function acionarQuestao05() {
  const dia = Number (document.getElementById("input05").value);
  const retorno = document.getElementById("resultado05");

  switch (dia) {
    case 1:
      retorno.innerText = ("Domingo");
      break;
    case 2:
      retorno.innerText = ("Segunda-feira");
      break;
    case 3:
      retorno.innerText = ("Terça-feira");
      break;
    case 4:
      retorno.innerText = ("Quarta-feira");
      break;
    case 5:
      retorno.innerText = ("Quinta-feira");
      break;
    case 6:
      retorno.innerText = ("Sexta-feira");
      break;
    case 7:
      retorno.innerText = ("Sábado");
      break;
    default:
      retorno.innerText = ("Dia inválido");
      return;
  }
}

function acionarQuestao06() {
  const numero = Number (document.getElementById("input06").value);
  const retorno = document.getElementById("resultado06");
  let contador = 0;
  let resultado = [];

  if (numero < 0) {
    retorno.innerText = ("Número inválido");
    return;
  }

  while (contador <= numero) {
    resultado.push(contador);
    contador++;
  }

  retorno.innerText = (`${resultado.join(", ")},`);
}

function acionarQuestao07() {
  const numero = Number (document.getElementById("input07").value);
  const retorno = document.getElementById("resultado07");
  let soma = 0;

  if (numero < 0) {
    retorno.innerText = ("Número inválido");
    return;
  }

  for (let i = 0; i < numero; i++) {
    soma += i;
  }

  retorno.innerText = (`A soma de todos os números de 0 até ${numero} é: ${soma}`);

}

function acionarQuestao08() {
  const numero = Number (document.getElementById("input08").value);
  const retorno = document.getElementById("resultado08");
  let listaImpar = [];

  for (let i = 1; i < numero; i++) {
    if (i % 2 != 0) {
      listaImpar.push(i);
    }
  }
  if (listaImpar.length === 0) {
    retorno.innerText = ("Não há números ímpares");
    return;
  }
  retorno.innerText = (`Os números ímpares são: ${listaImpar.join(", ")}`);
}

function acionarQuestao09() {
  const numerosString = document.getElementById("input09").value;
  const retorno = document.getElementById("resultado09");
  const numeros = numerosString.split("-").map(Number);

  if (numeros.some(numero => !Number.isInteger(numero))) {
    retorno.innerText = ("Todos os números devem ser inteiros.");
    return;
  }

  const soma = numeros
    .filter(numero => numero < 30)
    .reduce((acumulador, numero) => acumulador + numero, 0);

    retorno.innerText = (`A soma dos números menores que 30 é: ${soma}`);
}

function acionarQuestao10() {
  const numerosString = document.getElementById("input10").value;
  const numeros = numerosString.split("/").map(Number);
  const retorno = document.getElementById("resultado10");

  if (numeros.some(numero => !Number.isInteger(numero))) {
    retorno.innerText = ("Todos os números devem ser inteiros.");
    return;
  }

  const maioresQue50 = numeros.filter(numero => numero > 50);

  retorno.innerText = (`A quantidade de números maiores que 50 é: ${maioresQue50.length}`);
}

function acionarQuestao11() {
  const string = document.getElementById("input11").value;
  const retorno = document.getElementById("resultado11");
  let stringInvertida = "";

  if (string.length === 0) {
    retorno.innerText = ("A string não pode estar vazia.");
    return;
  }

  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }

  retorno.innerText = (`A string invertida é: ${stringInvertida}`);
}

function acionarQuestao12() {
  const string = document.getElementById("input12").value;
  const retorno = document.getElementById("resultado12");

  if (string.length === 0) {
    retorno.innerText = ("A string não pode estar vazia.");
    return;
  }

  if (string.length === 1) {
    retorno.innerText = (`Resultado: ${string.toUpperCase()}`);
    return;
  }

  const resultado =
    string[0].toUpperCase() +
    string.slice(1, -1) +
    string[string.length - 1].toUpperCase();

    retorno.innerText = (`Resultado: ${resultado}`);
}










document.getElementById("btn01").addEventListener("click", acionarQuestao01);
document.getElementById("btn02").addEventListener("click", acionarQuestao02);
document.getElementById("btn03").addEventListener("click", acionarQuestao03);
document.getElementById("btn04").addEventListener("click", acionarQuestao04);
document.getElementById("btn05").addEventListener("click", acionarQuestao05);
document.getElementById("btn06").addEventListener("click", acionarQuestao06);
document.getElementById("btn07").addEventListener("click", acionarQuestao07);
document.getElementById("btn08").addEventListener("click", acionarQuestao08);
document.getElementById("btn09").addEventListener("click", acionarQuestao09);
document.getElementById("btn10").addEventListener("click", acionarQuestao10);
document.getElementById("btn11").addEventListener("click", acionarQuestao11);
document.getElementById("btn12").addEventListener("click", acionarQuestao12);
