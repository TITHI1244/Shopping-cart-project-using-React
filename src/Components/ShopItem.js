import React from "react";
import CartView from "./CartView.js";
import defImg from "./1.jpg";

class ShopItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: this.props.id,
            itemTitle: this.props.title,
            itemPrice: this.props.price
        }
        this.clickedItem = this.clickedItem.bind(this);
        this.addDefaultImage = this.addDefaultImage.bind(this);
    }
    addDefaultImage(e) {
        e.target.src = {defImg}
    }
    clickedItem() {
        this.setState({
            itemTitle: this.props.title,
            itemPrice: this.props.price
        })
        this.props.showInCart();
        this.props.showCartView(this.state.itemId, this.state.itemTitle, this.state.itemPrice);
    }
    render() {
        return (
            <div>
                <div className="card-group m-3 shadow" style={{ width: "17rem" }}>
                    <div className="card">
                        <img
                            className="mx-auto"
                            src={this.props.image}
                            ref={img => this.img = img}
                            onError={() => this.img.src = defImg}
                            className="card-img-top"
                            height="190"                            
                            alt="cover"
                            
                        />
                        <div className="card-body p-2">
                            <div className="text-center">
                                <div className="btn-group">
                                  <button type="button" className="btn btn-lg">
                                    <i className="fa fa-heart"></i>
                                  </button>
                                </div>
                            </div>
                            <h5 className="card-title">
                                <small>{this.state.itemTitle}</small>
                            </h5>
                            <p className="card-text text-center">
                                <small className="text-muted">
                                    {this.props.rating.map(item => {
                                        return(
                                            <span className="fa fa-star checked"></span>
                                    )})}                                    
                                </small>
                            </p>
                        </div>

                        <div className="card-footer p-2 bg-white border-0 ">
                            <div className="text-right">
                                <span>
                                    <strong>kr. {this.state.itemPrice}</strong>
                                </span>
                            </div>
                        </div>
                        <div className="card-footer p-2">
                            <div className="text-right">
                                <button
                                    className="btn btn-primary btn-sm btn-block"
                                    id="addBtn"
                                    onClick={this.clickedItem}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default ShopItem;
