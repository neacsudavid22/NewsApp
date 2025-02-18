import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; 

const app = express();

// Conectează la MongoDB
connectDB();

app.use(cors());
app.use(express.json());

//rute

//start server
const port = process.env.PORT | 3600;
app.listen(port, ()=>{
    console.log(`server running on port :${port}`);
});
