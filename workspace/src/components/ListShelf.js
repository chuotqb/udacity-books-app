import React, { Component } from 'react'
import Shelf from './Shelf';

class ListShelf extends Component {
    render() {
        const { books, onUpdateShelf } = this.props;
        const shelves = [
            { id: "1", val: "currentlyReading", title: "Currently Reading" },
            { id: "2", val: "wantToRead", title: "Want to Read" },
            { id: "3", val: "read", title: "Read" },
            { id: "4", val: "none", title: "None" },
        ];
        return (
            <div className='list-books-content'>
                <div>
                    {
                        shelves.map(shelf => (
                            <Shelf key={shelf.id} shelf={shelf} books={books} onUpdateShelf={onUpdateShelf} />
                        ))
                    }
                </div>
            </div>
        )
    }


}

export default ListShelf