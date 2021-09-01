const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');// for hashing passwrod we have installed this npm i bycrpt 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date: {
        type:Date,
        default:Date.now
    },
    messages: [
        {
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            message: {
                type: String,
                required: true
            }

        }

    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            } //now we are refering token to _id with secret key stored in config.env
        }
    ]
});



//we are hashing password

userSchema.pre('save',async function(next) {  //middleware is use for next 
        console.log("hi from inside");
    
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12); //user khud apna password badle wo krna hain hume
        this.cpassword = await bcrypt.hash(this.cpassword, 12);  //await is used until password not changed to hash it will awit for a time
    }
    next();
});


//we are generating token
//video 15
userSchema.methods.generateAuthToken= async function () {  //method is wrong methods write this is are small mistakes
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);  //since _id is unique in mongo atlas datbase store so it refers to sigin parth of auth.js  and secret key passed on
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    }catch (err){
        console.log(err);
    }
}

//stored the messge i contact form
//userSchema.methods.

//30line se uttah kr yaha rkh diya password hash krne ke liye
const User = mongoose.model('USER', userSchema);

module.exports = User;