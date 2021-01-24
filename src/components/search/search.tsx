import React, { FC } from 'react';
import './search.scss';

type SearchType = {
  value: string;
  placeholder: string;
  type: string;
  onChange: (e: string) => void;
};

export const Search: FC<SearchType> = ({
  value,
  placeholder,
  type,
  onChange
}) => {
  return (
    <div className="search">
      <h3>Search:</h3>
      <input
        className="search__input"
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};