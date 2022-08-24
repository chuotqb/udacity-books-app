import React, { Component } from "react";
import Book from "./Book";

class ContentSearch extends Component {
    render() {
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                 {this.props.listSearchBooks.map((book)=>(
                    <Book key={book.id} book={book} onUpdateShelf={this.props.onUpdateShelf}/>
                 ))}
                </ol>
            </div>
        )
    }
}

export default ContentSearch;