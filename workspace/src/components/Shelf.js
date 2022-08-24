import React, { Component } from 'react'
import Book from './Book';

class Shelf extends Component {
    render() {
        const { shelf, books, onUpdateShelf } = this.props;
        const filterBookShelf = books.filter(book =>
            book.shelf === shelf.val
        )
        return (
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{shelf.title}</h2>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {
                            filterBookShelf.map(book => (
                                <Book key={book.id} book={book} shelf={shelf.shelf} onUpdateShelf={onUpdateShelf} />
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf