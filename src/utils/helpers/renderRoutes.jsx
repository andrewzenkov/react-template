import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

export const renderRoutes = (routes) =>
	routes.map(({ childrenRoutes, component: Component, exact, path }, i) => (
		<Route
			key={i}
			path={path}
			exact={exact}
			render={(props) => (
				<Component {...props} childrenRoutes={childrenRoutes} />
			)}
		/>
	));
