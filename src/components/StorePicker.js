import React, {Fragment} from 'react';
import { getFunName } from "../helpers";

// Declare a 'StorePicker Component' Class. 
class StorePicker extends React.Component{
    render(){
        return (
            <Fragment>
                {/* Here is comment */}
                <p>Buy It Now !！！！！！！!</p>
                <form className="store-selector">
                    <h2>Please Enter A Store ~</h2>
                    <input
                        type="text"
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