let express = require("express");
let router = express.Router();
let characterController = require("../controllers/characterController");

router.get('/', (req, res) => {
    characterController.getCharacter(res);
})

router.post('/create', (req, res) => {
    characterController.createCharacter(req.body, res);
})

router.put('/:id', (req, res) => {
    characterController.updateCharacter(req, res)
})

router.delete('/:id', (req, res) => {
    characterController.deleteCharacter(req, res)
})
module.exports = router;

