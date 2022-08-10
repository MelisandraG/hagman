import React from 'react';
import axios from 'axios';
import { useRef, useState, useContext } from 'react';
import { BsEmojiNeutral } from "react-icons/bs";
import CurrentUserContext from '../../Contexts/UserContext';
import './hide-word.css';


function HideWord() {
  const { word, setWord, hideWord,correctLetters, setCorrectLetters} = useContext(CurrentUserContext)



  return(
    <div className="hideword">
          <div className="word">
      {word?.map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter.normalize('NFD').replace(/[\u0300-\u036f]/g, '')) ? letter : '_'}
          </span>
        )
      })}
    </div>

    </div>
  )

  }

export default HideWord
