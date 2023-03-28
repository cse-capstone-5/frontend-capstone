import React from "react";
import RouteSwitch from "./RouteSwitch";
import {Route} from "react-router-dom";
import Main from "../pages/main";
import MainContext from "../context/MainContext";
import {useMain} from "../hooks/useMain";
import Test from "../pages/test";

const Routes = () => (
    <RouteSwitch>
        <MainContext.Provider value={useMain()}>
            <Route path={'/'} exact>
                <Main/>
            </Route>
            <Route path={'/test'} exact>
                <Test/>
            </Route>
        </MainContext.Provider>
    </RouteSwitch>
);

export default Routes;