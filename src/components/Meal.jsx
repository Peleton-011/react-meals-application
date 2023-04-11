import React from "react";

import { BsHandThumbsUp } from "react-icons/bs";

const Meal = ({ meal, selectMeal }) => {
	const { idMeal, strMeal: title, strMealThumb: image } = meal;
	return (
		<article key={idMeal} className="single-meal">
			<img src={image} alt={`${title} thumbnail`} className="img" onClick={() => selectMeal(idMeal)}/>
			<footer>
				<h5>{title}</h5>
				<button className="like-btn">
					<BsHandThumbsUp />
				</button>
			</footer>
		</article>
	);
};

export default Meal;
