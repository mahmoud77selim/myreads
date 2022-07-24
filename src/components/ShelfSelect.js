import React from 'react';

const ShelfSelect = ({ book, shellf, onShelfChange }) => {
  const handleChange = (e) => {
    let { value } = e.target;
    onShelfChange(book, value);
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={shellf || 'none'}>
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        {<option value="none">None</option>}
      </select>
    </div>
  );
};

export default ShelfSelect;
