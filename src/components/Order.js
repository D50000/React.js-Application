import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available"; // fish data need to load first
        if(!isAvailable){
            return (
                <li key={key}>
                    Sorry!! {fish ? fish.name : "fish"} unavailable now ...
                </li>
            )
        }
        return (
            <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
                <button onClick={() => this.props.removeFromOrder(key)}> &times; </button>
            </li>
        );
    } 

    render() {
        // Array of orderIds.
        const orderIds = Object.keys(this.props.order);
        // Array.reduce();
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === "available";
            if(isAvailable){
                return prevTotal + (count * fish.price);
            }
            return prevTotal;
        }, 0); // reduce() adding number must start with 0.

        return(
            <div className="order-wrap">
                <h2>Order !</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;