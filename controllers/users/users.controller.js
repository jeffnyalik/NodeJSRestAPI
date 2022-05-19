const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../../models');

// Register user
const register = (req, res) =>{

    if(!req.body.password){
        res.status(400).send({message: 'password is required'});
    }
    if(req.body.password.length < 6){
        res.status(400).send({message: 'password must be atleast six characters'});

    }
   
    if(!req.body.email){
        res.status(400).send({message: 'email is required'});
    }
    if(!req.body.name){
        res.status(400).send({message: 'username is required'});
    }
    const users = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 6)
    }

    models.User.create(users).then((user) =>{
        res.status(201).json({
            message: 'user created successfully',
            user:user
        });
        console.log(user)
    }).catch((error) =>{
        res.status(500).send({mesage: 'Internal server', error: error});
    });

}

// Sign In
const signin = (req, res) =>{
    if(!req.body.password){
        res.status(400).send({message: 'password is required'});
    }
   
    if(!req.body.email){
        res.status(400).send({message: 'email is required'});
    }

    models.User.findOne({
        where: {email: req.body.email}
    }).then(user =>{
        if(!user){
            res.status(400).send({message: 'User does not exist'});
            console.log('user does not exist')
        }

        let passwordValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordValid){
           return res.status(400).send({message: 'invalid password', accessToken: null})
        }

        let token = jwt.sign({id:user.id}, process.env.SECRET_KEY, {
            expiresIn: 86400 // 24hrs
        });

        res.status(200).json({
            message: 'Logged in',
            user: user.username,
            email:user.email,
            accessToken: token,
        });

        console.log(token)
        
    }).catch((error) =>{
        return res.status(500).json({error: error});
    })
}

module.exports = {
    register,
    signin,
}