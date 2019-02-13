import React from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid';

function ListBooks (props) {

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
                                {/* <ol className="books-grid">
                                    {books.filter(book => book.shelf === 'currentlyReading').map((book) => (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select onChange={e => this.updateBook(e, book)}>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">
                                                    <ul>
                                                        {book.authors.map((author, index) => (
                                                            <li key={index}>{author}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol> */}
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <BooksGrid onUpdateBook={props.onUpdateBook} books={books} filter={book => book.shelf === 'wantToRead'} />
                                {/*                                 
                                <ol className="books-grid">
                                    {books.filter(book => book.shelf === 'wantToRead').map((book) => (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select onChange={e => this.updateBook(e, book)}>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">
                                                    <ul>
                                                        {book.authors.map((author, index) => (
                                                            <li key={index}>{author}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol> */}
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <BooksGrid onUpdateBook={props.onUpdateBook} books={books} filter={book => book.shelf === 'read'} />

                                {/* <ol className="books-grid">
                                    {books.filter(book => book.shelf === 'read').map((book) => (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select onChange={e => this.updateBook(e, book)}>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">
                                                    <ul>
                                                        {book.authors.map((author, index) => (
                                                            <li key={index}>{author}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol> */}
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