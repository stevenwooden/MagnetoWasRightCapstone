const Character = require('../models/character');
const axios = require('axios');

// Create a new character
exports.createCharacter = async (req, res) => {
    try {
        const character = new Character(req.body);
        await character.save();
        res.status(201).json(character);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    // Get all characters
    exports.getCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.status(200).json(characters);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    // Get a single character by ID
    exports.getCharacterById = async (req, res) => {
    try {
        const character = await Character.findById(req.params.id);
        if (!character) return res.status(404).json({ error: 'Character not found' });
        res.status(200).json(character);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    // Update a character
    exports.updateCharacter = async (req, res) => {
    try {
        const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!character) return res.status(404).json({ error: 'Character not found' });
        res.status(200).json(character);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    // Delete a character
    exports.deleteCharacter = async (req, res) => {
    try {
        const character = await Character.findByIdAndDelete(req.params.id);
        if (!character) return res.status(404).json({ error: 'Character not found' });
        res.status(200).json({ message: 'Character deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    // Fetch data from external API and insert into MongoDB
    exports.fetchAndInsertData = async (req, res) => {
    try {
        const response = await axios.get('https://xmenapiheroku.herokuapp.com/api/characters');
        const data = response.data;

        // Process and save data to MongoDB
        for (const item of data) {
        const character = new Character({
            name: item.name,
            powers: item.powers,
            image: item.image
        });
        await character.save();
        }

        res.status(201).json({ message: 'Data fetched and inserted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };