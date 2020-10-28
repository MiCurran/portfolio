var input = document.querySelectorAll("input")[0];
var input2 = document.getElementById("input2")
input.select(); // you can also use input.focus()
input.value="";
input2.select();
input2.value="";
var text = "Hello, I'm Michael Curran";
var text2 = "I am a Fullstack web developer!"
var l=text.length;
var el2 = text2.length;
var current = 0;
var current2 = 0;
var length = 100;
var length2 = 100;




var write = function() {
  input.value+=text[current];
  if(current < l-1) {
    current++;
    setTimeout(function(){write()},length);
  } else {
    input.setAttribute('value',input.value);
  }
}

var write2 = function(){
  input2.value+=text2[current2];
  if(current2 < el2-1){
    current2++;
    setTimeout(function(){write2()}, length2);
  } else {
    input2.setAttribute('value',input2.value);
  }
}

setTimeout(function(){write()},length);
setTimeout(function(){write2()},length2);

var quadrantItems = document.querySelectorAll('.quadrant__item');
var svgs = document.querySelectorAll('svg');
var cube = document.querySelector('.cube');
var closeButton = document.querySelector('.quadrant__item__content--close');
var isInside = false;

var tl = new TimelineLite({paused: true});
tl.timeScale(1.6);

tl.to('.cube', 0.4, {rotation: 45, width: '120px', height: '120px', ease: Expo.easeOut}, 'first');
tl.to('.plus .plus-vertical', 0.3, {height: '0', backgroundColor: '#224dc2', ease: Power1.easeIn}, 'first');
tl.to('.plus .plus-horizontal', 0.3, {width: '0', backgroundColor: '#224dc2', ease: Power1.easeIn}, 'first');
tl.to('.cube', 0, {backgroundColor: 'transparent'});
tl.to(quadrantItems[0], 0.15, {x: -5, y: -5}, 'seperate');
tl.to('.arrow-up', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[1], 0.15, {x: 5, y: -5}, 'seperate');
tl.to('.arrow-right', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');
tl.to(quadrantItems[3], 0.15, {x: 5, y: 5}, 'seperate');
tl.to('.arrow-down', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[2], 0.15, {x: -5, y: 5}, 'seperate');
tl.to('.arrow-left', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');

cube.addEventListener('mouseenter', playTimeline);
cube.addEventListener('mouseleave', reverseTimeline);

function playTimeline(e) {
  e.stopPropagation();
  tl.play();
}

function reverseTimeline(e) {
  e.stopPropagation();
  tl.timeScale(1.8);
  tl.reverse();
}