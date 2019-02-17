import React from 'react'

function BooksGrid(props) {

    function updateBook(event, book) {
        props.onUpdateBook(book, event.target.value)
    }

    const judgeShelf = (shelf, bookShelf) => shelf === bookShelf ? '✓' : '';
    console.log(props.books)
    return (
        <ol className="books-grid">
            {props.books.length > 0 && props.books.filter(props.filter).map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                                <select value={book.shelf} onChange={e => updateBook(e, book)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">{ judgeShelf('currentlyReading', book.shelf) } Currently Reading</option>
                                    <option value="wantToRead">{ judgeShelf('wantToRead', book.shelf) } Want to Read</option>
                                    <option value="read">{ judgeShelf('read', book.shelf) } Read</option>
                                    <option value="none">{ judgeShelf('none', book.shelf) } None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">
                            <ul>
                                {book.authors ? book.authors.map((author, index) => (
                                    <li key={index}>{author}</li>
                                )) : (<li>Unknown</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default BooksGrid