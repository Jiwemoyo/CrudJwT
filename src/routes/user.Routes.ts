import { error } from 'console'
import express, { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/usersController'


const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'default'

//Midleware de JWT Para ver si estamos autenticados

const authenticateToken =(req:Request,res:Response,next:NextFunction)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(401).json({error:'No autorizado'})
    }

    jwt.verify(token,JWT_SECRET,(err,decoded)=>{
        if (err) {
            console.error(`Error en la autentificacion: ${err}`)
            return res.status(403).json({error:'No tienes acceso a este recuerso'})
        }
        next()
    })
}

router.post('/',authenticateToken,createUser)
router.get('/',authenticateToken,getAllUsers)
router.get('/:id',authenticateToken,getUserById)
router.put('/:id',authenticateToken,updateUser)
router.delete('/:id',authenticateToken,deleteUser)



export default router