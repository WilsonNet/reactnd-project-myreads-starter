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
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  render() {
    return (
      <div className="app">
        {/* <Route path="/search-books" component={SearchBooks}>
        </Route> */}
        <Route path="/" render={() => (
          <ListBooks
            books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
