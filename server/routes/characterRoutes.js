let express = require("express");
let router = express.Router();
let characterController = require("../controllers/characterController");

router.get('/', (req, res) => {
    characterController.getCharacters(req, res);
})

// router.post('/create', (req, res) => {
//     characterController.fetchAndSaveCharacters(req.body, res);
// })

router.get('/:id', (req, res) => {
    characterController.getCharacterById(req, res)
})

router.delete('/:id', (req, res) => {
    characterController.deleteCharacterById(req, res)
})
module.exports = router;

