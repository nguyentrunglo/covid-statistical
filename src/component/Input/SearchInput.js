import React from 'react';

function SearchInput(props) {
    return (
        <div className="py-4 relative">
            <button className="absolute inset-y-0 left-0 flex items-center pl-3 block" type="submit">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" fill="none">
                    <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
            </button>
            <input
                className="block w-full focus:outline-none focus:bg-white focus:text-gray-900 rounded-lg pl-10 pr-4 py-2 border"
                placeholder="Search by keywords"
                onChange={props.onChangeSearchInput}
            />
        </div>
    );
}

export default React.memo(SearchInput);