const UserModel = require('../models/user_models');
const bcrypt =require('bcrypt');
const UserController = {
    createAccount: async function(req, res) {
        try {
            const userData = req.body;
            const newUser = new UserModel(userData);
            await newUser.save();
            return res.json({
                success: true,
                data : newUser,
                message:" Account created successfully",
            })

        }
        catch(ex){
            return res.json({success:false,
                message:ex, 
            });
        }

    },
    signIn: async function(req , res){
        try{
            const {email,password}=req.body;

            const foundUser = await  UserModel.findOne({ email: email});
            if (!foundUser){
                return res.json({success: false, message: "User Not Found !"});
            }

            const passwordMatch= bcrypt.compareSync(password, foundUser.password);
            if(!passwordMatch){
                return res.json ({success:false, message:"Incorrect password !"});
            }
            return res.json({success: true, data: foundUser});
        }
        catch(ex){
            return res.json({ success: false, message : ex});
        }
    }

};

module.exports = UserController;