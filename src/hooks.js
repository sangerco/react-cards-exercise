import axios from "axios";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const useFlip = (initialState = true) => {
    const [state, setState] = useState(initialState);
    const flipCard = () => {
        setState(state => !state)
    }
    return [state, flipCard]
}

const useAxios = (key, url) => {
    const [response, setResponse] = useLocalStorage(key);
    const addResponseData = async (formatter = data => data, pokemonId = '') => {
        const res = await axios.get(`${url}${pokemonId}`);
        console.log(formatter);
        setResponse(data => [...data, formatter(res.data)]);
    };

    const clearResponse = () => setResponse([]);

    return [response, addResponseData, clearResponse];
}

const useLocalStorage = (key, initialValue = []) => {
    if(localStorage.getItem(key)) {
        initialValue = JSON.parse(localStorage.getItem(key));
    }

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}

export default useLocalStorage;

export { useFlip, useAxios, useLocalStorage };