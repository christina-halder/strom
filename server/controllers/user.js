const User = require('../models').user;

module.exports = {
    create(req, res) {
        return User.create({
                    title: req.body.title,
                }).
                then(user => res.status(201).send('User has been created successfully')).
                catch(error => res.status(400).send(error));
    },
};