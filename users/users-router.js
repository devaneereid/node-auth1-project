const router = require('express').Router();

const Users = require('./users-model.js');

// GET Users (all)
router.get('/', (req, res) => {
    console.log('session', req.session);

    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
});

// GET User by Id 
router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    Users.findById(id)
        .then(user => {
            if (user) {
                res.json(user);        
            } else {
                res.status(404).json({ message: 'Could not find user by that ID' });
            }
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
});

module.exports = router;