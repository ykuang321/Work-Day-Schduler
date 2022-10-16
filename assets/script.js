var currentDay = document.getElementById('currentDay');
var timeBlockHour = document.getElementsByClassName('hour');
var currentHour = moment().format('H');
var displayEventColor = document.getElementsByClassName('description');

//display current day/time in header
setInterval(() => {
  currentDay.textContent = moment().format('LLLL');
}, 1000);

//for loop to compare the current hour with standard business hours and then display color based on result
for (var i=0; i<timeBlockHour.length; i++){  

  //convert string to int for comparison
  var compCurrentHour = parseInt(currentHour);
  var compTableHour = parseInt(timeBlockHour[i].dataset['number']);

  if(compCurrentHour > compTableHour){
    displayEventColor[i].classList.add("past");
  }

  else if(compCurrentHour === compTableHour){
    displayEventColor[i].classList.add("present");
  }

  else if(compCurrentHour < compTableHour){
    displayEventColor[i].classList.add("future");
  }
};

//add event listener
$(".saveBtn").on("click", function(){

var textInput = $(this).find(".description");
console.log(textInput);
var test = textInput.val();
console.log(test);

});