import React from 'react';
//import material ui components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//this component will hold the quote to be displayed to the user
//deconstruct the prop
const FlashCard = ({quoteObject, revealOn}) => {
    return (
        <Card sx={{minWidth: 275, minHeight: 300}}>
            <CardContent>
                <Typography sx={{ fontSize: 14}} color="text.secondary">
                    Quote
                </Typography>
                <Typography variant="h1" sx={{ fontSize: 28}}>
                    "{quoteObject.quoteText}"
                </Typography>
                {
                    revealOn ? <Typography sx={{ fontSize: 14}} color="text.secondary">- {quoteObject.quoteAuthor}</Typography> : null 
                }    
            </CardContent>
        </Card>
    );
}

export default FlashCard;