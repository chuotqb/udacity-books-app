import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf';

class Book extends Component {
    render() {
        const { book, shelf, onUpdateShelf } = this.props;
        return (
            <li>
                <div className='book'>
                    <div className='book-top'>
                        <div className='book-cover' style={{backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})`}}></div>
                        <ChangeShelf book={book} shelf={shelf} onUpdateShelf={onUpdateShelf}/>
                    </div>
                    <div className='book-title'>{book.title}</div>
                    <div className='book-authors'>{book.authors && book.authors.join(', ')}</div>
                </div>
            </li>
        )
    }
}

export default Book;