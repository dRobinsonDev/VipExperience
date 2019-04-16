import React from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../../repository';

import { Link } from 'react-router-dom';
import './ProductList.css';
export default class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}

	componentWillMount() {
		getProducts().then((products) => {
			this.setState({ products });
	    });
	}

	render() {
		const { products } =  this.state;
		return (
			<div className=" container products">
				<h3 className=" fullWidth text-center card-title">List of Available Products</h3>
				<div className="linkContainer">
				<Link to="/checkout"><button className="btn btn-success float-right clear-both">Checkout</button></Link>
				<Link to="/cart"><button className="btn btn-primary float-right" style={{  marginRight: "10px" }}>View Cart</button></Link>
				</div>
				<br/><br/><br/>
				<hr/>
				{
					products &&  products.map((product, index) => <ProductItem product={product} key={index}/>)
				}
				<hr/>
			</div>
		);
	}
}
