import React from "react";

import { useGlobalContext } from "../Context";
import { useState } from "react";

const Search = () => {
	return (
        <header className="search-container">
            <form >
                <input type="text" className="form-input" />
                <button className="btn" type="submit">Search</button>
                <button className="btn btn-hipster" type="btn">I'm feeling lucky</button>
            </form>
        </header>
    );
};

export default Search;
