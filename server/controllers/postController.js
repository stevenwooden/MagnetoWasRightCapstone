"use strict";
let Models = require("../models");

const getPost = (res) => {
    Models.Post.find({})
        .then(data => res.send({result:200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result:500, error: err.message})
        })
}

const createPost = (data, res) => {
    console.log(data)
    new Models.Post(data).save()
        .then(data => res.send({result:200, data: data}))
        .catch(err => {
            console.log(err);
        })
}

const updatePost = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Post.findByIdAndUpdate(req.params.id, req.body, {new: true })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
    }
const deletePost = (req, res) => {
    // deletes the user matching the ID from the param
    Models.Post.findByIdAndDelete(req.params.id)
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
    }


module.exports = {
    getPost, createPost, updatePost, deletePost
}