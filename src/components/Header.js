import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
    render() {
        return(
            <header className="top">
                <h1>D50000 Fish Market</h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        )
    }
}


// Prop Types for Stateless Functional Components
Header.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default Header;