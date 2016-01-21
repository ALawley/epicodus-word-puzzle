// Example document ready function and form submit function w/ event handler to prevent default
var wordPuzzle = function(str) {
  var vowelArray = ["a", "e", "i", "o", "u"];
  vowelArray.forEach(function(vowel) {
    var regex = new RegExp(vowel, 'gi');
    str = str.replace(regex, "-");
  });
  return str;
}

$(document).ready(function() {
  $("form").submit(function(event){
    var str = $("input#puzzleString").val();
    var output = wordPuzzle(str);
    $(".question").hide();
    $(".result").show();
    $("p#result").text(output)
    event.preventDefault();
  });
  $("#return").click(function(event) {
    $(".question").show();
    $(".result").hide();
    event.preventDefault();
  });
});
