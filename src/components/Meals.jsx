import React from "react";

import {useContext} from "react"
import {useGlobalContext} from "../Context"

const Meals = () => {
    const context = useGlobalContext();
    console.log("context ", context)
    console.log("context meals: ", context.meals)
	return <div> {JSON.stringify(context.meals, null, 2)}<br /> Forg kinda vibes rn</div>;
};

export default Meals;
