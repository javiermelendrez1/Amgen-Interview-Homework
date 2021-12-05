import React from 'react';
//import material ui components
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
//import axios
import axios from 'axios';
//this component will be for the user to render a new flashcard/ quote 

const NextButton = ({ setRevealOn, setQuoteObject }) => {

    //going to make the request to the express again
    const fetchExpress = async () => {
        try {
            const response = await axios.get('http://localhost:3001/');
            setQuoteObject({
                quoteText: response.data.quoteText,
                quoteAuthor: response.data.quoteAuthor,
            });
        } catch (err) {
            console.log(err);
        }
    }
    //create a function to handle the user clicking the button
    const handleClick = () => {
        //when the user clicks the button there needs to be another request to the server
        //call the async fetchExpress function to render the new quote 
        fetchExpress();
        //when the user clicks the button the reveal button needs to be set back to false
        setRevealOn(false);
    }
    return (
        <div>
            <Button variant="contained" endIcon={<NavigateNextIcon />}
                onClick={handleClick}
            >Next</Button>
        </div>

    );
}
export default NextButton;
