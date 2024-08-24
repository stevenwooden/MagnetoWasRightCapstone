let express = require("express");
let router = express.Router();
let commentController = require("../controllers/commentController");

router.get('/', (res) => {
    commentController.getCharacter(res);
})

router.post('/create', (req, res) => {
    commentController.createCharacter(req.body, res);
})

router.put('/:id', (req, res) => {
    commentController.updateCharacter(req, res)
})

router.delete('/:id', (req, res) => {
    commentController.deleteCharacter(req, res)
})
module.exports = router;
