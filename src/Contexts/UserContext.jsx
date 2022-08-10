import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";


const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
   
    const [word, setWord] = useState([]);
    const [hideWord, setHideWord] = useState();
    const [correctLetters, setCorrectLetters] = useState([]);
    const [incorrectLetters, setIncorrectLetters] = useState([]);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
            axios.get('https://api.dicionario-aberto.net/random')
            .then((response) =>setWord(response.data.word.split('')));
    },[]);

    useEffect(() =>  {
        let lengthOfWord = word?.length;
        setHideWord(new Array(lengthOfWord).fill('_'));
},[word]);


    console.log('word ',word)


    return (
        <CurrentUserContext.Provider
            value={{
               word, 
               setWord,
               hideWord, 
               setHideWord,
               correctLetters, 
               setCorrectLetters,
               incorrectLetters, 
               setIncorrectLetters,
               showMessage, 
               setShowMessage
            }}
        >
            {children}
        </CurrentUserContext.Provider>
    );

};

export default CurrentUserContext;