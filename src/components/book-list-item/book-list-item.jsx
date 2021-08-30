import React from "react"
import "./book-list-item.css"

const BookListItem = ({ book, onAddedToCard }) => {
	const { title, author, price, coverImage } = book

	return (
		<div className="book-list-item">
			<div className="book-cover">
				<img src={coverImage} alt="cover" />
			</div>
			<div className="book-datails">
				<span href="#" className="book-title">
					{title}
				</span>
				<div className="book-author">{author}</div>
				<div className="book-price">${price}</div>
				<button onClick={onAddedToCard} className="btn btn-info add-to-cart">
					Add to card
				</button>
			</div>
		</div>
	)
}

export default BookListItem
