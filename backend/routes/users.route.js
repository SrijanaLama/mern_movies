const router = require('express').Router();
let User = require('../models/users.model');
const Bcrypt = require("bcryptjs");


router.route('/login').post( async (req,res)=>{
    const { email, password } = req.body;
    try {
        let user =  await User.findOne({ email:email }).exec();
        if(!user) {
            return res.status(400).send( "The username does not exist" );
        }
        if(!Bcrypt.compareSync(password, user.password)) {
            return res.status(400).send( "The password is invalid" );
        }
         res.send( "The username and password combination is correct!" );
    } catch (error) {
        res.status(500).send(error);
    }

   
});



router.route('/add').post((req,res) =>{
    req.body.password = Bcrypt.hashSync(req.body.password, 10);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser =  new User({
        name,
        email,
        password
    });
    

    newUser.save()
    .then(()=>res.json("Account Created Successfully ^_^"))
    .catch(err=>res.status(400).send('Error :' + err));
});

module.exports = router;