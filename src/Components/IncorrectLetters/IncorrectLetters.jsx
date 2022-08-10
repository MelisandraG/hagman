import React,{useContext} from 'react';
import CurrentUserContext from '../../Contexts/UserContext';
import './incorrect-letters.css';
//create a new component
const IncorrectLetters = (props) => {

    const { incorrectLetters, setIncorrectLetters} = useContext(CurrentUserContext)
  return (
    <div className="incorrectLetters-letters">

      <p>Wrong letters</p>
      <div className="incorrectLetters-letters-list">
        {incorrectLetters.map((letter, index) => {
          return <span key={index} className='incorrect-letter'>{letter}</span>;
        })}
      </div>
    </div>
  );
}

//export the component
export default IncorrectLetters;