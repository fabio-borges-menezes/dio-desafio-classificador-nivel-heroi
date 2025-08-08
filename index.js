//Solicita nome do usuario e exibe na tela
const prompt = require('prompt-sync')();
let nameHero = prompt('Nome do herói: ');
let xpHero = prompt('XP do herói: ');
let classe;
// Classifica o herói com base na experiência (XP)
function classificarXP(xpHero) {
  if (xpHero < 1000) return "Ferro";
  if (xpHero <= 2000) return "Bronze";
  if (xpHero <= 5000) return "Prata";
  if (xpHero <= 7000) return "Ouro";
  if (xpHero <= 8000) return "Platina";
  if (xpHero <= 9000) return "Ascendente";
  if (xpHero <= 10000) return "Imortal";
  return "Radiante";
}
while (isNaN(xpHero) || xpHero < 0) {
  console.log("⚠️ Erro: XP deve ser um número positivo.");
  xpHero = prompt('XP do herói: ');
} 
xpHero = parseInt(xpHero, 10); // Converte a entrada para um número inteiro
// Classifica o herói com base na experiência (XP)
while (nameHero.trim() === '') {
  console.log("⚠️ Erro: O nome do herói não pode estar vazio.");
  nameHero = prompt('Nome do herói: ');
}
classe = classificarXP(xpHero);
console.log(`Herói de nome:  **${nameHero}** alcançou o nível **${classe}**.`);