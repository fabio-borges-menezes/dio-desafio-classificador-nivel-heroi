//SEGUNDO DESAFIO - CALCULADORA DE NÍVEL DE HERÓI
// Importa o módulo prompt-sync para ler entradas do usuário
const prompt = require('prompt-sync')();
//Solicita vitórias e derrotas do usuário
let xpVictories = prompt('Vitórias do herói: ');
let xpDefeats = prompt('Derrotas do herói: ');
let classe;
let balanceXP;
//função para validar se as entradas são números
function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}
// Verifica se as entradas são números válidos
while (!isNumber(xpVictories) || !isNumber(xpDefeats)) {
  console.log("⚠️ Erro: Vitórias e derrotas devem ser números válidos.");
    xpVictories = prompt('Vitórias do herói: ');
    xpDefeats = prompt('Derrotas do herói: ');
}
xpVictories = parseInt(xpVictories, 10); // Converte a entrada para um número inteiro
xpDefeats = parseInt(xpDefeats, 10); // Converte a entrada para um número inteiro
// Calcula o saldo de vitórias e derrotas
balanceXP = xpVictories - xpDefeats;
// Classifica o herói com base no saldo de vitórias e derrotas
function classificarXP(balanceXP) {
  if (balanceXP < 10) return "Ferro";
  if (balanceXP <= 20) return "Bronze";
  if (balanceXP <= 50) return "Prata";
  if (balanceXP <= 80) return "Ouro";
  if (balanceXP <= 90) return "Diamante";
  if (balanceXP <= 100) return "Lendário";
  return "Imortal";
}
classe = classificarXP(balanceXP);
console.log(`O Herói tem de saldo de:  **${balanceXP}** está no nível de **${classe}**.`);