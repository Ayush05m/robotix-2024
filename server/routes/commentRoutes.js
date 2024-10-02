const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/', commentController.createComment); //creat comment
router.get('/post/:postId', commentController.getCommentForPost); //get Comment For Post
router.put('/:id/like', commentController.likeComment); //like Comment
router.put('/:id', commentController.editComment); //edit comment
router.delete('/:id', commentController.deleteComment); //delete comment

module.exports = router;
