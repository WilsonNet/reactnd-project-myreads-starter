import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import BooksGrid from './BooksGrid';
import * as BooksAPI from './BooksAPI'




class SearchBooks extends Component {
  state = {
    query: '', 
    books: []
  }

  updateQuery(query) {
    this.setState({ query: query.trim() })
    this.searchBooks(query)
  }

  searchBooks(query) {
     BooksAPI.search(query).then(result => this.setState({ books: result }))
  }


  render() {

    const { query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid onUpdateBook={this.props.onUpdateBook} books={this.state.books} filter={(book) => true} />
        </div>
      </div>)
  }
}


export default SearchBooks