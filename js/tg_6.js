'use strict';
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

//const titles = books.map(book => book.title);
//const authors = books.map(book => book.author);
const ratings = books.map(book => book.rating);
let ratingsAverage = 0;
for (const item of ratings) {
  ratingsAverage += item / ratings.length;
}
console.log(ratingsAverage);
