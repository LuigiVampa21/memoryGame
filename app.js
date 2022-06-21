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


for(let i = 0; i < firstHalf.length; i++){
    pairingArray[i].push(firstHalf[i]);
}

for (let i = 0; i < secondHalf.length; i++) {
    pairingArray[i].push(secondHalf[i]); 
}
console.log(pairingArray);