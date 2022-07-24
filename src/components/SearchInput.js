import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchInput = ({ onSerch }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    onSerch(value.trim());
  };
  return (
    <div className="search-books-bar">
      <Link to={'/'} className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchInput;
