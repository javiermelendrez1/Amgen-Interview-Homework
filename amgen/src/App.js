import { useEffect, useState } from 'react';
import './App.css';
//import my components
import FlashCard from './components/FlashCard/FlashCard';
import RevealButton from './components/RevealButton/RevealButton';
import NextButton from './components/NextButton/NextButton';
//import axios
import axios from 'axios';
///import material ui component
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function App() {
  //going to create a state to reveal the author
  const [revealOn, setRevealOn] = useState(false); //by default the reveal will be off
  //going to create a state for the object that will hold quote and author
  const [quoteObject, setQuoteObject] = useState({
    quoteText: '',
    quoteAuthor: '',
  }); //will be initally a empty object
  //async function to make fetch request to express
  const fetchExpress = async () => {
    try {
      const response = await axios.get('http://localhost:3001/');
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
    <Container maxWidth="sm">
        <Typography sx={{ fontSize: 20}} >
          Associate Software Engineer -- Interview Homework
        </Typography>        
        <FlashCard quoteObject={quoteObject} revealOn={revealOn}/>
        <Stack direction="row" spacing={2} justifyContent="center">
          <RevealButton setRevealOn={setRevealOn}/>
          <NextButton setRevealOn={setRevealOn} setQuoteObject={setQuoteObject}/>
        </Stack>
    </Container>
  );
}

export default App;
