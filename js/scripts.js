// Example document ready function and form submit function w/ event handler to prevent default
var wordPuzzle = function(str) {
  var vowelArray = ["a", "e", "i", "o", "u"];
  vowelArray.forEach(function(vowel) {
    var regex = new RegExp(vowel, 'gi');
    str = str.replace(regex, "-");
  });
  return str;
}




// $(document).ready(function() {
//   $("form").submit(function(event){
//     var firstNumber = parseInt($("input#firstNumber").val());
//     var secondNumber = parseInt($("input#secondNumber").val());
//     var outputs = countUp(firstNumber, secondNumber);
//     $("#output").empty()
//     outputs.forEach(function(output) {
//       $("#output").append("<li>" + output + "</li>")
//     });
//     event.preventDefault();
//   });
//
// });
