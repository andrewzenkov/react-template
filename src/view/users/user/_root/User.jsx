import React, { memo } from "react";

import styles from "./User.module.scss";

const User = ({ match }) => {
    console.log({styles})

	return <div className="">User ID</div>;
};

export default memo(User);
