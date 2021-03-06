const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


//we don't import Mongoose models in the code because if you are 
//running tests then models can be imported multiple times and cause confusion
const mongoose = require('mongoose');
const User = mongoose.model('users');


passport.serializeUser((user, done) => {
    //user.id is a shortcut to access the MongoDV unique id for the user NOT the google ID
    //This ensures that serialize user is not specific to Google Oauth
    done(null, user.id);
});


passport.deserializeUser((id, done) => {
    //search through Mongo to find the specific user with the id
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})


passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        //redirect url
        callbackURL: '/auth/google/callback',
        proxy: true
        }, 
        async (accessToken, refreshToken, profile, done) => {

            //check if there's an existing user_id to prevent duplications
            const existingUser = await User.findOne({googleId: profile.id});
            if (existingUser) {
                return done(null, existingUser);
            }    

            //.save() will ensure the instance is saved in MongoDB
            const user = await new User({googleId: profile.id}).save() ;
            done(null, user);
        }
    )
);