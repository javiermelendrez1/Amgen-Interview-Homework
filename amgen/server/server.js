const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
//need to use cors to bypass the api
app.use(cors());
//make a async get request
app.get('/', async (req, res, next) => {
    //try to get the api
    try {
        //make get request await for the result
        const r = await axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
        //send the request back to the client
        res.send(r.data);
    } catch( err ){
        next(err);
    }
})

app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 30001')
})