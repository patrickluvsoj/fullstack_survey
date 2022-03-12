
const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            //requesting specific permissions from google
            scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    //testing if user information has been recognized
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}
