//checkfor whitespace

//check first character


//first char is vowel\
var firstVowel = function(array, vowels) {
  var length = array.length;
  for(i=0;i<length;i++){
    if(array[0] === vowels[i] ){
      array.push("ay");
    }
  }
  return array;
}

//first char is consonant

//first char is exception


var validateInput = function(array){
  for(i=0;i<array.length;i++){
    console.log(array[i]);
     array[i] = array[i].match(/[a-z]/g).join("");
     console.log(array[i]);
  }
 return array;
}






//user interface logic
$(document).ready(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();
   var string = $("#inputForm").val().toLowerCase();
   var vowels = ["a","e","i","o","u"]
   var array = string.split(" ");

   //spec #1
   if(array[0].match(/[a-z\s]/gi)===null){
    console.log("string is invalid");
    console.log(array[0]);
   }

validateInput(array);
  //  var array = string.match(/[a-z\s]/gi)

   //array = firstVowel(array, vowels);


  //  console.log(array.indexOf(/[^aeiou]*/i));

  //  if(/[aeiou]/)

  //  console.log(array[0]);
  //  console.log(vowels[0]);

// console.log(array);


 });
 });
