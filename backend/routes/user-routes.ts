import express from 'express';
import { getUsers, getUserById, createUser, deleteUser, updateUser } from '../controllers/user-controller'

const usersRouter = express.Router()

usersRouter.route('/user').get(async (req, res) => {
    res.status(200).json(await getUsers())
})

usersRouter.route('/user/:id').get(async (req, res) => {
    res.status(200).json(await getUserById(req.params.id))
})

usersRouter.route('/user').post(async (req, res) => {
    res.status(200).json(await createUser(req.body))
})

usersRouter.route('/user/:id').delete(async (req, res) => {
    res.status(200).json(await deleteUser(req.params.id))
})

usersRouter.route('/user/:id').put(async (req, res) => {
    res.status(200).json(await updateUser(req.params.id, req.body))
})

export default usersRouter;