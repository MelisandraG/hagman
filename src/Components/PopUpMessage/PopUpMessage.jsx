import React,{useContext, useState, useEffect} from "react";
import CurrentUserContext from "../../Contexts/UserContext";
import './popup-message.css';
const PopUpMessage = () => {

    //inport the context
    const {incorrectLetters, setIncorrectLetters, showMessage, setShowMessage, correctLetters, word} = useContext(CurrentUserContext);
    //create state show message

    //create state message
    const [message, setMessage] = useState('');

    //useEffect to show message
    useEffect(() => {
      setMessage('')
      let check = word?.every(element => correctLetters.indexOf(element) !== -1)
      setShowMessage(false)
      //if check is true show message 'you win' else if incorrectLetters.length > 5 show message 'you lose' else show message 'try again'
      if(check===true){
        setMessage('you win')
        setShowMessage(true)
      }
      else if(incorrectLetters.length > 5){
        setMessage('you lose')
        setShowMessage(true)
      } 
  
    },[incorrectLetters, correctLetters, word]);
 

    const refreshPage = ()=>{
      window.location.reload();
   }
   

 

  return (
    <div style={{display: showMessage? 'block' : 'none'}} className='popup-message'>
      <p>{message}</p>
      {/*button to restart the game* and create new word*/}
      <button onClick={refreshPage}>Refresh</button>

    </div>
  );
}

// export the component
export default PopUpMessage;
