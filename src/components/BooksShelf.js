import React from 'react';
import Book from './Book';

const BooksShelf = ({ shelf, books, onShelfChange }) => {
  const handleShelfSelect = (book, shelf) => {
    onShelfChange(book, shelf);
  };
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onShelfSelect={handleShelfSelect} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
