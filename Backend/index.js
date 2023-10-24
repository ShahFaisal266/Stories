const express = require('express');
const cors = require("cors");
const app = new express();
const axios = require("axios")
app.use(cors());

const ApiKey="DgLw8CgxTZ2nFHDngrJYMQtZPt71Y0iZ";


app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})


app.get('/api/nyt-news', async (req, res) => {
    try {
        //try to fetch with external api from new york
      const response = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${ApiKey}`, // Example API endpoint
      );
      
      const data = response.data;
      res.json(data); // Send the data as a JSON response
    } catch (error) {
      console.error('Error fetching data from The New York Times API:', error);
      res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
  });

app.listen(5000, () => {
    console.log(`Listening at http://localhost:5000`)
})

