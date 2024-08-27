const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// CRUD routes for comments
router.post('/posts/:postId/comments', commentController.addComment);
router.get('/posts/:postId/comments', commentController.getCommentsByPostId);
router.put('/comments/:commentId', commentController.updateComment);
router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;




// let express = require("express");
// let router = express.Router();
// let commentController = require("../controllers/commentController");

// router.get('/', (res) => {
//     commentController.getCharacter(res);
// })

// router.post('/create', (req, res) => {
//     commentController.createCharacter(req.body, res);
// })

// router.put('/:id', (req, res) => {
//     commentController.updateCharacter(req, res)
// })

// router.delete('/:id', (req, res) => {
//     commentController.deleteCharacter(req, res)
// })
// module.exports = router;
