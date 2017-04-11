const usersController = require('../controllers').users;

module.exports = (app) => {
    app.get('/user/new', function(req, res) {
        res.render('users/new', { title: 'create new user' });
    });

    app.post('/users/create', function(req, res) {
        res.send(req)
        // usersController.create(req, res)
    });
};


