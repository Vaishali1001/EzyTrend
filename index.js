require('dotenv').config();
const express                                   = require('express');
const app                                       = express();
const {PORT, HOST, BASE_URL}                    = process.env;
const connectDB                                 = require('./src/config/db');

app.get('/',function(req,res) {
    console.log('api data');
});

(async function startServer() {
    try {
    //   const db = await connectToDatabase();    // mongo connection execute
  
      app.listen(5000, () => {
        console.log(`Server started on port ${PORT} with url ${BASE_URL}`);
      });
    } catch (error) {
      console.error("Failed to start server:", error);
    }
})();


app.listen(3001, () => console.log('App Running on 3001'));