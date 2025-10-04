import React, { useState, useRef, useEffect } from 'react';

const SearchableSelect = ({ label, options, selected, onSelect, colors}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full cursor-default rounded-md border py-2 pl-3 pr-10 text-left sm:text-sm transition-all duration-200"
        style={{
          borderColor: colors.borderGray,
          color: colors.darkGray,
          "--tw-ring-color": colors.blue,
        }}
      >
        <span className="block truncate">{selected || label}</span>
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          style={{ borderColor: colors.borderGray }}
        >
          <div className="px-1 py-1">
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2"
              style={{ borderColor: colors.borderGray, "--tw-ring-color": colors.blue }}
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          {filteredOptions.length > 0 ? (
            filteredOptions.map(option => (
              <li
                key={option}
                onClick={() => { onSelect(option); setIsOpen(false); setSearchTerm(''); }}
                className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100 transition-colors duration-150"
                style={{ color: colors.gray }}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="relative select-none py-2 pl-3 pr-9 text-gray-500 italic">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableSelect;
