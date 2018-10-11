import React from "react";
import Book from "./Book/Book";

const Books = props =>
  props.narray.map(book => {
    return (
      < Book
        id={book.Id}
        title={book.Title}
        genre={book.Genre}
        description={book.Description}
        image={book.Image}
        first={book.First_Name}
        last={book.Last_Name}
      />
    )
  })


export default Books;


