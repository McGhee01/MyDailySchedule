console.log ("Am I online?")

//How to Set Current Date and Format
var currDay= moment().format('dddd');
var currDate= moment().format("MMM Do YY");
var currHour=moment().format('LT');
$("#currentDay").append(currDay+ " "+ currDate+" "+ currHour)

// How to Allow Save Button to Click And Allow Computer to Identify Button(s) Clicked
$(function() { 
    $("button.savebutton").on("click", function(event) {
        console.log("Button clicked: ", event.target);
    });
  });

// Need Eventlistener