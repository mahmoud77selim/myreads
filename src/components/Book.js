import React from 'react';
import ShelfSelect from './ShelfSelect';

const Book = ({ shelvedBooks, book, onShelfSelect, isSearch }) => {
  //Check shelfs for search reslut
  if (isSearch) {
    let res = shelvedBooks.filter((shelvedBook) => shelvedBook.id === book.id);
    if (res.length > 0) {
      book.shelf = res[0].shelf;
    }
  }

  const handleShelfChange = (book, shelf) => {
    onShelfSelect(book, shelf);
  };
  let imageUrl = book.imageLinks
    ? book.imageLinks.thumbnail
    : 'https://via.placeholder.com/300.png/09f/fff';

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageUrl}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>
        <ShelfSelect book={book} shellf={book.shelf} onShelfChange={handleShelfChange} />
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && (
        <ul className="book-authors">
          {book.authors.map((author, index) => (
            <li key={index}>{author}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Book;
