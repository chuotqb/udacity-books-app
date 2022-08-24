import React, { Component } from 'react';
import InputSearch from './InputSearch';
import ContentSearch from './ContentSearch';

class SearchBook extends Component {
    render() {
        const { onUpdateShelf, onSearch, listSearchBooks } = this.props;
        return (
            <div className="search-books">
                <InputSearch onSearch={onSearch} />
                <ContentSearch onUpdateShelf={onUpdateShelf} listSearchBooks={listSearchBooks} />
            </div>
        )
    }
}

export default SearchBook