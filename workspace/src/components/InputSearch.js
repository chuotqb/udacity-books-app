import React, { Component } from "react";
import { Link } from "react-router-dom";

class InputSearch extends Component {

    queryBooksHandle = (event) => {
        this.props.onSearch(event.target.value);
    }
    render() {
        return (
            <div className="search-books-bar">
                <Link to='/'>
                    <a className="close-search">Back To List Book</a>
                </Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.queryBooksHandle} />
                </div>
            </div>

        )
    }
}

export default InputSearch;