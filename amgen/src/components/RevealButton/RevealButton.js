import React from 'react';
//import material ui components
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
//this components is for the user to click and reveal the author of the quote
const RevealButton = ({ setRevealOn }) => {
    //create a function to handle when the button is clicked
    const handleClick = () => {
        //when the user clicks the button we are just going to set reveal to on
        setRevealOn(true); //set to true
    }
    return (
        <div>
            <Button variant="contained" startIcon={<VisibilityIcon />}
                onClick={handleClick}
            >Reveal</Button>
        </div>
    );

}
export default RevealButton;