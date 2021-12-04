const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
//{   origin: 'http://localhost:3000',}
  //need to create a async function that will fetch the api
  const fetchApi = async () => {
    //we are going to try and get the api first
    try {
      //use axios.get to get the api and await for the response
      const response = await axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
      //console.log the response
      console.log(response.data);
      return response.data;
    } catch(error){
      //if we could not get the api, we are going to console.log the error
      console.log(error);
    }
  }
app.use(cors());
app.get('/', async (req, res, next) => {
    try{
        const r = await axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
        res.send(r.data);
    } catch( err ){
        next(err);
    }
})
app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 30001')
})