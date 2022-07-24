import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import * as BooksApi from '../BooksAPI';
import SearchedBooks from '../components/SearchedBooks';
import Error from '../components/Error';
const Search = ({ shelvedBooks, onShelfChange }) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchError, setSearchError] = useState('');

  const booksShearch = async (value) => {
    if (value === '') {
      setSearchedBooks([]);
      return;
    }

    await BooksApi.search(value)
      .then((result) => {
        if (result.error) {
          setSearchError(result.error);
        } else {
          setSearchError('');
          setSearchedBooks(result);
        }
      })
      .catch((error) => {
        setSearchError(error.message);
      });
  };

  const handleShelfChange = (book, shelf) => {
    onShelfChange(book, shelf);
  };

  return (
    <div className="search-books">
      <SearchInput onSerch={booksShearch} />
      {searchError === '' ? (
        <SearchedBooks
          searchedBooks={searchedBooks}
          shelvedBooks={shelvedBooks}
          onShelfChange={handleShelfChange}
        />
      ) : searchError === 'empty query' ? (
        <Error message="No Books matches your search" />
      ) : (
        <Error message="Can't retrieve!, Please refresh page or check your connection" />
      )}
    </div>
  );
};

export default Search;
