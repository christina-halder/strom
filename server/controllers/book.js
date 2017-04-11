const Book = require('../models').Book;

module.exports = {
    create(req, res) {
        return Book.create({
                title: req.body.title,
                author: req.body.author_name,
            }).
            then(book => res.status(201).send('book has been created successfully')).
        catch(error => res.status(400).send(error));
    },
};