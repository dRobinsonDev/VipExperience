import React from 'react';
import {  getCartItems } from '../../repository';
import { Link, Redirect } from 'react-router-dom';

export default class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			total: 0
		}
	}
	submitPayment() {
		console.log(this.state.total)
		var submit = prompt("Are you sure you want to pay $");

		if (submit) {
			window.location.href="/";
		}

	}

	componentWillMount() {
		let cart = localStorage.getItem('cart');
		let tickets = localStorage.getItem('tickets');
		let total = 0;
		tickets = JSON.parse(tickets);
		if (!cart) return; 
		getCartItems(cart).then((products) => {
			let cartQty = localStorage.getItem('cart');
			cartQty = JSON.parse(cartQty);
			for (let i = 0; i < products.length; i++) {
				total += products[i].price * products[i].qty;
			}
			for ( let i = 0; i < cart.length; i++)  {
				let cur = cart[i];
				let flag = false;
				for (let j = 0; j < products.length; j++) {
				  if ( products[j].id === cur)  {
						flag = true;
				  }
				}
				if (!flag) {
					products[products.length] = {
						id: cur,
						name: tickets[cur],
						price: 200,
						qty: cartQty[`${cur}`]
					}
					total += 200 * cartQty[`${cur}`];
				}
			}
			this.setState({ products, total });
		});
		cart = JSON.parse(cart);
		cart = Object.keys(cart);
	}

	render() {
		const { products, total } =  this.state;
		return (
			<div className="container cart">
				<h3 className="card-title">Checkout</h3>
				<hr/>
				<div className="linkContainer">
				<Link to="/Products"><button className="btn btn-success float-right clear-both">Products</button></Link>
				<Link to="/Cart"><button className="btn btn-primary float-right" style={{  marginRight: "10px" }}>View Cart</button></Link>
				</div>
				{
					products.map((product, index) => 
					<div className="card cart-item flex flexCol" style={{ marginBottom: "10px"}}>
						<div key={index}>
							<p>
								{product.name} 
								<small> (quantity: {product.qty})</small>
								<span className="float-right text-primary">${product.qty * product.price}</span>
							</p><hr/>
						</div>
					</div>
					)
				}
				<hr/>
				{ products.length ? <div className="text-center fullWidth"><h4><small>Total Amount:</small><span className="fullWidth text-primary ml1">${total}</span></h4><hr/></div>: ''}
				{ !products.length ? <h3 className="text-warning">No item on the cart</h3>: ''}
				<div className="flex flexRow fullWidth">
					{ products.length ? <button className="btn checkout btn-success float-right" onClick={this.submitPayment}>Pay</button>: '' }
					<Link to="/"><button className="btn btn-danger float-right" style={{ marginRight: "10px" }}>Cancel</button></Link>
				</div>
				<br/><br/><br/>
			</div>
		);
	}
}
