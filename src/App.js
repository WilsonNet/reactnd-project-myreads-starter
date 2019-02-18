import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class BooksApp extends Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }
  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    book.shelf = shelf
    console.log('hehe', this.state.books)
    this.setState(prevState => ({books: prevState.books.filter(b=> b.id !== book.id).concat( [ book ] )}))
  }



  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            storedBooks={this.state.books}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
            }

            }
          />
        )
        }>
        </Route>
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf)
            }}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
