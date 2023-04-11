import React from "react";

import { useGlobalContext } from "../Context";

const Modal = () => {
	const { closeModal, selectedMeal } = useGlobalContext();
	const {
		strMealThumb: image,
		strMeal: title,
		strInstructions: text,
		strSource: source,
	} = selectedMeal;

	return (
		<aside className="modal-overlay">
			<div className="modal-container">:c No modal content...</div>
		</aside>
	);
};

export default Modal;
