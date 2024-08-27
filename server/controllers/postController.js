const Post = require('../models/post');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};

// Get all posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post', error });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedPost) {
            res.status(200).json(updatedPost);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (deletedPost) {
            res.status(200).json({ message: 'Post deleted successfully' });
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};



// "use strict";
// let Models = require("../models/post");

// const getPost = (res) => {
//     Models.Post.find({})
//         .then(data => res.send({result:200, data: data}))
//         .catch(err => {
//             console.log(err);
//             res.send({result:500, error: err.message})
//         })
// }

// const createPost = (data, res) => {
//     console.log(data)
//     new Models.Post(data).save()
//         .then(data => res.send({result:200, data: data}))
//         .catch(err => {
//             console.log(err);
//         })
// }

// const updatePost = (req, res) => {
//     // updates the user matching the ID from the param using JSON data POSTed in request body
//     console.log(req.body)
//     Models.Post.findByIdAndUpdate(req.params.id, req.body, {new: true })
//         .then(data => res.send({result: 200, data: data}))
//         .catch(err => {
//             console.log(err);
//             res.send({result: 500, error: err.message})
//         })
//     }
// const deletePost = (req, res) => {
//     // deletes the user matching the ID from the param
//     Models.Post.findByIdAndDelete(req.params.id)
//         .then(data => res.send({result: 200, data: data}))
//         .catch(err => {
//             console.log(err);
//             res.send({result: 500, error: err.message})
//         })
//     }


// module.exports = {
//     getPost, createPost, updatePost, deletePost
// }