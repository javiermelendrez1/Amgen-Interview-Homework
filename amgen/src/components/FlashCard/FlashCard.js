import React from 'react';
//import material ui components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const FlashCard = () => {
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{ fontSize: 14}} color="text.secondary">
                    Quote
                </Typography>
                <Typography variant="h1">
                    "Quote goes here."
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FlashCard;