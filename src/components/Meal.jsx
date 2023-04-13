import React from "react";

import { BsHandThumbsUp } from "react-icons/bs";

const Meal = ({ meal, selectMeal, addFav}) => {
	const { idMeal, strMeal: title, strMealThumb: image } = meal;
	return (
		<article key={idMeal} className="single-meal">
			<img src={image} alt={`${title} thumbnail`} className="img" onClick={() => selectMeal(idMeal)}/>
			<footer>
				<h5>{title}</h5>
				<button className="like-btn" onClick={() => addFav(idMeal)}>
					<BsHandThumbsUp />
				</button>
			</footer>
		</article>
	);
};

export default Meal;
