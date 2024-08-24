let express = require("express");
let router = express.Router();
let postController = require("../controllers/postController");

router.get('/', (res) => {
    postController.getPost(res);
})

router.post('/create', (req, res) => {
    postController.createPost(req.body, res);
})

router.put('/:id', (req, res) => {
    postController.updatePost(req, res)
})

router.delete('/:id', (req, res) => {
    postController.deletePost(req, res)
})
module.exports = router;
