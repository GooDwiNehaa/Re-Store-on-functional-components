import React from "react"
import { Route, Switch } from "react-router-dom"
import CardPage from "../pages/card-page"
import HomePage from "../pages/home-page"
import ShopHeader from "../shop-header/shop-header"

const App = () => {
	return (
		<main role="main" className="container">
			<ShopHeader numItems={5} total={210} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/card" component={CardPage} />
			</Switch>
		</main>
	)
}

export default App
