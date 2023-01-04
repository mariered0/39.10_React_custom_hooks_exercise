import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (url) => {
    const [state, setState] = useState([]);
    const addToArray = async () => {
        const response = await axios.get(url);
          setState(cards => [...cards, { ...response.data, id: uuid() }]);         
    };
    return [state, addToArray];
};

export default useAxios;

