//SEGUNDO DESAFIO - CALCULADORA DE NÍVEL DE HERÓI
//Solicita vitórias e derrotas do usuário e exibe na tela
const prompt = require('prompt-sync')();
let xpVictories = prompt('Vitórias do herói: ');
let xpDefeats = prompt('Derrotas do herói: ');
let classe;
let balanceXP = xpVictories - xpDefeats;
// Classifica o herói com base no saldo de vitórias e derrotas
function classificarXP(balanceXP) {
  if (balanceXP < 10) return "Ferro";
  if (balanceXP <= 20) return "Bronze";
  if (balanceXP <= 50) return "Prata";
  if (balanceXP <= 80) return "Ouro";
  if (balanceXP <= 90) return "Diamante";
  if (balanceXP <= 100) return "Lendário";
  return "Imortal";
}//*******REFAZER DAQUI P BAIXO********
while (isNaN(balanceXP) || balanceXP < 0) {
  console.log("⚠️ Erro: XP deve ser um número positivo.");
  balanceXP = prompt('XP do herói: ');
} 
balanceXP = parseInt(balanceXP, 10); // Converte a entrada para um número inteiro
// Classifica o herói com base na experiência (XP)
while (nameHero.trim() === '') {
  console.log("⚠️ Erro: O nome do herói não pode estar vazio.");
  nameHero = prompt('Nome do herói: ');
}
classe = classificarXP(balanceXP);
console.log(`Herói de nome:  **${nameHero}** alcançou o nível **${classe}**.`);