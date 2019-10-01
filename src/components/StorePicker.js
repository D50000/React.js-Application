import React, {Fragment} from 'react';
import { getFunName } from "../helpers";

// Declare a 'StorePicker Component' Class. 
class StorePicker extends React.Component{
    constructor(){
        // Need to super() first, if the current class is extends from other class.
        super();
        // Bind the "this" to the function.
        this.goToStore = this.goToStore.bind(this);
    }

    myInput = React.createRef();

    // "This" in the new declare method can't reference back to the original class components.
    goToStore(event){
        // 1. Stop the form from submitting.
        event.preventDefault();
        // 2. Get the text from that input.Ｂut don't "select" or "modify" any DOM in react framework.
        const storeName = this.myInput.current.value;
        // 3. Use the Router to change the page to /store/xxxxxxx. 
        this.props.history.push(`/store/${storeName}`);
    }

    render(){
        return (
            <Fragment>
                {/* Here is comment */}
                <p>Buy It Now !！！！！！！!</p>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store ~</h2>
                    <input
                        type="text"
                        ref={this.myInput}
                        required
                        placeholder="Store Name"
                        defaultValue={getFunName()}
                    />
                    <button type="submit">Visit Store -></button>
                </form>
            </Fragment>

        )
    }
}

export default StorePicker;