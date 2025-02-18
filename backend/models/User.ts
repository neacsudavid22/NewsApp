import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose

const User = model("User", new Schema({
    email: { 
        type: String, 
        unique: true,
        minlength: [10, "The email must have at least 10 characters"]
    },
    password: { 
        type: String, 
        required: true,
        minlength: [8, "The password must be at least 8 characters long"],
    },
    username: { 
        type: String, 
        unique: true,
        minlength: [5, "The username must have at least 10 characters"]
     },
    name: String,
    account:{
        type: String,
        enum: ['standard','premium','author','admin'],
        default: 'standard',
        required: true
    },
    friendList: {
        type: [SchemaTypes.ObjectId],   
        ref: 'User',
        default: []
    },
    shareList: {
        type: [{
            userFrom: {
            type: SchemaTypes.ObjectId,   
            ref: 'User'},
            articleShared: {
                type: SchemaTypes.ObjectId,   
                ref: 'Article'},
        }],
        default: [{}]
    },
    friendRequests: {
        type: [SchemaTypes.ObjectId],   
        ref: 'User',
        default: []
    },
    savedPosts: {
        type: [SchemaTypes.ObjectId],
        ref: 'Post',
        default: []
    }
}, { timestamps: true }));

export default User;