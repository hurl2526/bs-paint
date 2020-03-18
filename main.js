const colorOne = document.querySelector(".color-1");
const colorTwo = document.querySelector(".color-2");
const colorThree = document.querySelector(".color-3");
const colorFour = document.querySelector(".color-4");
const colorFive = document.querySelector(".color-5");
const canvasSquare = document.querySelectorAll(".square");

const currentSelection = document.querySelector(".current-brush");
const clickOne = function(){
  currentSelection.classList.remove(currentSelection.classList[1]);
  currentSelection.classList.add('color-1');
};

const clickTwo = function(){
  currentSelection.classList.remove(currentSelection.classList[1]);
  currentSelection.classList.add('color-2');
};

const clickThree = function(){
  currentSelection.classList.remove(currentSelection.classList[1]);
  currentSelection.classList.add('color-3');
};

const clickFour = function(){
  currentSelection.classList.remove(currentSelection.classList[1]);
  currentSelection.classList.add('color-4');
};

const clickFive = function(){
  currentSelection.classList.remove(currentSelection.classList[1]);
  currentSelection.classList.add('color-5');
};

const clickSquare = function(){
  for (const element of canvasSquare){
  element.classList.remove(element.classList[1]);
  element.classList.add(currentSelection.classList[1]);
}
};

colorOne.addEventListener('click', clickOne);
colorTwo.addEventListener('click', clickTwo);
colorThree.addEventListener('click', clickThree);
colorFour.addEventListener('click', clickFour);
colorFive.addEventListener('click', clickFive);

canvasSquare[0].addEventListener('click', clickSquare);

