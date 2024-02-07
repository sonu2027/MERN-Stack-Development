// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

function getTitles(booksTitles){
    console.log(booksTitles);
}

function listItem(books, getTitles){
    booksTitles=books.map((e)=>e.title.toUpperCase())
    getTitles(booksTitles)
}

const books = [
  { title: "JavaScript", author: "A", year: 2012 },
  { title: "C++", author: "B", year: 2007 },
  { title: "Python", author: "C", year: 2018 },
  { title: "Java", author: "D", year: 2015 },
];

listItem(books, getTitles)