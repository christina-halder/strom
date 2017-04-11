const User = require('../models').user;

module.exports = {
    create(req, res) {
        return User.create({
                    title: req.body.title,
                }).
                then(user => res.status(201).send(res)).
                catch(error => res.status(400).send(error));
    },
};