const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");


require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send('Hello world from the server router.js');
});


//using promises
//router.post('/register', (req, res) => {
//
//    const { name, email, phone, work, password, cpassword } = req.body;
//
//    if (!name || !email || !phone || !work || !password || !cpassword) {
//        return res.status(422).json({ error: "Plz fill properly" })
//    }
//
//    User.findOne({ email: email })
//        .then((userExist) => {
//            if (userExist) {
//                return res.status(422).json({ error: "Email already exist" });
//            }
//
//            const user = new User({ name, email, phone, work, password, cpassword });
//
//            user.save().then(() => {
//                res.status(201).json({ message: "user registered successfully" });
//            }).catch((err) => res.status(500).json({ error: "Fail to register" }));
//
//        }).catch(err => { console.log(err); });
//
//    //console.log(req.body.name);
//    //console.log(req.body.email);
//    //res.json({ message: req.body });
//    // res.send("mera register page");
//});



//Async-await concept
router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill properly" })
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        } else if(password != cpassword){
            return res.status(422).json({ error: "password not mqtching" });

        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });

            //yaha pe password secure krenge by hashing

            const userRegister = await user.save();

          //yaha do line add hui hai
         //console.log('${user} user Registered successfully');
         //console.log(userRegister);

            if (userRegister) {
              res.status(201).json({ message: "user registered successfully" });

            } else {
              res.status(500).json({ error: "Fail to register" });
             }
         }

        

        
        //console.log(req.body.name);
        //console.log(req.body.email);
        //res.json({ message: req.body });
        // res.send("mera register page")
    } catch (err) {
        console.log(err);
    }

});

//login route

router.post('/signin',async (req,res) => {
    //console.log(req.body);
    //res.json({message:"awesome"});
    try{
        let token;
        const {email,password} = req.body;

        if(!email || !password)
        {
            return res.status(400).json({error:"Plz filled the dataa"})
        }

        const userLogin= await User.findOne({email:email});  //check if email svaed hai yaa nhi for login of specified user means u
        //console.log(userLogin);



        // video14 for registered user verification whether u or other people after signup 
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password); //one password which user done while sigup and other which is at mongo atlas where stored of user password then compare then mean he has been registered phele hi
            token= await userLogin.generateAuthToken();
            console.log(token);

            //now i video 16 store token in cookies
            res.cookie("jwtoken", token,{
                expires: new Date(Date.now()+25892000000),
                httpOnly:true //use for secure connection  //this big number is millisecong mean safter 30 days the cookie will expire like in railway station the train dtails expire after some time
            });
        
        if(!isMatch){
            res.status(400).json({error:"Invalid Credentials pass"});
        } else {
            res.json({ message: "user Sigin Successfully"});
        }

       // res.json({message:"user Signin Successful"});

        } else{
            res.status(400).json({error:"Invalid Credentials"});

        }
        
        
        


    } catch(err){
        console.log(err);

    }
});


//about us ka page

router.get('/about', authenticate ,  (req, res) => {
    console.log('Hello about world from the server');
    res.send(req.rootUser);
});


//get contact and home page
router.get('/getdata', authenticate ,  (req, res) => {
    console.log('Hello about world from the server');
    res.send(req.rootUser);
});


module.exports = router;