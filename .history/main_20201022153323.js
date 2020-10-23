const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D"," E", "F" ];
const card = document.getElementsByClassName(".card__item");
const color = document.querySelector(".card__color");
const colorTag = document.querySelector(".card__tag");
let active = false;
let cardItem =

card.addEventListener("mouseover", activate);
card.addEventListener("click", function(){

  let hexColor= "#";
  for(let i =0 ; i < 6; i++){
    hexColor += hex[getRandomNumber()];
  }
  colorTag.textContent = hexColor;
  color.style.backgroundColor = hexColor;

});

function getRandomNumber(
){return Math.floor(Math.random ()* hex.length)}


function activate(){

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

