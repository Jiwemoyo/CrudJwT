import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { json } from 'stream/consumers'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/user.Routes'

const app = express()

app.use(express.json())

//Routes
app.use('/auth',authRoutes)
app.use('/users',userRoutes)
//Autenticacion 

//Usuario

export default app