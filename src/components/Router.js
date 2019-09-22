import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from "react";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

// Stateless Functional Components
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;