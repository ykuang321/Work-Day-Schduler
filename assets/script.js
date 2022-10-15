var currentDay = document.getElementById('currentDay');
var timeBlockHour = document.getElementsByClassName('hour');
var saveEvent = document.getElementsByClassName('saveBtn');
var displayEventColor = document.getElementsByClassName('description');

var currentHour = moment().format('H');

//display current day/time in header
setInterval(() => {
  currentDay.textContent = moment().format('LLLL');
}, 1000);

//for loop to compare current time with standard business hours and then display color based on result
for (var i=0; i<timeBlockHour.length; i++){  

  if(currentHour > timeBlockHour[i].dataset['number']){
    displayEventColor[i].classList.add("past");
  }

  else if(currentHour === timeBlockHour[i].dataset['number']){
    displayEventColor[i].classList.add("present");
  }

  else if(currentHour < timeBlockHour[i].dataset['number']){
    displayEventColor[i].classList.add("future");
  }
};




