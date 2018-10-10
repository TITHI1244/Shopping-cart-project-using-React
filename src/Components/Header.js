import React from "react";
import ShopView from "./ShopView.js";
import CartView from "./CartView.js";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            itemNo : 0, 
            clicked: false,
            itemOnly: []
        }
		this.getTotal = this.getTotal.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.getCartItems = this.getCartItems.bind(this);
		this.getTotalItemQuantity = this.getTotalItemQuantity.bind(this);
		this.homePage = this.homePage.bind(this);
	}
	getTotal() {
		this.setState({
            itemNo : this.state.itemNo + 1
        })
	}
	handleClick() {
		this.setState({
			clicked: true
		})
	}
	getCartItems( x, y, z ) {
		var newItemArray = this.state.itemOnly.slice(); 
		var itemObj = function( id, title, price ) {
			this.id = id;
			this.title = title;
			this.price = price
		}
		var addedItem = new itemObj( x, y, z );
		newItemArray.push(addedItem);
	    this.setState({
	    	itemOnly: newItemArray
	    })
	}
	getTotalItemQuantity(totValue) {
		this.setState({
			itemNo: totValue
		})
	}
	homePage() {
		this.setState({
			itemNo : 0, 
            clicked: false,
            itemOnly: []
		})
	}
	render() {
		console.log(this.state.itemNo);
		return (
			<div>
				<div className="navbar sticky-top navbar-expand-md navbar-dark
				 				bg-dark">
			        <a className="navbar-brand" href="#">MyStore</a>
			        <div id="navCart">			          
			            <a href="#" onClick={this.handleClick}>
			            	<i className="fa fa-shopping-cart cart"></i> 
			            </a>
			            &nbsp;
		            	<span className="btn btn-sm bg-light totalItemNo">
		            		{this.state.itemNo}
		            	</span>			          
			        </div>
			    </div>
			    {(this.state.clicked) ? 
					 (<CartView 
					 	item={this.state.itemOnly}
					 	totItem={this.state.itemNo}
					 	homePage={this.homePage}
					 	itemQuan={this.getTotalItemQuantity}
					 />) :
					 (<ShopView 
					 	getTotal={this.getTotal}
					 	getCartItems={this.getCartItems}			    	
					 />)
			    }
			    
    		</div>
			)
	}
}

export default Header;