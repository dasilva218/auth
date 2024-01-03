const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, getUserByEmail, addUser, deleteUser, updateUser } = require('../modeles/users.js')

//avoir tous les utlisateurs
router.get('/users', function (req, res) {
    getAllUsers().then(users => res.json(users))

});

router.get('/users/:slug', function (req, res) {
    let { slug } = req.params
    
    // res.json({ 'message': parseInt(slug) })
    getUser(parseInt(slug)).then(user => res.json(user))

})
router.get('/:email', function (req, res) {
    getUserByEmail(req.params.email).then(user => res.json(user))
})
router.post('/users', function (req, res) {
    addUser(req.body).then(user => res.json(user))
})

router.delete('/users/:id', function (req, res) {
    let { id } = req.params
    
    
    deleteUser(parseInt(id)).then(user => res.json(user))
    
})

router.put('/users/:id', function (req, res) {
    let { id } = req.params;
    const { name, email, password } = req.body;

     updateUser(parseInt(id), name, email, password)
    .then(user => res.json(user))
    .catch((err) => console.log("Erreur : ", err));
    
    
})

module.exports = router;

