import React from "react";

import {useContext} from "react"
import {useGlobalContext} from "../Context"

const Meals = () => {
    const context = useGlobalContext();
	return <div>{context}</div>;
};

export default Meals;
