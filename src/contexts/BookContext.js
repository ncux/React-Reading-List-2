import React, { createContext, useReducer } from 'react';
import { BookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

export const BookContextProvider = props => {

    const [books, dispatch] = useReducer(BookReducer, []);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );

};

