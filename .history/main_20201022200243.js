const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D"," E", "F" ];
const card = document.querySelectorAll(".card__item");
const color = document.querySelector(".card__color");
const colorTag = document.querySelector(".card__tag");
let active = false;


for(let num = 0 ; num < card.length ; num++){;
  card[0].addEventListener("mouseover", activate);
  card[0].addEventListener("click", random);}


  function random(){

  let hexColor= "#";
  for (let i =0 ; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  colorTag.textContent = hexColor;
  color.style.backgroundColor = hexColor;

};

function getRandomNumber(){return Math.floor(Math.random ()* hex.length)}


function activate(){
  if ( !active) {
      card[0].classList.add("active");
      active = true;
    }
    else {
      card[0].classList.remove("active");
      active = false;
    }
  ;}

