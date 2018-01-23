var sample_text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var counter = {
  "a" : 0,  "b" : 0,  "c" : 0,  "d" : 0,
  "e" : 0,  "f" : 0,  "g" : 0,  "h" : 0,
  "i" : 0,  "j" : 0,  "k" : 0,  "l" : 0,
  "m" : 0,  "n" : 0,  "o" : 0,  "p" : 0,
  "q" : 0,  "r" : 0,  "s" : 0,  "t" : 0,
  "u" : 0,  "v" : 0,  "w" : 0,  "x" : 0,
  "y" : 0,  "z" : 0
}
let i =0;
  let index;
  let element;
function countLetters(counter, sample_text){
 //variable declarations
  
  //creates an array of all parameters in the object
  const counterKeys = Object.keys(counter);
  //creates an array of all characters in the sample_text.  This makes it easier to iterate through.
  const textArr = sample_text.toLowerCase().split('');
  let textArrLen = textArr.length;
  
  //checks that we are within the bounds of text so as to be able to exit out of the loop
  if (textArrLen === 0){
    return;
  }
  

  //select each letter from the counterKeys and use those elements as the selector
  //then using those selected elements go through the sample_text or textArr to find each element
  
  element = counterKeys[i]//returns a letter from counterKeys and assigns it to element
  //console.log(element) //testing that element works
  index = textArr.indexOf(element) //gets index number of element
  //console.log(index)//testing that index works
  if(index > -1){
    counter[element]++
    i++
  }
  console.log(counter)
  return countLetters(counter, --textArrLen)
}

  //from here is a working test model
  //let indices = [];
  //let element = 'a';
  //let idx = textArr.indexOf(element);
 
  // while(idx != -1){
  //   indices.push(idx);
  //   idx = textArr.indexOf(element, idx + 1)
  // }
$(document).ready(function(){
  countLetters(counter, sample_text);
  $("#result").html(JSON.stringify(counter));
});