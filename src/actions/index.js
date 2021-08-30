const booksLoaded = (newBooks) => {
	return {
		type: "FETCH_BOOKS_LOADED",
		payload: newBooks,
	}
}

const booksRequested = () => {
	return {
		type: "FETCH_BOOKS_REQUESTED",
	}
}

const booksError = (error) => {
	return {
		type: "FETCH_BOOKS_FAILURE",
		payload: error,
	}
}

const bookAddedToCard = (bookId) => {
	return {
		type: "BOOK_ADDED_TO_CARD",
		payload: bookId,
	}
}

const totalUpdate = (cardItems) => {
	let sum = 0
	cardItems.forEach((card) => {
		sum += card.total
	})
	return {
		type: "ORDER_TOTAL_UPDATE",
		payload: sum,
	}
}

const onIncreaseCard = (id) => {
	return {
		type: "ON_INCREASE_CARD",
		payload: id,
	}
}

const onDecreaseCard = (id) => {
	return {
		type: "ON_DECREASE_CARD",
		payload: id,
	}
}

const onDeleteCard = (idx) => {
	return {
		type: "ON_DELETE_CARD",
		payload: idx,
	}
}

const fetchBooks = (bookstoreServie) => () => (dispatch) => {
	dispatch(booksRequested())
	bookstoreServie
		.getBooks()
		.then((data) => dispatch(booksLoaded(data)))
		.catch((err) => dispatch(booksError(err)))
}

export { fetchBooks, bookAddedToCard, totalUpdate, onIncreaseCard, onDecreaseCard, onDeleteCard }
