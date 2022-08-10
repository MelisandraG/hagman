import './App.css';
import { CurrentUserContextProvider } from './Contexts/UserContext';
import UserInput from './Components/UserInput/UserInput';
import HideWord from './Components/HideWord/HideWord';
import IncorrectLetters from './Components/IncorrectLetters/IncorrectLetters';
import Figure from './Components/Figure/Figure';
import PopUpMessage from './Components/PopUpMessage/PopUpMessage';

function App() {


  

  return (

    <div>
      <CurrentUserContextProvider>
        <div className="App">
          <div>
            <UserInput/>
            <HideWord/>
            <IncorrectLetters/>
          </div>
          <div>
            <Figure/>
          </div>
          <div>
            <PopUpMessage/>
          </div>
        </div>
      </CurrentUserContextProvider>

    </div>
  );
}

export default App;
