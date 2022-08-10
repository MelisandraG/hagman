import React from 'react';
import axios from 'axios';
import { useRef, useState, useContext } from 'react';
import { BsEmojiNeutral } from "react-icons/bs";
import CurrentUserContext from '../../Contexts/UserContext';
import './user-input.css';



function UserInput() {
  const { word, setWord, setHideWord, hideWord, correctLetters, setCorrectLetters,incorrectLetters, setIncorrectLetters} = useContext(CurrentUserContext)
  const ref = useRef();
  const [message, setMessage] = useState('');


  let hindArray=[]
  let writeLetter

  function userCharacter(event){
    writeLetter=event.target.value.toLowerCase()
    if(correctLetters.includes(writeLetter)||incorrectLetters.includes(writeLetter)){
      setMessage("you already chose this letter")
      setTimeout(reset, 2000);
    }
    else{
      console.log('word without accents',word.map(letter => letter.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))
      if(word.map(letter => letter.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')).includes(writeLetter)){
        correctLetter(writeLetter)}
      else{
        incorrectLetter(writeLetter)}
      setTimeout(reset, 2000);

    }
  }


  function correctLetter(writeLetter){
    setCorrectLetters([...correctLetters, writeLetter])
  }

  function incorrectLetter(writeLetter){
    setIncorrectLetters([...incorrectLetters, writeLetter])
    console.log("no")
  }



  const reset = () => {
    ref.current.value = "";
    setMessage("")
  };

console.log(correctLetters)
  return(
      <div>
        <form>
          <label>
            write one character:  
            {word &&<input type="text" name="name"  maxLength="1" onChange={userCharacter} ref={ref} className='user-input'/>}
          </label>
        </form>
        <p>{message}</p>
      </div>
  )
    
  }

export default UserInput
