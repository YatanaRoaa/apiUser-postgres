// routes/index.js
const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

// CRUD Usuarios
router.post('/users',     controllers.createUser);
router.get('/users',      controllers.getAllUsers);
router.put('/users/:id',  controllers.updateUser);
router.patch('/users/:id',controllers.updateUser);  // opcional
router.delete('/users/:id',controllers.deleteUser);

module.exports = router;