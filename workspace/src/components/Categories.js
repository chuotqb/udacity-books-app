import React, { Component } from 'react'
import ListShelf from './ListShelf';
import LinkSearchBook from './LinkSearchBook';

class Categories extends Component {
    render() {
        const { books, onUpdateShelf } = this.props;
        return (
            <div className='list-books'>
                <div className='list-books-title'>
                    <h1>MyReads</h1>
                </div>
                <ListShelf books={books} onUpdateShelf={onUpdateShelf} />
                <LinkSearchBook />
            </div>
        )

    }
}

export default Categories