import React from "react"
import { Component } from "react"
import ErrorIndicator from "../error-indicator/error-indicator"

export default class ErrorBoundary extends Component {
	state = {
		hasError: false,
	}

	componentDidCatch() {
		this.setState({ hasError: true })
	}

	render() {
		if (this.state.hasError === true) {
			return <ErrorIndicator />
		}

		return this.props.children
	}
}
