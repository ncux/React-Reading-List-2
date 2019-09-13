import React from 'react';
import { BookContextProvider } from "./contexts/BookContext";

import { Navbar } from "./components/navbar";
import { BookList } from "./components/booksList";
import { AddBookForm } from "./components/addBook";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <AddBookForm />
        <BookList />
      </BookContextProvider>

    </div>
  );
}

export default App;
