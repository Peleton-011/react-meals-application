import React from "react";

const Meal = ({ meal }) => {
	const { idMeal, strMeal: title, strMealThumb: image } = meal;
	return (
		<article key={idMeal} className="single-meal">
			<img
				src={image}
				alt={`${title} thumbnail`}
				className="img"
			/>
			<footer>
				<h5>{title}</h5>
				<button className="like-btn">click me!</button>
			</footer>
		</article>
	);
};

export default Meal;
