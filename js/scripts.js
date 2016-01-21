// Example document ready function and form submit function w/ event handler to prevent default
var countUp = function(firstNumber, secondNumber) {
  var outputArray = [];
  for (var index = firstNumber; index <= secondNumber; index += firstNumber) {
    outputArray.push(index);
  }
  return outputArray;
};




$(document).ready(function() {
  $("form").submit(function(event){
    var firstNumber = parseInt($("input#firstNumber").val());
    var secondNumber = parseInt($("input#secondNumber").val());
    var outputs = countUp(firstNumber, secondNumber);
    $("#output").empty()
    outputs.forEach(function(output) {
      $("#output").append("<li>" + output + "</li>")
    });
    event.preventDefault();
  });

});
