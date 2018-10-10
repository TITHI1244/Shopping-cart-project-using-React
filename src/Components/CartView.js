import React from "react";
import CartItem from "./CartItem";
import TotalView from "./TotalView";

var mergeList = cartItems => {
		var itemList = {};
	    cartItems.map(item => {
	        if (itemList[item.id]) {
	            itemList[item.id].quantity++;
	        } else {
	            itemList[item.id] = item;
	            itemList[item.id].quantity = 1;
	        }
	    });
	    return Object.values(itemList);
}

class CartView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemArray: [...this.props.item],
			changedList: mergeList([...this.props.item]),
			done: false
		}
		this.doneShopping = this.doneShopping.bind(this);
		this.getChangedItem = this.getChangedItem.bind(this);
		this.getTotalPrice = this.getTotalPrice.bind(this);
		this.dltItem = this.dltItem.bind(this);
		this.getTotalItemQuantity = this.getTotalItemQuantity.bind(this);
		this.getTotItem = this.getTotItem.bind(this);
		this.homePage = this.homePage.bind(this);
	}
	doneShopping() {
		this.setState({
			done: true
		})
	}
	getChangedItem(id, quan) {
		var list = this.state.changedList;
        for(var i = 0; i < list.length; i++) {
        	if(list[i].id === id) {
        		list[i].quantity = quan; 
        	}
        }
        this.setState({changedList: list}, function () {
		    this.getTotalItemQuantity();
		});
	}
	getTotalPrice(cartItems) {
        return cartItems.reduce((tot, item) => {
        	return tot + parseFloat(item.price) * item.quantity;
        }, 0);        
    }
    dltItem(id) {
    	let list = this.state.changedList;
    	const newArray = list.filter( item => {
    		return item.id !== id
    	});
    	this.setState({changedList: newArray}, function () {
		    this.getTotalItemQuantity();
		});
    }
    getTotalItemQuantity() {
    	let totalItemNo = 0;
    	totalItemNo = this.state.changedList.reduce((tot, item) => {
        	return tot + parseInt(item.quantity);
        }, 0);
    	this.props.itemQuan(totalItemNo);
    }
    getTotItem(list) {
    	return list.reduce((tot, item) => {
        	return tot + parseInt(item.quantity);
        }, 0);
    }
    homePage() {
		this.props.homePage();
	}	
	render() {
		return (
			<div>
			<div className="row justify-content-md-center">
				<div className="col-sm-10">
					<div className="border mt-3">
				        <h5 className="border-bottom border-dark text-center">
				        	Cart
				        </h5>
				        {this.state.changedList.map(singleItem => {
				        	return(
				        		<CartItem 
				        			itemId={singleItem.id}
				        			itemQuantity={singleItem.quantity}
					        		itemTitle={singleItem.title}
					        		itemPrice={singleItem.price}
					        		getChangedItem={this.getChangedItem}
					        		dltItem={this.dltItem}
				        		/>
				        	)		        	
				        })}
				        <button className="btn btn-info floatedLeft" 
				        		onClick={this.homePage}>Back to shopping
				        </button>
				        <button className="btn btn-success floatedRight" 
				        		onClick={this.doneShopping}>Done shopping
				        </button>
				    </div>
				</div>
			</div>
			{(this.state.done) ? (
				<div className="row justify-content-md-center">
					<div className="col-sm-6">
						<TotalView 
							totItem={this.getTotItem(this.state.changedList)}
							totPrice={this.getTotalPrice(
										this.state.changedList
									)}
						/>
					</div>
				</div>
				) : (
					 <div></div>
					)
				}				
			</div>
			)
	}
}

export default CartView;