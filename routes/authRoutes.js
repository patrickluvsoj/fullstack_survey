
const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            //requesting specific permissions from google
            scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', 
        // middleware that handles authentication but doesn't say where to go next
        passport.authenticate('google'),
        (req, res) => {
            //redirect to another route handler. Take them to survey dashboard
            res.redirect('/surveys')
        }
    );

    app.get('/api/logout', (req, res) => {
        //logout enabled by passport
        req.logout();
        //show user data which should be empty/undefined
        res.redirect('/')
    })

    //testing if user information has been recognized
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}
