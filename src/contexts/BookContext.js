import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

export const BookContextProvider = props => {

    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const booksData = localStorage.getItem('books');
        return booksData ? JSON.parse(booksData) : [];
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );

};

