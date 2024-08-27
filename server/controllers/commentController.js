const Comment = require('../models/comment');

// Add a comment to a post
exports.addComment = async (req, res) => {
    try {
        const newComment = new Comment({
            postId: req.params.postId,
            user: req.body.user,
            text: req.body.text
        });
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment', error });
    }
};

// Get comments for a post
exports.getCommentsByPostId = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments', error });
    }
};

// Update a comment
exports.updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.commentId, req.body, { new: true });
        if (updatedComment) {
            res.status(200).json(updatedComment);
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating comment', error });
    }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);
        if (deletedComment) {
            res.status(200).json({ message: 'Comment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting comment', error });
    }
};



// "use strict";
// let Models = require("../models/comment");

// const getComment = (res) => {
//     Models.Comment.find({})
//         .then(data => res.send({result:200, data: data}))
//         .catch(err => {
//             console.log(err);
//             res.send({result:500, error: err.message})
//         })
// }

// const createComment = (data, res) => {
//     console.log(data)
//     new Models.Comment(data).save()
//         .then(data => res.send({result:200, data: data}))
//         .catch(err => {
//             console.log(err);
//         })
// }

// const updateComment = (req, res) => {
//     // updates the user matching the ID from the param using JSON data POSTed in request body
//     console.log(req.body)
//     Models.Comment.findByIdAndUpdate(req.params.id, req.body, {new: true })
//         .then(data => res.send({result: 200, data: data}))
//         .catch(err => {
//             console.log(err);
//             res.send({result: 500, error: err.message})
//         })
//     }
// const deleteComment = (req, res) => {
//     // deletes the user matching the ID from the param
//     Models.Comment.findByIdAndDelete(req.params.id)
//         .then(data => res.send({result: 200, data: data}))
//         .catch(err => {
//             console.log(err);
//             res.send({result: 500, error: err.message})
//         })
//     }


// module.exports = {
//     getComment, createComment, updateComment, deleteComment
// }