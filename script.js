//Display current day on day planner
let currentDay = document.querySelector ("#currentDay")

currentDay = moment().format("dddd, MMMM, Do");
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
});




   