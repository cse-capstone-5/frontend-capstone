import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

interface RouteSwitchProps {
    children?: React.ReactNode;
}

const RouteSwitch = (props: RouteSwitchProps) => (
    <BrowserRouter>
        <Switch>
            {props.children}
            <Route>
                <ErrorPage/>
            </Route>
        </Switch>
    </BrowserRouter>
)

export default RouteSwitch;