import React from "react";

// define types by interface

// interface MyBooks {
//   id: number;
//   title: string;
// }

// build an object
// if i want to make objects of multiple books i have to wrap it into an array
// const books: MyBooks[] = [
//   {
//     id: 1,
//     title: "Monday story",
//   },
//   {
//     id: 2,
//     title: "Tuesday story",
//   },
//   {
//     id: 3,
//     title: "Wednesday story",
//   },
//   {
//     id: 4,
//     title: "Thursday story",
//   },
//   {
//     id: 5,
//     title: "Friday story",
//   },
//   {
//     id: 6,
//     title: "Saturday story",
//   },
//   {
//     id: 7,
//     title: "Sunday story",
//   },
// ];
//this is the code to fatch any data from api into terminal... we get this data by books api github... 
// in which we copy a base data and then fetch it SiHere,,,, if i want a perticular part of data we acess it throug endpoints at the end of our base url
export default async function Home () {

  interface MyBooks{
    id: number,
    name: 'string',
    type: 'string',
    available: boolean 
  }
  const res = await  fetch("https://simple-books-api.glitch.me/books",{method:"GET"},)
  const books:MyBooks []= await res.json()
  console.log(books)
  return (
    <div>
      {/* to iterate the id of object */}
      {/* <h2>{books[4].id}</h2> */}
      {/* to iterate the title of object */}
      {/* <h2>{books[2].title}</h2> */}
      {/* if i want to iterate the full object as book i have to put a method called stringify method which convert object into json format */}
      {/* built in method of javascript */}
      {/* if we have to print all titles and id of books we use map method  */}
      {books.map((book) => {
        return (
          <div key={book.id}>
            <h1>{book.id}</h1>
            <h1>{book.name}</h1>
          </div>
        );
      })}
    </div>
  );
};


