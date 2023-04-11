import React from "react";

import {useContext} from "react"
import {AppContext} from "../Context"

const Meals = () => {
    const context = useContext(AppContext);
	return <div>{context}</div>;
};

export default Meals;
