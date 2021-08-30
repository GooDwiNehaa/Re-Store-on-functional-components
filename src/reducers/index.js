import updateBookList from "./book-list"
import updateShoppingCard from "./shopping-card"

const reducer = (state, action) => {
	console.log(action.type)
	return {
		bookList: updateBookList(state, action),
		shoppingCard: updateShoppingCard(state, action),
	}
}

export default reducer
