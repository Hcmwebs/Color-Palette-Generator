const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D"," E", "F" ];
const card = document.querySelectorAll(".card__item");
const color = document.querySelectorAll(".card__color");
const colorTag = document.querySelectorAll(".card__tag");
const btn = document.getElementById("btn");
const btnSec = document.getElementById("btnSecondary");




for(let num = 0 ; num < card.length ; num++){
  btn.addEventListener("click", random);
  card[num].addEventListener("click", random);

    function random(){

    let hexColor= "#";
    for (let i =0 ; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }

    colorTag[num].textContent = hexColor;
    color[num].style.backgroundColor = hexColor;

  };

  function getRandomNumber(){return Math.floor(Math.random ()* hex.length)};


}

btnSec.addEventListener("click", () =>{
  return alert ("Color Palette copied to the clipboard");
});


