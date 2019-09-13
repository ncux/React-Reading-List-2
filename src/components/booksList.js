import React, { useContext, useState } from 'react';
import { BookContext } from "../contexts/BookContext";
import { BookDetails } from "./bookDetails";


export const BookList = props => {
    const { books, addBook, removeBook } = useContext(BookContext);

    return books.length ? (
        <div className="bookList">
            { books.map(book => (
                <div>
                    <BookDetails book={book} key={book.id} />
                    <br />
                </div>
            )) }
        </div>
    ) : (
        <div className="noBooks">
            <p>There are 0 books in your list. </p>
        </div>
    );

};

