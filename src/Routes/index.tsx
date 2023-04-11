import React from "react";
import RouteSwitch from "./RouteSwitch";
import {Route} from "react-router-dom";
import Main from "../pages/main";
import MainContext from "../context/MainContext";
import {useMain} from "../hooks/useMain";
import SearchPage from "../pages/seachPage";

const Routes = () => (
	<RouteSwitch>
		<Route path={'/'} exact>
			<Main/>
		</Route>
		<Route path={'/search/:keyword'} exact>
			<SearchPage/>
		</Route>
	</RouteSwitch>
);

export default Routes;