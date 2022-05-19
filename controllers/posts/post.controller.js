const logger = require('../../logger');
const models = require('../../models');

// Create post
const save = (req, res) => {
    let post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: req.body.user_id
    }
    

    models.Post.create(post).then((data) =>{
        res.status(201).json({
            message: "post created successfully",
            post: data
        });
        
        logger.info(post);

    }).catch((error) =>{
        res.status(500).send(error)
        console.log(error);
    })
};

//Get a single post
const show = (req, res) =>{
    let id = req.params.id
    models.Post.findByPk(id, {
        where: {id:id}
    }).then(num =>{
        if(num == 1){
            let success_log = "Single post was a success";
            logger.info(success_log);
            res.status(201).send({message: "updated successfully"})
        }else{
            let error_log = "Post ID does not exist";
            logger.error(error_log);
            res.status(400).send({message: "Post ID does not exist"})

        }
    }).then(error =>{
        logger.error(error);
        console.log(error);
    })
 
}

// Get all posts
const index = (req, res) =>{
    models.Post.findAll().then((data) =>{
        res.status(200).json({post: data});
        logger.info(data);
    }).catch((error) =>{
        console.log(error);
    });
}

// Update post
const updatePost = (req, res) =>{
    const id = req.params.id;

    models.Post.update(req.body, {
        where: {
            id:id,
        }
    }).then(num => {
        if(num ==1){
            res.status(201).send({message: "updated successfully"})
        }else{
            res.status(400).send({message: `Can not update post with id=${id}`})
        }
    }).catch(error => {
        res.status(500).send({message: "Internal server error"});
        console.log(error);
        logger.error(error)
    })
}

//Delete Post
const deletePost = (req, res) =>{
    const id = req.params.id;
    models.Post.destroy({
        where: {id:id}
    }).then(num =>{
        if(num == 1){
            res.status(201).send({message: "deletion was a success"})

        }else{
            res.status(400).send({message: `Can not remove post with id=${id}`})
        }
    }).catch(error =>{
        logger.error(error);
        console.log(error);
    })
}


module.exports = {
    save:save,
    show:show,
    index:index,
    updatePost:updatePost,
    deletePost:deletePost
}