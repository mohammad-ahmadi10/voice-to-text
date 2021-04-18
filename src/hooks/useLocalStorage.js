import { useState, useEffect } from "react";

const getSavedValue = (key, initialstate) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue;
    if(initialstate instanceof Function) return initialstate();
    return initialstate;
}

export default function useLocalStorage(key, initialstate) {
    const [value, setValue] = useState(() => getSavedValue(key, initialstate));


    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key, initialstate])

    return [value, setValue];
}