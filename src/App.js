import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/home';
import Search from './pages/search';
import Error from './components/Error';
import * as BooksApi from './BooksAPI';
const App = () => {
  const [shelvedBooks, setShelvedBooks] = useState([]);

  const [shelves, setShelves] = useState([
    { title: 'Currently Reading', books: [] },
    { title: 'Read', books: [] },
    { title: 'Want to Read', books: [] },
  ]);

  const [error, setError] = useState('');

  //Listen to shelf changes => useEffect Dependency
  const [shelfChanged, setShelfChanged] = useState(0);

  const handleShelfChange = (book, shelf) => {
    console.log(shelf);
    setShelfChanged(shelfChanged + 1);
    BooksApi.update(book, shelf);
  };

  useEffect(() => {
    const getBooks = async () => {
      await BooksApi.getAll()
        .then((res) => {
          setError('');
          setShelvedBooks(res);
          let shelvesBooks = makeShelves(res);
          setShelves([
            { title: 'Currently Reading', books: shelvesBooks[0] },
            { title: 'Read', books: shelvesBooks[1] },
            { title: 'Want to Read', books: shelvesBooks[2] },
          ]);
        })
        .catch((error) => {
          setError(error);
        });
    };
    getBooks();
  }, [shelfChanged]);

  const makeShelves = (books) => {
    const currentBooks = books.filter((book) => book.shelf === 'currentlyReading');
    const readBooks = books.filter((book) => book.shelf === 'read');
    const wantBooks = books.filter((book) => book.shelf === 'wantToRead');
    const shelvesBooks = [currentBooks, readBooks, wantBooks];
    return shelvesBooks;
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            error === '' ? (
              <Home shelves={shelves} onShelfChange={handleShelfChange} />
            ) : (
              <Error message="Can't retrieve!, Please refresh page or check your connection" />
            )
          }
        />
        <Route
          path="/search"
          element={<Search shelvedBooks={shelvedBooks} onShelfChange={handleShelfChange} />}
        />
      </Routes>
    </div>
  );
};

export default App;
