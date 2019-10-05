import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sammpleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
    // 'State' is a object that contain all the component's data. 
    state = {
        fishes: {},
        order: {}
    };

    /* This part is not work because the firebase data url are close.
    componentDidMount(){
        const { params } = this.props.match;
        // Not same "ref" with the data input ref.
        this.ref = base.syncState(`${params.storeId}/fishes`), {
            context: this,
            state: "fishes"
        };
    }

    componentWillUnmount(){
        // Unbinding the data base when unmount.
        base.removeBinding(this.ref);
    }
    */

   componentDidMount(){
    const { params } = this.props.match;
    // Reinstate the localStoreage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef){
        this.setState({ order: JSON.parse(localStorageRef)});
    }
}

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    addFish = fish => {
        // Modify "state" in react must use set state API. (Or will not work)
        // 1. Take a copy of the existing state.
        // Object copy in JS > use 'Object spread' (not deep clone)
        const fishes = {...this.state.fishes};
        // 2. Add new fish to that fishes variable.
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state. ex: "setState({ update data })"
        this.setState({
            fishes: fishes
        });
    };

    updateFish = (key, updatedFish) => {
        // 1. Take a copy of the current state
        const fishes = {...this.state.fishes};
        // 2. Update that State
        fishes[key] = updatedFish;
        // 3. Set that to state
        this.setState({ fishes });
    }

    loadSampleFishers = () => {
        this.setState({
            fishes: sammpleFishes
        })
    }

    addToOrder = (key) => {
        // 1. Take a copy of state.
        const order = {...this.state.order};
        // 2. Update the data in the "order"
        order[key] = order[key] + 1 || 1;
        // 3. Call setState API to update the state object.
        this.setState({
            order
        });
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="D5000"></Header>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map((key) => (
                            <Fish 
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    loadSampleFishers={this.loadSampleFishers}
                    fishes={this.state.fishes}
                />
            </div>
        )
    }
}

export default App;