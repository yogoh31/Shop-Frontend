import React from 'react';

import InputField from '../inputs/InputField';

import classes from './SearchProductBar.module.css';
// TODO Merge with a Homepage
const SearchBar = () => {
  return (
    <form className={classes.form}>
      <InputField
        input={{
          id: 'search-bar',
          placeholder: 'Search products!',
        }}
      />
    </form>
  );
};

export default SearchBar;
