import React from 'react';
import Input from './styles';

type SearchType ={
  onChange: any;
  value: any;
  placeholder: any;
}

const Search = ({ onChange, value, placeholder }: SearchType) => (
  <Input
    type="text"
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    />
);

export default Search;
