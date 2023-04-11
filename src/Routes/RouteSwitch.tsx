import React from "react";
import {Route, Switch} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

interface RouteSwitchProps {
	children?: React.ReactNode;
}

const RouteSwitch = (props: RouteSwitchProps) => (
	<Switch>
		{props.children}
		<Route>
			<ErrorPage/>
		</Route>
	</Switch>
)

export default RouteSwitch;