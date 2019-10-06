import React from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available"; 
        // fish data need to load first
        if(!fish) return null;
        if(!isAvailable){
            return (
                <CSSTransition
                    classNames="order"
                    key={key}
                    timeout={{ enter:200, exit:200 }}
                >
                    <li key={key}>
                        Sorry!! {fish ? fish.name : "fish"} unavailable now ...
                    </li>
                </CSSTransition>
            )
        }
        return (
            <CSSTransition
                classNames="order"
                key={key}
                timeout={{ enter:200, exit:200 }}
            >
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition
                                classNames="count"
                                key={count}
                                timeout={{ enter:200, exit:200 }}
                            >
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        lbs {fish.name}
                        {formatPrice(count * fish.price)}
                        <button onClick={() => this.props.removeFromOrder(key)}> &times; </button>
                    </span>
                </li>
            </CSSTransition>
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
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;