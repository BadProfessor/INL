// This JavaScript program inserts today's and tomorrow's 
// dates in the input form for user convenience.

// Declare today's variables.
// Months are +1 because getMonth() is zero-indexed
var today = new Date();
var todayDate = today.getDate();
var todayMonth = today.getMonth() + 1;
var todayYear = today.getFullYear();

// Declare tomorrow's variables.
// 86400000 = milliseconds in 24 hours (24 * 60 * 60 * 1000)
var tomorrow = new Date(+today +86400000);
var tomorrowDate = tomorrow.getDate();
var tomorrowMonth = tomorrow.getMonth() + 1;
var tomorrowYear = tomorrow.getFullYear();

// Add leading zeroes to single-digit months & days
if (todayDate < 10) todayDate = "0" + todayDate;
if (todayMonth < 10) todayMonth = "0" + todayMonth;
if (tomorrowDate < 10) tomorrowDate = "0" + tomorrowDate;
if (tomorrowMonth < 10) tomorrowMonth = "0" + tomorrowMonth;

// Put the values in the right format: YYYY-MM-DD
var htmlToday = todayYear + "-" + todayMonth + "-" + todayDate;       
var htmlTomorrow = tomorrowYear + "-" + tomorrowMonth + "-" + tomorrowDate;

// Put the values onto the web page
document.getElementById('startres').value = htmlToday;
document.getElementById("endres").value = htmlTomorrow;
