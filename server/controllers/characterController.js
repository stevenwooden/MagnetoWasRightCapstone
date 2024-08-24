"use strict";
let Models = require("../models");

const getCharacter = (res) => {
    Models.Character.find({})
        .then(data => res.send({result:200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result:500, error: err.message})
        })
}

const createCharacter = (data, res) => {
    console.log(data)
    new Models.Character(data).save()
        .then(data => res.send({result:200, data: data}))
        .catch(err => {
            console.log(err);
        })
}

const updateCharacter = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Character.findByIdAndUpdate(req.params.id, req.body, {new: true })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
    }
const deleteCharacter = (req, res) => {
    // deletes the user matching the ID from the param
    Models.Character.findByIdAndDelete(req.params.id)
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
    }

module.exports = {
    getCharacter, createCharacter, updateCharacter, deleteCharacter
}

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