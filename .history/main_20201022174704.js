const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D"," E", "F" ];
const card = document.querySelectorAll(".card__item");
const color = document.querySelector(".card__color");
const colorTag = document.querySelector(".card__tag");
let active = false;

for(let n of card ){
  return n++;
}

card[n].addEventListener("click", random);


function random(){

  let hexColor= "#";
  for(let i =0 ; i < 6; i++){
    hexColor += hex[getRandomNumber()];
  }
  colorTag.textContent = hexColor;
  color.style.backgroundColor = hexColor;

};

function getRandomNumber(
){return Math.floor(Math.random ()* hex.length)}


function activate(){
  let cardItem = card[num];
    for( let num = 0; num< card.length; num++) {
    return cardItem;
      }


  if (
    card != active) {
      card.classList.add("active");
      active = true;
    }
    else {
      card.classList.remove("active");
      active = false;
    }
  ;}

