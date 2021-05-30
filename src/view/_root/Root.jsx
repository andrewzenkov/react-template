import React, { memo } from "react";
import { Switch } from "react-router-dom";

import { renderRoutes } from "utils/helpers";

const Root = ({
	childrenRoutes,
}) => {
	console.log(process)

	return <Switch>{renderRoutes(childrenRoutes)}</Switch>;
};

export default memo(Root);
