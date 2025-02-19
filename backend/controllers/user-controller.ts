import mongoose from 'mongoose';
import User from '../models/User';

async function getUsers(){
    try{
        const data = await User.find()
        return data
    }
    catch (err : any) {
        console.error(`getUsers Error: ${err.message}`);
        process.exit(1);
    }
}

async function getUserById(id: string){
    try{
        const data = await User.findById(id)
        return data
    }
    catch (err : any) {
        console.error(`getUsersById Error: ${err.message}`);
        process.exit(1);
    }
}

async function createUser(user: Object){
    try{
        const data = await User.create(user)
        return { message: `User ${data._id} succesfully created`, result: data }
    }
    catch (err : any) {
        console.error(`createUser Error: ${err.message}`);
        process.exit(1);
    }
}

async function deleteUser(id: string){
    try{
        const data = await User.deleteOne({_id: id})
        return { message: `User succesfully deleted`, result: data }
    }
    catch (err : any) {
        console.error(`deleteUser Error: ${err.message}`);
        process.exit(1);
    }
}

async function updateUser(id: string, user: Object){
    try{
        const data = await User.updateOne({_id: id}, user)
        return { message: `User succesfully updated`, result: data }
    }
    catch (err : any) {
        console.error(`updateUser Error: ${err.message}`);
        process.exit(1);
    }
}

export {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}