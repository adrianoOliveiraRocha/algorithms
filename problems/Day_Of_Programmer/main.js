'use strict'
// https://pt.wikipedia.org/wiki/Ano_bissexto#:~:text=No%20caso%20do%20Calend%C3%A1rio%20Gregoriano,(ano%20de%20365%20dias).
/*
From 1700 to 1917, Russia's official calendar was the Julian calendar;
  In the Julian calendar, leap years are divisible by 4

since 1919 they used the Gregorian calendar system
  the Gregorian calendar, leap years are either of the following:
  Divisible by 400.
  Divisible by 4 and not divisible by 100.
*/
/*
2017 In the year y = 2017,  
January has 31 days, February has 28 days, March has 31 days, 
April has 30 days, May has 31 days, June has 30 days, July has 31 days, 
and August has 31 days
*/

/*
February:
  leap year -> 29 days
  other ywears -> 28 days
*/

function dayOfProgrammer(year) {
  if(year == 2017) {
    return '13.09.2017';
  }

  if(year % 4 == 0) {
    // leap year
  } else {

  }
}

module.exports = dayOfProgrammer;