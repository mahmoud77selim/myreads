import React from 'react';
import Book from './Book';

const SearchedBooks = ({ shelvedBooks, searchedBooks, onShelfChange }) => {
  const handleShelfSelect = (book, shelf) => {
    onShelfChange(book, shelf);
    // BooksApi.update(book, shelf);
  };

  return (
    <div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks.map((book) => (
            <li key={book.id}>
              <Book
                isSearch={true}
                shelvedBooks={shelvedBooks}
                book={book}
                onShelfSelect={handleShelfSelect}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchedBooks;
