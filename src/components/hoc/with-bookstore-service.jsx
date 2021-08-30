import React, { useContext } from "react"
import { Context } from "../bookstore-service-context/bookstore-service-context"

const withBookstoreService = () => (Wrapped) => {
	return (props) => {
		const bookstoreService = useContext(Context)

		return <Wrapped {...props} bookstoreService={bookstoreService} />
	}
}

export default withBookstoreService
