import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Categories from './components/Categories'
import SearchBook from './components/SearchBook'

class BooksApp extends React.Component {
  state = {
    inputSearch: '',
    books: [],
    listSearchBooks: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  // Call Api get all book
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  // Call Api update list book
  updateShelfHandler = (selectedBook, selectedShelf) => {
    selectedBook.shelf = selectedShelf;
    this.setState(
      (state) => ({
        books: state.books.filter((item) => item.id !== selectedBook.id).concat([selectedBook]),
      })
    )
    BooksAPI.update(selectedBook, selectedShelf)
  }

  //Call Api search book
  searchBookHandler = (inputSearch) => {
    if (inputSearch === "") {
      this.setState({
        listSearchBooks: []
      })
      return;
    }
    BooksAPI.search(inputSearch).then((books) => {
      if (books !== undefined && books.error !== "empty query") {
        let id = books.map((book) => book.id);
        let currentlyReading = this.myFuctionCheck(
          id,
          this.state.books
            .filter((cr) => cr.shelf === "currentlyReading")
            .map((b) => b.id)
        );
        let read = this.myFuctionCheck(
          id,
          this.state.books
            .filter((r) => r.shelf === "read")
            .map((b) => b.id)
        );
        let wantToRead = this.myFuctionCheck(
          id,
          this.state.books
            .filter((wtr) => wtr.shelf === "wantToRead")
            .map((b) => b.id)
        );

        for (let item = 0; item < books.length; item++) {
          if (currentlyReading.includes(books[item].id)) {
            books[item].shelf = "currentlyReading";
          }
          if (read.includes(books[item].id)) {
            books[item].shelf = "read";
          }
          if (wantToRead.includes(books[item].id)) {
            books[item].shelf = "wantToRead";
          }
          if (!(currentlyReading.includes(books[item].id) || read.includes(books[item].id) || wantToRead.includes(books[item].id))) {
            books[item].shelf = "none";
          }
        };
      }
      if (books !== undefined && books.error !== "empty query") {
        this.setState({
          listSearchBooks: books,
        });
      } else {
        this.setState({
          listSearchBooks: [],
        });
      }
    })
  }
  myFuctionCheck = (val1, val2) => {
    let flag;
    flag = val2;
    val2 = val1;
    val1 = flag;
    return val1.filter((object) => {
      return val2.indexOf(object) > -1;
    });
  };

  render() {
    return (
      <div className='app'>
        <Routes>
          <Route exact path="/" element={<Categories books={this.state.books} onUpdateShelf={this.updateShelfHandler} />} />
          <Route path="/search" element={<SearchBook onUpdateShelf={this.updateShelfHandler} onSearch={this.searchBookHandler} listSearchBooks={this.state.listSearchBooks} />} />
        </Routes>
      </div>
    )
  }
}


export default BooksApp
