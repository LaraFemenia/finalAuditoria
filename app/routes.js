const express = require('express');
const router = express.Router();

const auth = require('./middlewares/auth');
const PostPolicy = require('./policies/PostPolicy');

const AuthController = require('./controllers/AuthController');
const PostController = require('./controllers/PostController');


//Ruta home
router.get('/', (req, res) => res.json({
     Final: "auditoria" 
}));

//Rutas signUp y sigIn
router.post('/api/signin', AuthController.signIn);
router.post('/api/signup', AuthController.signUp);

//Rutas Posts
router.get('/api/posts', auth, PostController.index);
router.get('/api/posts/:id', auth, PostController.find, PostPolicy.show, PostController.show);
router.patch('/api/posts/:id', auth, PostController.find, PostPolicy.update, PostController.update);
router.delete('/api/posts/:id', auth, PostController.find, PostPolicy.delete, PostController.delete);

module.exports = router;