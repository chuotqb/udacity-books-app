import React, { Component } from "react";
import { Link } from 'react-router-dom';

class LinkSearchBook extends Component {
    render() {
        return (
            <div className="open-search">
                <Link to="/search">
                    <a>Search Book</a>
                </Link>
            </div>
        )
    }
}

export default LinkSearchBook;
