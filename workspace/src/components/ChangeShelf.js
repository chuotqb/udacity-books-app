import React, { Component } from "react";

class ChangeShelf extends Component {
    changeBookShefl = (event) => {
        this.props.onUpdateShelf(this.props.book, event.target.value)
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select defaultValue={this.props.book.shelf} onChange={this.changeBookShefl}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ChangeShelf