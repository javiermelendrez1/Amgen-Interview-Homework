import { useState } from 'react';
import './App.css';
//import my components
import FlashCard from './components/FlashCard/FlashCard';
function App() {
  //going to create a state for the object that will hold quote and author
  const [quoteObject, setQuoteObject] = useState({
    quoteText: '',
    quoteAuthor: '',
  }); //will be initally a empty object
  //need to create a async function that will fetch the api
  return (
    <div className="App">
        Amgen Associate Software Engineer Interview Homework
        <FlashCard />
    </div>
  );
}

export default App;
