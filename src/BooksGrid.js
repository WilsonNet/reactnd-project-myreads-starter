import React from 'react'

function BooksGrid(props) {

    function updateBook(event, book) {
        props.onUpdateBook(book, event.target.value)
    }

    return (
        <ol className="books-grid">
            {props.books.filter(props.filter).map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={e => updateBook(e, book)}>
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
        </ol>
    )
}

export default BooksGrid