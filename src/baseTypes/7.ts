/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  mon = "Monday",
  tue = "Tuesday",
  wed = "Wednesday",
  thur = "Thursday",
  fri = "Friday",
  sat = "Saturday",
  sun = "Sunday",
}

const isWeekend = (day: WeekDay): boolean => {
  return day === WeekDay.sat || day === WeekDay.sun;
};
