let currentDay = document.querySelector ("#currentDay")

currentDay = moment().format("dddd, MMMM, Do");
$("#currentDay").append(currentDay)