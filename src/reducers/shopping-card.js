const updateCardItems = (items, item = undefined, idx) => {
	if (idx === -1) {
		return [...items, item]
	} else if (item === undefined) {
		return [...items.slice(0, idx), ...items.slice(idx + 1)]
	} else {
		return [...items.slice(0, idx), item, ...items.slice(idx + 1)]
	}
}

const updateCardItem = (book, card, quantity) => {
	if (card) {
		if (quantity === -1) {
			return {
				...card,
				count: card.count === 1 ? 1 : card.count + quantity,
				total: card.total === book.price ? book.price : card.total + quantity * book.price,
			}
		} else {
			return {
				...card,
				count: card.count + quantity,
				total: card.total + quantity * book.price,
			}
		}
	} else {
		return {
			id: book.id,
			title: book.title,
			count: 1,
			total: book.price,
		}
	}
}

const updateOrder = (state, bookId, quantity) => {
	const {
		bookList: { books },
		shoppingCard: { cardItems },
	} = state
	const book = books.find((book) => book.id === bookId)
	const cardIndex = cardItems.findIndex(({ id }) => id === bookId)
	const card = cardItems[cardIndex]

	const cardItem = updateCardItem(book, card, quantity)

	return {
		cardItems: updateCardItems(cardItems, cardItem, cardIndex),
	}
}

const updateShoppingCard = (state, action) => {
	if (state === undefined) {
		return {
			cardItems: [],
			orderTotal: 0,
		}
	}

	switch (action.type) {
		case "BOOK_ADDED_TO_CARD":
			return updateOrder(state, action.payload, 1)
		case "ORDER_TOTAL_UPDATE":
			return {
				...state.shoppingCard,
				orderTotal: action.payload,
			}
		case "ON_INCREASE_CARD":
			return updateOrder(state, action.payload, 1)
		case "ON_DECREASE_CARD":
			return updateOrder(state, action.payload, -1)
		case "ON_DELETE_CARD":
			return {
				...state.shoppingCard,
				cardItems: updateCardItems(state.shoppingCard.cardItems, undefined, action.payload),
			}
		default:
			return state.shoppingCard
	}
}

export default updateShoppingCard
