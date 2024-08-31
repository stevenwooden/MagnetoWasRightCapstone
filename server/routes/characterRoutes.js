const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.post('/characters', characterController.createCharacter);
router.get('/characters', characterController.getCharacters);
router.get('/characters/:id', characterController.getCharacterById);
router.put('/characters/:id', characterController.updateCharacter);
router.delete('/characters/:id', characterController.deleteCharacter);
router.get('/fetch-and-insert', characterController.fetchAndInsertData);

module.exports = router;