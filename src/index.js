import React from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./components/app/app"
import { Context } from "./components/bookstore-service-context/bookstore-service-context"
import ErrorBoundary from "./components/error-boundary/error-boundary"
import BookstoreService from "./services/bookstore-service"
import store from "./store"

const bookstoreServise = new BookstoreService()

ReactDom.render(
	<Provider store={store}>
		<ErrorBoundary>
			<Context.Provider value={bookstoreServise}>
				<Router>
					<React.StrictMode>
						<App />
					</React.StrictMode>
				</Router>
			</Context.Provider>
		</ErrorBoundary>
	</Provider>,
	document.getElementById("root")
)
