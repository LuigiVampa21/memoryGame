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
    card.style.height = '16vh';
    card.style.width = '8vw';
    card.style.border = '1px solid white';
    const subcard = document.createElement('div');
    subcard.setAttribute(`subIndex`, `${k}`);
    subcard.classList.add('subcard');
    card.appendChild(subcard);
    const frontFace = document.createElement('div');
    frontFace.setAttribute(`frontIndex`, `${k}`);
    frontFace.classList.add('frontFace');
    subcard.appendChild(frontFace);
    const backFace = document.createElement('div');
    backFace.setAttribute(`backIndex`, `${k}`);
    backFace.classList.add('backFace');
    subcard.appendChild(backFace);
    k++;
  }
}

// let cards = [];
// let k = 0;
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 9; j++) {
//     const card = document.createElement('div');
//     card.setAttribute(`index`, `${k}`);
//     card.classList.add('card');
//     section.appendChild(card);
//     cards.push(card);
//     // console.log(card.attributes.index);
//     card.style.height = '16vh';
//     card.style.width = '8vw';
//     card.style.border = '1px solid white';
//     // card.classList.add('notFlipped');
//     k++;
//   }
// }

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

// let cards = ["fraise", "cerise", "cerise", "fraise"];

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
// console.log(trashArray);
// console.log(cleanArray);

// on obtient maintenant un tableau dans lequel chaque card est désignée une fois, on place aleatoirement chacun des chiffres une fois dans

// on commence par diviser ce tabelau en 2

const half = Math.ceil(cleanArray.length / 2);
const firstHalf = cleanArray.splice(0, half);
const secondHalf = cleanArray.splice(-half);

// console.log(firstHalf);
// console.log(secondHalf);

// une fois que nous avons les 2 tableau il faut itérer à travers ceux -ci afin de mettre une vealure dans chaque tableau du tableau pairingArray

for (let i = 0; i < firstHalf.length; i++) {
  pairingArray[i].push(firstHalf[i]);
}

for (let i = 0; i < secondHalf.length; i++) {
  pairingArray[i].push(secondHalf[i]);
}
// console.log(pairingArray);

// On dispose maintenant d'un grand tableau qui comprend 18 sous-tableaux
// chacun de ses 18 tableaux comprends 2 valeures entre 0 et 35 qui correspondent aux div contenant les images
// avec le sass on a créer 18classes chacune contenant une image de fruits différrentes.
// Maintenant il nous faut ajouter a chacune des 2 div de chaque sous-tableau une classe différente de 1 a 18

// On itère sur le tableau principal

for (let i = 0; i < pairingArray.length; i++) {
  console.log(pairingArray[i][0], pairingArray[i][1]);
  // console.log(i + 1);
  // console.log(document.querySelector(`[index="${pairingArray[i][0]}"]`));
  // console.log(document.querySelector(`[index="${pairingArray[i][1]}"]`));

  document
    .querySelector(`[backIndex="${pairingArray[i][0]}"]`)
    .classList.add(`fruit-${i + 1}`);
  document
    .querySelector(`[backIndex="${pairingArray[i][1]}"]`)
    .classList.add(`fruit-${i + 1}`);
}

// On ajoute la classe notFlipped par dessus que l'on enlevera a chaque clic sur le e.target

// const div = document.querySelectorAll('div');

// div.forEach((i)=>{
// i.classList.add('notFlipped');

// });

// chacun des tableaux correspond maintenant a une classe = fruit-(number) allant de 1 a 36
// lorsqu'un élément est cliqué il faut lui retirer la class card et ajouter la class fruit-number;

// il faut créer un event lorsque l'utilisateur clique sur une carte

section.addEventListener('click', (e) => {
  console.log(e.target);
  e.target.style.transform = 'rotateY(180deg)';
  e.target.style.display = 'none';
  document.querySelector(
    `[subindex="${Number(e.target.attributes.frontIndex.value)}`
  ).style.transform = 'rotateY(180deg)';
  // On recupére la valeure de l'index de l'élement sur lequel on a cliqué.
  // console.log(Number(e.target.attributes.frontIndex));
  console.log(Number(e.target.attributes.frontIndex.value));
});

// A present lorsque le joueur clique sur une case elle se retourne.
// Elle reste dans sa position tant que le joueur n'a pas tiré une autre carte.
// Lorsqu'il tire une nouvelle carte on fait une condition :
// Si il s'agit du même fruit, les carte reste dans cette position
// Sinon elles se retournent.
