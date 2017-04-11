const usersController = require('../controllers').users;
const booksController = require('../controllers').books;

module.exports = (app) => {
    app.get('/user/new', function(req, res) {
        res.render('users/new', { title: 'create new user' });
    });

    app.post('/user/create', function(req, res) {
        usersController.create(req, res)
    });

    //Books
    app.get('/book/new', function(req, res) {
        res.render('books/new', { title: 'create new book' });
    });

    app.post('/book/create', function(req, res) {
        booksController.create(req, res)
    });
};

