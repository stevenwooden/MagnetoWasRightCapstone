
const axios = require('axios');
const md5 = require('md5');
const mongoose = require('mongoose');
const Character = require('../models/character');

const publicKey = process.env.MARVEL_PUBLIC_KEY;
const privateKey = process.env.MARVEL_PRIVATE_KEY;
const mongoURI = process.env.DB_URI;
const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

// Create or Update Character
const createOrUpdateCharacter = async (req, res) => {
    const { nameStartsWith = 'x-men', limit= 50 } = req.query;

    try {
        const response = await axios.get('https://gateway.marvel.com/v1/public/characters', {
            params: {
                apikey: publicKey,
                ts: ts,
                hash: hash,
                nameStartsWith: nameStartsWith || 'x-men',
                limit: limit || 10
            }
        });

        const characters = response.data.data.results;

        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        for (const char of characters) {
            const { id, name, description, thumbnail } = char;

            // Upsert operation: if character exists, update; otherwise, create
            await Character.findOneAndUpdate(
                { id },
                {
                    name,
                    description,
                    thumbnail: {
                        path: thumbnail.path,
                        extension: thumbnail.extension
                    }
                },
                { upsert: true, new: true }
            );
        }

        res.status(200).json({ message: 'Characters have been saved/updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching or saving characters', error });
    } finally {
        mongoose.disconnect();
    }
};

// Get Characters (Read)
const getCharacters = async (req, res) => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const characters = await Character.find();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving characters', error });
    } finally {
        mongoose.disconnect();
    }
};

// Get a Single Character by ID (Read)
const getCharacterById = async (req, res) => {
    const { id } = req.params;

    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const character = await Character.findOne({ id });

        if (!character) {
            return res.status(404).json({ message: 'Character not found' });
        }

        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving character', error });
    } finally {
        mongoose.disconnect();
    }
};

// Delete a Character by ID (Delete)
const deleteCharacterById = async (req, res) => {
    const { id } = req.params;

    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const result = await Character.deleteOne({ id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Character not found' });
        }

        res.status(200).json({ message: 'Character deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting character', error });
    } finally {
        mongoose.disconnect();
    }
};

module.exports = {
    createOrUpdateCharacter,
    getCharacters,
    getCharacterById,
    deleteCharacterById
};











// "use strict";
// const Models = require("../models");
// const md5 = require('md5');
// const mongoose




// const getCharacter = (res) => {
//     Models.Character.find({})
//         .then(data => res.send({result:200, data: data}))
//         .catch(err => {
//             console.log(err);
//             res.send({result:500, error: err.message})
//         })
// }

// const createCharacter = (data, res) => {
//     console.log(data)
//     new Models.Character(data).save()
//         .then(data => res.send({result:200, data: data}))
//         .catch(err => {
//             console.log(err);
//         })
// }

// const updateCharacter = (req, res) => {
//     // updates the user matching the ID from the param using JSON data POSTed in request body
//     console.log(req.body)
//     Models.Character.findByIdAndUpdate(req.params.id, req.body, {new: true })
//         .then(data => res.send({result: 200, data: data}))
//         .catch(err => {
//             console.log(err);
//             res.send({result: 500, error: err.message})
//         })
//     }
// const deleteCharacter = (req, res) => {
//     // deletes the user matching the ID from the param
//     Models.Character.findByIdAndDelete(req.params.id)
//         .then(data => res.send({result: 200, data: data}))
//         .catch(err => {
//             console.log(err);
//             res.send({result: 500, error: err.message})
//         })
//     }

// module.exports = {
//     getCharacter, createCharacter, updateCharacter, deleteCharacter
// }

// const Character = require('../models/Character');

// exports.createCharacter = async (req, res) => {
//   const character = new Character(req.body);
//   await character.save();
//   res.status(201).send(character);
// };

// exports.getCharacters = async (req, res) => {
//   const characters = await Character.find();
//   res.status(200).send(characters);
// };

// exports.updateCharacter = async (req, res) => {
//   const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.status(200).send(character);
// };

// exports.deleteCharacter = async (req, res) => {
//   await Character.findByIdAndDelete(req.params.id);
//   res.status(204).send();
// };