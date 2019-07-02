import React from 'react';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return <input
        style={searchStyle}
        className="foo"
        htmlFor=""
        placeholder={searchText}
        autoComplete=""
        disabled={true} />;
};

export default SearchPanel;
