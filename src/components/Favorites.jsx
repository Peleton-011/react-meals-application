import React from "react";

import { useGlobalContext } from "../Context";

const Favorites = () => {
    const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
	return <div>Favorites</div>;
};

export default Favorites;
