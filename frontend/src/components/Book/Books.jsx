// import React from 'react'
// import { useState, useEffect } from 'react'
// import Book from './Book';
// import axios from 'axios'

// const URL = "http://localhost:5000/books";
// const fetchHandler = async () => {
//   return await axios.get(URL)
//   .then((res) => res.data)
// }
// const Books = () => {

//   const [books, setBooks] = useState();

//   useEffect(() => {
//    fetchHandler().then(data => setBooks(data.books))
//   }, [])
//   console.log(books)

//   return (
//     <>
//     <div>
//         <ul>
         
//             {books && books.map((book,i) => {
//                 <div key={i}>
//                     <Book book={book}/>
//                 </div>
//             } )}
//         </ul>
//     </div>
//     </>
//   )
// }

// export default Books


import React, { useState, useEffect } from 'react';
import Book from './Book';
import axios from 'axios';
import './Book.css'

const URL = "http://localhost:5000/books";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data)
        setBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <ul>
        {books && 
        books.map((book, i) => (
          <li className="book" key={i}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;





















