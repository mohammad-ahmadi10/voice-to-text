import { useEffect, useState } from "react"

function getValue  (key, initialState){
    const value = JSON.parse(localStorage.getItem(key));
    if(value === null || value[1] === "") return initialState;
    if(value) return value;
    if(initialState instanceof Function) return initialState();
    return initialState;
} 


const useLocalStorage = (key, initialState) =>{
    const [value , setValue] = useState(() => getValue(key, initialState));

 
    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value))
        if(initialState[1] === "") localStorage.removeItem(key);
    },[value, key, initialState]);


    return [value, setValue];
}

export default useLocalStorage;