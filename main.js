const colorOne = document.querySelector(".color-1");
const colorTwo = document.querySelector(".color-2");
const colorThree = document.querySelector(".color-3");
const colorFour = document.querySelector(".color-4");
const colorFive = document.querySelector(".color-5");
const colorSix = document.querySelector(".color-6");
const canvasSquare = document.querySelectorAll(".square");
const currentSelection = document.querySelector(".current-brush");
const bombs = document.querySelectorAll('.bomb');
const ones = document.querySelectorAll('.one');
const twos = document.querySelectorAll('.two');

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
const clickSix = function(){
  currentSelection.classList.remove(currentSelection.classList[1]);
  currentSelection.classList.add('color-6');
};

const clickSquare = function(event){
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add(currentSelection.classList[1]);
};

for (const element of canvasSquare){
  element.addEventListener('click',clickSquare);
}
const explode = function(event){
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add('exploding');
};

// const makeFlag = function(event){
//   event.target.classList.remove(event.target.classList[1]);
//   event.target.classList.add('flag');
// };

for(const element of bombs){
  
  //   if(currentSelection.classList[1] === 'color-6'){
  //   element.addEventListener('click', makeFlag)
  // console.log(currentSelection);
  // }else {
  element.addEventListener('click', explode);
}

const one = function(event){
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add('addAOne');
};
for(const element of ones){
  element.addEventListener('click', one);
}

const two = function(event){
  event.target.classList.remove(event.target.classList[1]);
  event.target.classList.add('addATwo');
}
for(const element of twos){
  element.addEventListener('click', two);
}

colorOne.addEventListener('click', clickOne);
colorTwo.addEventListener('click', clickTwo);
colorThree.addEventListener('click', clickThree);
colorFour.addEventListener('click', clickFour);
colorFive.addEventListener('click', clickFive);
// colorSix.addEventListener('click', clickSix);