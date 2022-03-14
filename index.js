const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
//this needs to be imported before passport otherwise model is not recognized
require('./models/User'); 
require('./services/passport');


//connect to MongoDB with mongoURI keys
mongoose.connect(keys.mongoURI);

const app = express();

//adding middleware to use during authentication
app.use(
    //declaring to use cookies 
    cookieSession({
        //30 days x 24 hrs x 60 min etc
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

//import function from routes with and passing app w/ immediately invoked function
require('./routes/authRoutes')(app);

//use dynamic port given by Heroku or use local host 3000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
});