/*4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.*/

let book = [
  { author_name: "Sonu", publicationYear: 2012 },
  { author_name: "Bipin", publicationYear: 2011 },
  { author_name: "Kumkum", publicationYear: 2020 },
  { author_name: "Anupam", publicationYear: 2001 },
  { author_name: "Renu", publicationYear: 2018 },
  { author_name: "Shankar", publicationYear: 1992 }
];

let bookAfter2010 = book.filter((element) =>{
  return element.publicationYear >2010
});

for (let i = 0; i < bookAfter2010.length; i++) {
  console.log("Author name: ", bookAfter2010[i].author_name, "Publication year: ", bookAfter2010[i].publicationYear)
};