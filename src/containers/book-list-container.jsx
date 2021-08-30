import React from "react"
import BookListItem from "../components/book-list-item/book-list-item"
import { connect } from "react-redux"
import { useEffect } from "react"
import { fetchBooks, bookAddedToCard } from "../actions/index"
import Spinner from "../components/spinner/spinner"
import ErrorIndicator from "../components/error-indicator/error-indicator"
import composeHOC from "../utils/composeHOC"
import withBookstoreService from "../components/hoc/with-bookstore-service"
import BookList from "../components/book-list/book-list"
import { bindActionCreators } from "redux"

const BookListContainer = ({ books, loading, error, fetchBooks, onAddedToCard }) => {
	useEffect(() => {
		fetchBooks()
	}, [fetchBooks])

	if (loading) {
		return <Spinner />
	}

	if (error) {
		return <ErrorIndicator />
	}

	const bookList = books.map((book) => {
		return (
			<li key={book.id}>
				<BookListItem book={book} onAddedToCard={() => onAddedToCard(book.id)} />
			</li>
		)
	})

	return <BookList bookList={bookList} />
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
	return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookstoreService } = ownProps

	return bindActionCreators(
		{
			fetchBooks: fetchBooks(bookstoreService),
			onAddedToCard: bookAddedToCard,
		},
		dispatch
	)
}

export default composeHOC(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
