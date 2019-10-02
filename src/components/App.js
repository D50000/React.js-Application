import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sammpleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
    // 'State' is a object that contain all the component's data. 
    state = {
        fishes: {},
        order: {}
    };

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

    loadSampleFishers = () => {
        this.setState({
            fishes: sammpleFishes
        })
    }

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="D5000"></Header>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order/>
                <Inventory addFish={this.addFish} loadSampleFishers={this.loadSampleFishers}/>
            </div>
        )
    }
}

export default App;