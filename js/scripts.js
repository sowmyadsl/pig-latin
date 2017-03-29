//Business Logic

var loopThrough = function(array, completeArray){
  // var length = array.length;
  for(var i = 0; i < array.length; i++){
    checkNum = checkCharacter(array[i]);
    if(checkNum === 1){
      completeArray.push(firstVowel(array[i]));
    } else if(checkNum === 2) {
      firstConsonant(array[i]);
    }
  }
  console.log(completeArray);
}
//check first character
var checkCharacter = function(element){
  if(element.match(/^[aeiou]/) === null){
    return 2;
  } else {
    return 1;
  }
}
//Check "qu"
var firstConsonant = function(string){
  if(string.match(/^qu/)!= null ) {
    var array = string.split("");
    array.shift();
    array.shift();
    array.push("quay");
    string = array.join("");
  }
  // else if(/*one consonant (second index is a vowel)*/) {
  //
  // } else {
  //
  // }

  console.log(string);

  return string;
}

//first char is vowel\
var firstVowel = function(string) {
  var vowels = ["a","e","i","o","u"]
  var array = string.split("");
  if(vowels.includes(array[0])){
    array.push("way");
  }
  string = array.join('');
  return string;
}


var validateInput = function(array){
  for(i=0;i<array.length;i++){
     array[i] = array[i].match(/[a-z]/g).join("");
  }
 return array;
}






//user interface logic
$(document).ready(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();
   var string = $("#inputForm").val().toLowerCase();

   var array = string.split(" ");
   var completeArray = [];

   validateInput(array);


  //  console.log(element[0]===/[aeiou]/);
  loopThrough(array, completeArray);

 });
});
