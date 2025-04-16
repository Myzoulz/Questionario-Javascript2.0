function acionarQuestao01() {
  const numero = Number (document.getElementById("input01").value);

  if (numero % 2 === 0) {
    alert("O número é par");
  }
  else {
    alert("O número é ímpar");
    return;
  }
}

function acionarQuestao02() {
  const numero1 = Number (document.getElementById("input02").value);
  const numero2 = Number (document.getElementById("input02-2").value);

  if (numero1 > numero2) {
    alert(`${numero1} é maior que ${numero2}`);
  }
  else if (numero1 < numero2) {
    alert(`${numero2} é maior que ${numero1}`);
  }
  else {
    alert("Os números são iguais");
    return;
  }
}

function acionarQuestao03() {
  const data = document.getElementById("input03").value;
  const dataAtual = new Date();
  const anoInserido = new Date(data).getFullYear();
  const anoAtual = dataAtual.getFullYear();
  const idade = anoAtual - anoInserido;

  if (idade > 150 || idade < 0) {
    alert("Idade inválida");
    return;
  }

  if (idade >= 16) {
    alert(`A pessoa tem ${idade} e pode votar`);
  }
  else {
    alert(`A pessoa tem ${idade} e não pode votar`);
    return;
  }
}

function acionarQuestao04() {
  const salario = Number (document.getElementById("input04").value);
  const reajuste = Number (document.getElementById("input04-2").value);
  const aumento = (salario * reajuste) / 100;
  const novoSalario = salario + aumento;

  if (novoSalario < 0) {
    alert("Salario inválido");
    return;
  }

  alert(`O novo salário é R$ ${novoSalario.toFixed(2)}`);
}

function acionarQuestao05() {
  const dia = Number (document.getElementById("input05").value);

  switch (dia) {
    case 1:
      alert("Domingo");
      break;
    case 2:
      alert("Segunda-feira");
      break;
    case 3:
      alert("Terça-feira");
      break;
    case 4:
      alert("Quarta-feira");
      break;
    case 5:
      alert("Quinta-feira");
      break;
    case 6:
      alert("Sexta-feira");
      break;
    case 7:
      alert("Sábado");
      break;
    default:
      alert("Dia inválido");
      return;
  }
}

function acionarQuestao06() {
  const numero = Number (document.getElementById("input06").value);
  let contador = 0;
  let resultado = [];

  if (numero < 0) {
    alert("Número inválido");
    return;
  }

  while (contador <= numero) {
    resultado.push(contador);
    contador++;
  }

  alert(`${resultado.join(", ")},`);
}

function acionarQuestao07() {
  const numero = Number (document.getElementById("input07").value);
  let soma = 0;

  if (numero < 0) {
    alert("Número inválido");
    return;
  }

  for (let i = 0; i < numero; i++) {
    soma += i;
  }

  alert(`A soma de todos os números de 0 até ${numero} é: ${soma}`);

}

function acionarQuestao08() {
  const numero = Number (document.getElementById("input08").value);
  let listaImpar = [];

  for (let i = 1; i < numero; i++) {
    if (i % 2 != 0) {
      listaImpar.push(i);
    }
  }
  if (listaImpar.length === 0) {
    alert("Não há números ímpares");
    return;
  }
  alert(`Os números ímpares são: ${listaImpar.join(", ")}`);
}

function acionarQuestao09() {
  const numerosString = document.getElementById("input09").value;

  const numeros = numerosString.split("-").map(Number);

  if (numeros.some(numero => !Number.isInteger(numero))) {
    alert("Todos os números devem ser inteiros.");
    return;
  }

  const soma = numeros
    .filter(numero => numero < 30)
    .reduce((acumulador, numero) => acumulador + numero, 0);

  alert(`A soma dos números menores que 30 é: ${soma}`);
}

function acionarQuestao10() {
  const numerosString = document.getElementById("input10").value;

  const numeros = numerosString.split("/").map(Number);

  if (numeros.some(numero => !Number.isInteger(numero))) {
    alert("Todos os números devem ser inteiros.");
    return;
  }

  const maioresQue50 = numeros.filter(numero => numero > 50);

  alert(`A quantidade de números maiores que 50 é: ${maioresQue50.length}`);
}

function acionarQuestao11() {
  const string = document.getElementById("input11").value;
  let stringInvertida = "";

  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }

  alert(`A string invertida é: ${stringInvertida}`);
}

function acionarQuestao12() {
  const string = document.getElementById("input12").value;

  if (string.length === 0) {
    alert("A string não pode estar vazia.");
    return;
  }

  if (string.length === 1) {
    alert(`Resultado: ${string.toUpperCase()}`);
    return;
  }

  const resultado =
    string[0].toUpperCase() +
    string.slice(1, -1) +
    string[string.length - 1].toUpperCase();

  alert(`Resultado: ${resultado}`);
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
