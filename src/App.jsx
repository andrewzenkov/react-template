import React, { memo } from "react";
import { Router, Switch } from "react-router-dom";

import { historyService } from "services/history.service";
import { renderRoutes } from "utils/helpers";
import { ROUTES } from "constants/routes.constants";

const history = historyService.get();

const App = () => {
	return (
		<Router history={history}>
			<Switch>
				{renderRoutes(ROUTES)}
			</Switch>
		</Router>
	);
};

export default memo(App);
