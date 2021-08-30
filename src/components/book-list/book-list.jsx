import React from "react"
import "./book-list.css"

const BookList = ({ bookList }) => {
	return <ul className="book-list">{bookList}</ul>
}

export default BookList
