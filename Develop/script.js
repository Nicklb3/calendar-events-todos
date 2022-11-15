$(function () {
  // variable to show tday of week on top of page
  let today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));

  // variable fot button
  let saveBtn = $('.saveBtn');

  // click function on button 
  saveBtn.on('click', function () {
    $(this).siblings('.description').get(0).value;
    let calenderText = $(this).siblings('.description').get(0).value;
    localStorage.setItem($(this).parent().attr('id'), calenderText);
  });

  // array of hours of the work day
  let hoursOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  for (i = 0; i < hoursOfDay.length; i++) {
    let eventStorage = localStorage.getItem('hour-' + hoursOfDay[i]);
    let hourTextArea = $('#hour-' + hoursOfDay[i] + ' > .description');
    hourTextArea.textContent = eventStorage;
  }

  // variable of current hour to be able to add past present and future class
  let currentHour = dayjs().hour();

  // for loop to add past present and future class to days of week
  for (var i = 0; i < hoursOfDay.length; i ++) {
    if (hoursOfDay[i] < currentHour) {
      $('#hour-' + hoursOfDay[i]).addClass('past');
    } else if (hoursOfDay[i] == currentHour) {
      $('#hour-' + hoursOfDay[i]).removeClass('past');
      $('#hour-' + hoursOfDay[i]).addClass('present');
    } else {
      $('#hour-' + hoursOfDay[i]).removeClass('past');
      $('#hour-' + hoursOfDay[i]).removeClass('present');
      $('#hour-' + hoursOfDay[i]).addClass('future');
    }
  }
});

