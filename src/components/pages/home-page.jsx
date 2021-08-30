import React from "react"
import BookListContainer from "../../containers/book-list-container"
import ShoppingCardTable from "../shopping-card-table/shopping-card-table"

const HomePage = () => {
	return (
		<div>
			<BookListContainer />
			<ShoppingCardTable />
		</div>
	)
}

export default HomePage
