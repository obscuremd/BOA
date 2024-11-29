import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import UserRoute from './Routes/UserRoute'
import HistoryRoute from './Routes/HistoryRoute'

dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000

const mongoUrl = process?.env?.MONGO_URL
if (!mongoUrl) {
    throw new Error("MONGO_URL environment variable is not defined");
}

// connect to mongoose
mongoose.connect(mongoUrl)
mongoose.connection.on('connected',()=>{console.log('mongoDB connection established');})
mongoose.connection.on('error',()=>{console.log('connection error');})

// middleware
app.use(cors({
    origin: ['https://backend-zeta-livid-99.vercel.app/','http://localhost:5173/','https://boa-main.vercel.app/'], // Replace with your frontend's domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json())


// Routes
app.get('/', (req, res) => { res.send('Welcome hello worldss')})
app.use('/user', UserRoute)
app.use('/history', HistoryRoute)


app.listen(PORT, ()=> {
    console.log(`listening on port http://localhost:${PORT}`)
})