const $ = (s) => document.querySelector(s);
const date = $("#date");
const day = $("#day");
const month = $("#month");
const year = $("#year");
const now = new Date();

//getting the current date, day and month based on my system settings
date.textContent = now.getDate();
day.textContent = getDayOfWeek(now.getDay());
month.textContent = getMonthText(now.getMonth());
year.textContent = now.getFullYear();

//This function takes a number representing the day of the week (0 for Sunday, 1 for Monday, and so on)
//and returns the corresponding day name (e.g., "Sunday", "Monday").
function getDayOfWeek(d) {
  switch (d) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Unknonw";
  }
}

//This function takes a number representing the month (0 for January, 1 for February, and so on)
//and returns the corresponding month name (e.g., "January", "February").
function getMonthText(m) {
  switch (m) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "Unknown";
  }
}

//These functions
//are used to convert numerical representations of days and months into their corresponding textual
//representations
