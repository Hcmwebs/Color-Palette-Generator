const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D"," E", "F" ];
const card = document.querySelectorAll(".card__item");
const color = document.querySelectorAll(".card__color");
const colorTag = document.querySelectorAll(".card__tag");

card.addEventListener("click", () =>{

  let hexColor= "#";
  for(let i =0 ; i < 6; i++){
    hexColor += hex[0];
  }
  colorTag.textContent = hexColor;
  color.style.backgroundColor = hexcolor;

})

card () {
  return alert(card)};

console.log( card());