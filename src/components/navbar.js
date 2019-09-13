import React, { useContext } from 'react';
import { BookContext } from "../contexts/BookContext";


export const Navbar = props => {

    const { books } = useContext(BookContext);

    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>{ books.length } books are currently in your reading list.</p>
        </div>
    );

};

