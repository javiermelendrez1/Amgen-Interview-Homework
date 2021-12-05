import { useEffect, useState } from 'react';
import './App.css';
//import my components
import FlashCard from './components/FlashCard/FlashCard';
import RevealButton from './components/RevealButton/RevealButton';
import NextButton from './components/NextButton/NextButton';
//import axios
import axios from 'axios';
//import my helper function
function App() {
  //going to create a state to reveal the autho
  const [revealOn, setRevealOn] = useState(false); //by default the reveal will be off
  //going to create a state for the object that will hold quote and author
  const [quoteObject, setQuoteObject] = useState({
    quoteText: '',
    quoteAuthor: '',
  }); //will be initally a empty object
  const fetchExpress = async () => {
    try {
      const response = await axios.get('http://localhost:3001/');
      console.log(response.data);
      setQuoteObject({
        quoteText: response.data.quoteText,
        quoteAuthor: response.data.quoteAuthor,
      });
    }catch(err){
      console.log(err);
    }
  }
  //need to use useEffect to make the api fetch initially when the application loads
  useEffect(() => {
    //call the function to fetch the api
     fetchExpress();

  },[]); //no dependencies
  return (
    <div className="App">
        Amgen Associate Software Engineer Interview Homework
        <FlashCard quoteObject={quoteObject} revealOn={revealOn}/>
        <RevealButton setRevealOn={setRevealOn}/>
        <NextButton setRevealOn={setRevealOn} setQuoteObject={setQuoteObject}/>
    </div>
  );
}

export default App;
