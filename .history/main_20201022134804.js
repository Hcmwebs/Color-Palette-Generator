const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D"," E", "F" ];
const card = document.getElementsByClassName(".card__item");
const color = document.querySelectorAll(".card__color");
const colorTag = document.querySelectorAll(".card__tag");


card.addEventListener("click", function (){

  let hexColor= "#";
  for(let i =0 ; i < 6; i++){
    hexColor += hex[0];
  }
  colorTag.textContent = hexColor;
  color.style.backgroundColor = hexColor;

})

