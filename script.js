console.log ("Am I online?")


var currDay= moment().format('dddd');
var currDate= moment().format("MMM Do YY");
var currHour=moment().format('LT');
$("#currentDay").append(currDay+ " "+ currDate+" "+ currHour)


$(function() { 
    $("button.savebutton").on("click", function(event) {
        console.log("Button clicked: ", event.target);
    });
  });

// Need Eventlistener