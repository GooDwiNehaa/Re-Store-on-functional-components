import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import "./shop-header.css"

const ShopHeader = ({ numItems, total }) => {
	return (
		<header className="shop-header">
			<Link to="/">
				<div className="logo text-dark">ReStore</div>
			</Link>
			<Link to="/card">
				<i className="cart-icon fa fa-shopping-cart">
					<span className="shopping-cart">
						{numItems} items $({total})
					</span>
				</i>
			</Link>
		</header>
	)
}

const mapStateToProps = ({ shoppingCard: { cardItems, orderTotal } }) => {
	return {
		numItems: cardItems.length,
		total: orderTotal,
	}
}

export default connect(mapStateToProps)(ShopHeader)
