import React, { useContext, useState } from 'react';
import { BookContext } from "../contexts/BookContext";


export const BookDetails = ({ book }) => {

    const { removeBook } = useContext(BookContext);

    return (
        <div onClick={ () => removeBook(book.id) } className="book">
            <p className="title">{ book.title }</p>
            <p className="author">{ book.author }</p>
        </div>
    );

};

