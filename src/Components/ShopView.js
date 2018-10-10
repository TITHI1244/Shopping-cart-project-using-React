import React from "react";
import ShopList from "./ShopList";
import ShopItem from "./ShopItem";
import CartView from "./CartView.js";

import shopitems from "../data/shop_items";

class ShopView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: "",
            itemTitle: "",
            itemPrice: "",
            shopitems: shopitems,
            showCategories: false
        }
        this.showInCart = this.showInCart.bind(this);
        this.showCartView = this.showCartView.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.showItems = this.showItems.bind(this);
    }
    showInCart() {
        this.props.getTotal();
    }
    showCartView( x, y, z ) {
        this.props.getCartItems( x, y, z );
    }
    toggleShow() {
        this.setState({
            showCategories: true
        })
    }
    showItems(e) {
        let newItems = shopitems.filter(item => {
            return item.category === e.target.text
        });
        (e.target.text === "Show all") ? (
               this.setState({
                    shopitems: shopitems,
                    showCategories: false
                }) 
            ) : (
               this.setState({
                    shopitems: newItems,
                    showCategories: false
                }) 
            )
    }
    render() {
        const menuClassName = `dropdown-menu${this.state.showCategories ? "show" : ""}`;
        return (
            <div className="row justify-content-md-center">
                <div className="col-sm-10">
                    <div className="border mt-3">
                        <h4 className="border-bottom text-left p-4">Products
                            <span className="dropdown dropright floatedRight">
                                <button type="button" 
                                        className="btn btn-info dropdown-toggle"
                                        id="dropdownMenuBtn"
                                        data-toggle="dropdown"
                                        onClick={this.toggleShow}>
                                   Filter products 
                                </button>
                                <div className={menuClassName} aria-labelledby="dropdownMenuBtn">
                                    <a className="dropdown-item btn btn-secondary" href="#" onClick={this.showItems}>Clothing</a>
                                    <a className="dropdown-item btn btn-secondary" href="#" onClick={this.showItems}>Shoes</a>
                                    <a className="dropdown-item btn btn-secondary" href="#" onClick={this.showItems}>Show all</a>
                                </div>                                    
                            </span>
                        </h4>
                        <ShopList>            
                            {this.state.shopitems.map(item => {
                                return (
                                    <ShopItem
                                        id={item.id}
                                        key={item.id}
                                        title={item.title}
                                        rating={item.rating}
                                        price={item.price}
                                        subject={item.subject}
                                        image={item.img}
                                        showInCart={this.showInCart}
                                        showCartView={this.showCartView}
                                    />
                                );
                            })}            
                        </ShopList>        
                    </div>
                </div>
            </div>            
        )
    }
}

export default ShopView;
