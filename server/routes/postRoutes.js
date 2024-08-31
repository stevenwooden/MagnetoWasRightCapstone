const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// CRUD routes for posts
router.post('/posts/create', postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);


module.exports = router;




// let express = require("express");
// let router = express.Router();
// let postController = require("../controllers/postController");

// router.get('/', (res) => {
//     postController.getPost(res);
// })

// router.post('/create', (req, res) => {
//     postController.createPost(req.body, res);
// })

// router.put('/:id', (req, res) => {
//     postController.updatePost(req, res)
// })

// router.delete('/:id', (req, res) => {
//     postController.deletePost(req, res)
// })
// module.exports = router;
