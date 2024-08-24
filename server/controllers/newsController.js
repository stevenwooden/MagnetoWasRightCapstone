"use strict";
let Models = require("../models");

const getNews = (res) => {
    Models.News.find({})
        .then(data => res.send({result:200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result:500, error: err.message})
        })
}

const createNews = (data, res) => {
    console.log(data)
    new Models.News(data).save()
        .then(data => res.send({result:200, data: data}))
        .catch(err => {
            console.log(err);
        })
}

const updateNews = (req, res) => {
    // updates the user matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.News.findByIdAndUpdate(req.params.id, req.body, {new: true })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
    }
const deleteNews = (req, res) => {
    // deletes the user matching the ID from the param
    Models.News.findByIdAndDelete(req.params.id)
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
    }


module.exports = {
    getNews, createNews, updateNews, deleteNews
}