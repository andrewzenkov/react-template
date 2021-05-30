import { HOME_PATH, ROOT_PATH, USERS_PATH, USER_PATH } from "constants/paths.constants";

import Root from "view/_root";
import Home from "view/home/_root";
import Users from "view/users/_root";
import User from "view/users/user/_root";

export const ROUTES = [
	{
		path: ROOT_PATH,
		exact: false,
		component: Root,
		childrenRoutes: [
			{
				path: USERS_PATH,
				exact: false,
				component: Users,
				childrenRoutes: [
					{
						path: USER_PATH,
						exact: false,
						component: User,
					}
				],
			},
			{
				path: HOME_PATH,
				exact: false,
				component: Home,
				childrenRoutes: [],
			},
		],
	},
];
