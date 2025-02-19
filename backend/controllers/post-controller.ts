import mongoose from 'mongoose';
import Post from '../models/Post';

async function getPosts(){
    try{
        const data = await Post.find()
        return data
    }
    catch (err : any) {
        console.error(`getPosts Error: ${err.message}`);
        process.exit(1);
    }
}

async function getPostById(id: string){
    try{
        const data = await Post.findById(id)
        return data
    }
    catch (err : any) {
        console.error(`getPostsById Error: ${err.message}`);
        process.exit(1);
    }
}

async function createPost(post: Object){
    try{
        const data = await Post.create(post)
        return { message: `Post ${data._id} succesfully created`, result: data }
    }
    catch (err : any) {
        console.error(`createPost Error: ${err.message}`);
        process.exit(1);
    }
}

async function deletePost(id: string){
    try{
        const data = await Post.deleteOne({_id: id})
        return { message: `Post succesfully deleted`, result: data }
    }
    catch (err : any) {
        console.error(`deletePost Error: ${err.message}`);
        process.exit(1);
    }
}

async function updatePost(id: string, post: Object){
    try{
        const data = await Post.updateOne({_id: id}, post)
        return { message: `Post succesfully updated`, result: data }
    }
    catch (err : any) {
        console.error(`updatePost Error: ${err.message}`);
        process.exit(1);
    }
}

export {
    getPosts,
    getPostById,
    createPost,
    deletePost,
    updatePost
}