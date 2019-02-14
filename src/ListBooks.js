import React from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid';

function ListBooks(props) {

    const { books } = props
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <BooksGrid onUpdateBook={props.onUpdateBook} books={books} filter={book => book.shelf === 'currentlyReading'} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <BooksGrid onUpdateBook={props.onUpdateBook} books={books} filter={book => book.shelf === 'wantToRead'} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <BooksGrid onUpdateBook={props.onUpdateBook} books={books} filter={book => book.shelf === 'read'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link
                    to='/search'
                >
                    <button>
                        Add a book
                        </button>
                </Link>
            </div>
        </div>
    )
}

export default ListBooks