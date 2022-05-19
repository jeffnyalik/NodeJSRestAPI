const express = require('express');
const postsController = require('../../controllers/posts/post.controller');
const router = express.Router();


router.post('/', postsController.save);
router.get('/', postsController.index);
router.get('/:id', postsController.show);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);


module.exports = router;