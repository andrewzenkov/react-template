import React, { memo } from "react";
import { Switch } from "react-router-dom";

import { renderRoutes } from "utils/helpers";

import "./Users.scss";

const Users = ({
	childrenRoutes,
}) => {
	return (
		<div className="">
			<Switch>{renderRoutes(childrenRoutes)}</Switch>
		</div>
	);
};

export default memo(Users);
