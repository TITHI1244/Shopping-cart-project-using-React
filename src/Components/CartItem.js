import React from "react";

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: this.props.itemId,
            itemQuan: this.props.itemQuantity
        }
        this.getQuantity = this.getQuantity.bind(this);
        this.dltItem = this.dltItem.bind(this);
    }
    getQuantity(e) {
        this.setState({
            itemQuan: e.target.value
        })
        this.props.getChangedItem(this.props.itemId, parseInt(e.target.value));
    } 
    dltItem() {
        this.props.dltItem(this.props.itemId);
    }   
    render() {
        return (
            <div>
                <div className="row">
                        <div className="col-sm-6">
                            {this.props.itemTitle}
                        </div>
                        <div className="col-sm-3">
                            Qty: 
                            <span> 
                                <input type="number" 
                                        min="0"
                                        max="20"
                                        name="itemQuan" 
                                        defaultValue={this.props.itemQuantity}
                                        onChange={this.getQuantity}
                                />
                            </span>
                        </div>
                        <div className="col-sm-1">
                            {this.props.itemPrice * this.state.itemQuan}
                        </div>
                    
                        <div>
                            <button className="btn btn-sm btn-danger" 
                                    onClick={this.dltItem}>&times;</button>
                        </div>
                    </div>
                    <hr />
            </div>
            
            )
    }
}
export default CartItem;