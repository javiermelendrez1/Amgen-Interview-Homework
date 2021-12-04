import { useEffect, useState } from 'react';
import './App.css';
//import my components
import FlashCard from './components/FlashCard/FlashCard';
//import axios
import axios from 'axios';
function App() {
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
    // fetchApi();
    fetchExpress();

  },[]); //no dependencies
  return (
    <div className="App">
        Amgen Associate Software Engineer Interview Homework
        <FlashCard quoteObject={quoteObject}/>
    </div>
  );
}

export default App;
