//Display current day on day planner
let currentDay = document.querySelector ("#currentDay")

currentDay = moment().format("LLLL"); //LLLL displays Day of week, month name, day of month, year, time
$("#currentDay").append(currentDay)

// add listener for save button
// set up variables to be saved on buttton click
//set values to local storage
$(document).ready(function() {

    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      //console.log("click");
      
      localStorage.setItem(time, value);
      //console.log(time, value);
    });


// need to check moment for current hour to set it to present
// loop through every hour to determine if it's past, present, or future
// past colors will show gray, present will be green, future will be red

function hourUpdater() {
    
    var currentHour = moment().hours();
    
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();
  var interval = setInterval(hourUpdater, 15000);

  // recall local storage items, time and value, need to stay up after refresh
  //localStorage.removeItem('favoriteflavor');
  //var taste = val.localStorage.getItem('favoriteflavor');
  //"#id" to call description  "id" to get item

  $("#9AM .description").val(localStorage.getItem ("9AM"));
  $("#10AM .description").val(localStorage.getItem ("10AM"));
  $("#11AM .description").val(localStorage.getItem ("11AM"));
  $("#12PM .description").val(localStorage.getItem ("12PM"));
  $("#1PM .description").val(localStorage.getItem ("1PM"));
  $("#2PM .description").val(localStorage.getItem ("2PM"));
  $("#3PM .description").val(localStorage.getItem ("3PM"));
  $("#4PM .description").val(localStorage.getItem ("4PM"));
  $("#5PM .description").val(localStorage.getItem ("5PM"));
   
  

})




   