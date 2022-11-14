// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// console.log("hello");


$(function () {

  // dayjs variable of formatted time for current date
  const today = dayjs();
  $("#currentDay").text(today.format("dddd, MMM D YYYY"));

  // variable to access button in html file
  const saveBtn = $(".saveBtn")

  // button click function to save info on page
 
  var saveBtn = $('.saveBtn');
  saveBtn.on('click', function () {
    var eventText = $(this).siblings('.description').get(0).value;
    localStorage.setItem($(this).parent().attr('id'), eventText);
  });

  // Array of hours of the day / html id="hour-*"
  const hoursOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];


});
