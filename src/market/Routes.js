import React, {Component} from "react";
import {Router, Switch, Route} from "react-router-dom";


import history from '../history';
import ScrollToTop from "./ScrollToTop";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <ScrollToTop>
                    <Switch>
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }
}
