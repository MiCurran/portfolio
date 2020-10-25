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

