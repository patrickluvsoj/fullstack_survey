const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//import function from routes with and passing app w/ immediately invoked function
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
});