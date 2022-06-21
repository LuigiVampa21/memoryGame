'use script';
const section = document.querySelector('section');

let cards = [];
let k = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 9; j++) {
    const card = document.createElement('div');
    card.setAttribute(`index`, `${k}`);
    card.classList.add('card');
    section.appendChild(card);
    cards.push(card);
    console.log(card.attributes.index);
    card.style.height = '16vh';
    card.style.width = '8vw';
    card.style.border = '1px solid white';
    k++;
  }
}

console.log(cards);

let pairingArray = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

let cleanArray = [];
let trashArray = [];
let i = 0;
let randomNumber;
let numberAlreadyFound;
// on itère jusqu'a ce que chaque chiffre soit apparu au moins une fois;
// on saura que ce sera le cas car a chaque nouveau numero on le rajoutera dans le trashArray
while (cleanArray.length < 36) {
  randomNumber = Math.floor(Math.random() * 36);
  numberAlreadyFound = trashArray.includes(randomNumber);
  trashArray.push(randomNumber);
  if (!numberAlreadyFound) {
    cleanArray.push(randomNumber);
  } else {
    trashArray.push(randomNumber);
  }
  i++;
}
console.log(trashArray);
console.log(cleanArray);

// on obtient maintenant un tableau dans lequel chaque card est désignée une fois, on place aleatoirement chacun des chiffres une fois dans

// on commence par diviser ce tabelau en 2

const half = Math.ceil(cleanArray.length / 2);
const firstHalf = cleanArray.splice(0, half);
const secondHalf = cleanArray.splice(-half);

console.log(firstHalf);
console.log(secondHalf);

// une fois que nous avons les 2 tableau il faut itérer à travers ceux -ci afin de mettre une vealure dans chaque tableau du tableau pairingArray

for (let i = 0; i < firstHalf.length; i++) {
  pairingArray[i].push(firstHalf[i]);
}

for (let i = 0; i < secondHalf.length; i++) {
  pairingArray[i].push(secondHalf[i]);
}
console.log(pairingArray);

// On dispose maintenant d'un grand tableau qui comprend 18 sous-tableaux
// chacun de ses 18 tableaux comprends 2 valeures entre 0 et 35 qui correspondent aux div contenant les images
// avec le sass on a créer 18classes chacune contenant une image de fruits différrentes.
// Maintenant il nous faut ajouter a chacune des 2 div de chaque sous-tableau une classe différente de 1 a 18

// On itère sur le tableau principale

for (let i = 0; i < pairingArray.length; i++) {
  console.log(pairingArray[i][0], pairingArray[i][1]);
  console.log(i + 1);
  console.log(document.querySelector(`[index="${pairingArray[i][0]}"]`));
  console.log(document.querySelector(`[index="${pairingArray[i][1]}"]`));
  document.querySelector(`[index="${pairingArray[i][0]}"]`).classList.add(`fruit-${i+1}`);
  document.querySelector(`[index="${pairingArray[i][1]}"]`).classList.add(`fruit-${i+1}`);
}
