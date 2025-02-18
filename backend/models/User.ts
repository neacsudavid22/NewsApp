import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose

const User = model("User", new Schema({
    email: { 
        type: String, 
        unique: true,
        minLenght: [10, "The email must have at least 10 characters"]
    },
    password: String,
    username: { 
        type: String, 
        unique: true,
        minLenght: [5, "The username must have at least 10 characters"]
     },
    name: String,
    account:{
        type: String,
        enum: ['standard','premium','author','admin'],
        default: 'standard'
    },
    friendList: {
        type: [SchemaTypes.ObjectId],   
        ref: 'User',
        default: []
    },
    friendRequests: {
        type: [SchemaTypes.ObjectId],   
        ref: 'User',
        default: []
    }
}, { timestamps: true }));

export default User;