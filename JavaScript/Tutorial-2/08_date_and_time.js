const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());

const newDate = new Date(2004, 0, 4); // Take input as yy/mm/dd
// newDate=new Date("2004-01-04") // Take input as yy/mm/dd
// newDate=new Date("05/06/2023") // Take input as dd/yy/mm for india format
console.log(newDate.toLocaleDateString()); // give output as dd/mm/yy
console.log(
  `${newDate.getDay()}""${newDate.getMonth()}""${newDate.getTime()}""${newDate.getYear()}`
);
