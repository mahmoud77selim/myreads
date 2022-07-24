import React from 'react';
import { Link } from 'react-router-dom';
import BooksShelf from '../components/BooksShelf';

const Home = ({ shelves, onShelfChange }) => {
  const handleShelfChange = (book, shelf) => {
    onShelfChange(book, shelf);
  };
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
          <div className="open-search">
            <Link to="/search"></Link>
          </div>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf, index) => (
            <BooksShelf
              key={index}
              shelf={shelf.title}
              books={shelves[index].books}
              onShelfChange={handleShelfChange}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
