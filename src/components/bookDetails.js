import React, { useContext, useState } from 'react';
import { BookContext } from "../contexts/BookContext";


export const BookDetails = ({ book }) => {

    const { dispatch } = useContext(BookContext);

    return (
        <div onClick={ () => dispatch({ type: 'REMOVE_BOOK', id: book.id }) } className="book">
            <p className="title">{ book.title }</p>
            <p className="author">{ book.author }</p>
        </div>
    );

};

