import React from 'react';
import {  getCartItems } from '../../repository';
import { Link } from 'react-router-dom';

export default class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			total: 0
		}
	}

	componentWillMount() {
		let cart = localStorage.getItem('cart');
		if (!cart) return; 
		getCartItems(cart).then((products) => {
			let total = 0;
			for (var i = 0; i < products.length; i++) {
				total += products[i].price * products[i].qty;
			}
	    	this.setState({ products, total });
	    });
	}

	render() {
		const { products, total } =  this.state;
		return (
			<div className="container cart">
				<h3 className="card-title">Checkout</h3>
				<hr/>
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
				{ products.length ? <div className="text-center full-width"><h4><small>Total Amount:</small><span className="float-right text-primary">${total}</span></h4><hr/></div>: ''}
				{ !products.length ? <h3 className="text-warning">No item on the cart</h3>: ''}
				<div className="flex flexRow">
					{ products.length ? <button className="btn btn-success float-right" onClick={() => alert('Proceed to Pay')}>Pay</button>: '' }
					<Link to="/"><button className="btn btn-danger float-right" style={{ marginRight: "10px" }}>Cancel</button></Link>
				</div>
				<br/><br/><br/>
			</div>
		);
	}
}
