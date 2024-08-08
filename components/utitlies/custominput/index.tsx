// components/SearchInput.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="pl-4 pr-10 focus:outline-none py-2 rounded-full h-9 w-[180px] md:w-[215px] border  border-bgd bg-white"
        style={{ borderRadius: '30px' }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <FaSearch className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400" />
    </div>
  );
};

export default SearchInput;
