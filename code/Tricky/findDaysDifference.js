// Calculate the number of days between two dates
// 

const daysDiff = (date1, date2) =>
  Math.ceil(Math.abs(date1 - date2) / 86400000);

console.log(daysDiff(new Date("2022-05-10"), new Date("2022-11-25")));
