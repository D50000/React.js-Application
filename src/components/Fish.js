import React from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

class Fish extends React.Component {
    // Prop Types regular react component
    static propTypes = {
        // shape() specify the object structure
        details: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func,
        index: PropTypes.string
    }

    render() {
        // Use ES6 'destructure'
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === "available";

        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">{name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={() => (this.props.addToOrder(this.props.index))}>
                    {isAvailable ? "Add To Order" : "Sold Out!!"}
                </button>
            </li>
        )
    }
}

export default Fish;