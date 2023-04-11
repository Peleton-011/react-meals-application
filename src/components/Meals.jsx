import React from "react";

import { useContext } from "react";
import { useGlobalContext } from "../Context";

const Meals = () => {
	const context = useGlobalContext();
	return (
		<section>
			{context.meals.map((meal) => {
                console.log(JSON.stringify(meal, null, 2));
                return (
                    <h4>Wowie, such meal! Much flavore!</h4>
                )
            })}
			<div>Forg kinda vibes rn</div>
		</section>
	);
};

export default Meals;
