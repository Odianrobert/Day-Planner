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

  //to update time: use this function, interval is in seconds, 60000= 1 min
  //function updateTime()
  //updateTime();
  //setInterval(function(){
  //updateTime();
  //},60000);

  hourUpdater();
  var interval = setInterval(hourUpdater, 60000);

  // recall local storage items, time and value, need to stay up after refresh
  //localStorage.removeItem('favoriteflavor');
  //var taste = val.localStorage.getItem('favoriteflavor');
  //"#id" to call description  "id" to get item
  //12PM does not work
  //change ids to hour

  
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#14hr .description").val(localStorage.getItem("14hr"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

})




   