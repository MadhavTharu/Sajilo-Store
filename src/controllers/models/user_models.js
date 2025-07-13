const {Schema , model} = require ('mongoose');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
 
const userSchema = new mongoose.Schema({
    id:{
        type: String, 
        unique: true,
    },
    fullName:{
        type: String,
        unique:true,
        required: true,
    },
    email:{
        type:String,
        unique:true,
        required: true,
    }, 
    password:{
        type:String,
        required: true,
    },
    phoneNumber:{
        type:String,
        unique:true,
        required: true,
    },
    address:{
        type:String,
        default:'',
    },
    city:{
        type:String,
        default:'',
    },
state:{
    type:String,
    default:'',
},
 profileProgress:{
    type:Number,
    default:0,// this field is account created 
 },
 updatedOn:{
    type:Date,
    default: Date.now,
 },
 createdOn:{
    type:Date,
    default: Date.now,
 },
 });

 userSchema.pre('save', function(next){
    this.id = uuid.v1();
    this.updatedOn= Datenow();
    this.createdOn = Date.now();
 });



