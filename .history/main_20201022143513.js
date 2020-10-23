const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D"," E", "F" ];
const card = document.querySelectorAll(".card__item");
const color = document.querySelector(".card__color");
const colorTag = document.querySelector(".card__tag");
const item = card[function number()};
item.addEventListener("click", function(){

  let hexColor= "#";
  for(let i =0 ; i < 6; i++){
    hexColor += hex[getRandomNumber()];
  }
  colorTag.textContent = hexColor;
  color.style.backgroundColor = hexColor;

});

function getRandomNumber(
){return Math.floor(Math.random ()* hex.length)}

function number (){

  for(let n =0 ; n < 5; n++){
  }

  ;}
