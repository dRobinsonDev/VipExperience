import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { getCartItems } from '../../repository';
import './Cart.css';

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			
			total: 0
		}
	}

	removeFromCart = (product) => {
		let products = this.state.products.filter((item) => item.id !== product.id);
		let cart = JSON.parse(localStorage.getItem('cart'));
		delete cart[product.id.toString()];
		localStorage.setItem('cart', JSON.stringify(cart));
		let total = this.state.total - (product.qty * product.price) 
		this.setState({products, total});
	}
	
	clearCart = () => {
		localStorage.removeItem('cart');
		localStorage.removeItem('tickets');
		this.setState({products: []});
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
			<div className=" container cart">
				<h3 className="card-title">Cart</h3>
				<div className="linkContainer">
				<Link to="/Checkout"><button className="btn btn-success float-right clear-both">Checkout</button></Link>
				<Link to="/Products"><button className="btn btn-primary float-right" style={{  marginRight: "10px" }}>View Products</button></Link>
				</div>
				<hr/>
				{
					products.map((product, index) => <CartItem product={product} remove={this.removeFromCart} key={index}/>)
				}
				<hr/>
				<div className="flex flexCol">
					{ products.length ? <div><h4><small>Total Amount:</small><span className="float-right text-primary">${total}</span></h4><hr/></div>: ''}
					{ !products.length ? <h3 className="text-warning">No item on the cart</h3>: ''}
					<div className="flex flexRow">
						<Link to="/checkout"><button className="btn btn-success float-right">Checkout</button></Link>
						<button className="btn btn-danger float-right" onClick={this.clearCart} style={{ marginRight: "10px" }}>Clear Cart</button>
					</div>
				</div>
				<br/><br/><br/>
			</div>
		);
	}
}
