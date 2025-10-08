import express from 'express'
import dotenv from 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'
import { clerkMiddleware } from '@clerk/express'
import { clerkWebhooks } from './controllers/clerkWebhooks.js'



connectDB()

const app = express()
app.use(cors())   //Enable cross origin resource sharing

//Middlewares
app.use(express.json())
app.use(clerkMiddleware()) //Clerk middleware

//API to listen clerk Webhooks
app.post('/api/clerk', clerkWebhooks)


app.use(express.json())
app.use(clerkMiddleware({ secretKey: process.env.CLERK_SECRET_KEY }))

app.get('/', (req, res) => res.send('API is running...'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))