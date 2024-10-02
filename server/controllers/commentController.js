const Comment = require('../models/Comment');

exports.createComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCommentForPost = async (req, res) => {
    try {
        const comments = await Comment.find({ 
            post: req.params.postId
        });
        res.json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.likeComment = async (req, res) => {
    try {
        console.log(req.params.id);
        
        const comment = await Comment.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true }); //{ new: true } ==> returns updated version
        res.json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.editComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};