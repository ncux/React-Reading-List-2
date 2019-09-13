import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

export const BookContextProvider = props => {

    const [books, setBooks] = useState([
        { title: 'book 1', author: 'author 1', id: 1 },
        { title: 'book 2', author: 'author 2', id: 2 }
    ]);

    const addBook = (title, author) => {
      setBooks([...books, { title, author, id: uuid()}]);
    };

    const removeBook = id => {
      let filteredBooks = books.filter(book => book.id !== id);
      setBooks([...filteredBooks]);
    };

    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    );

};

