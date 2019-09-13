import React, { useState, useContext } from 'react';
import { BookContext } from "../contexts/BookContext";


export const AddBookForm = props => {

    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const onFormSubmit = e => {
      e.preventDefault();
      dispatch({ type: 'ADD_BOOK', book: { title, author } });
      setTitle('');
      setAuthor('');
    };

    return (
        <div className="App">
            <form onSubmit={ onFormSubmit }>
                <input placeholder="title" value={ title } onChange={ e => setTitle(e.target.value) } />
                <input placeholder="author" value={ author } onChange={ e => setAuthor(e.target.value) } />
                <button type="submit">Add</button>
            </form>

        </div>
    );

};

