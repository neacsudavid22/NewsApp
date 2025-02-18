import express from 'express';
import cors from 'cors';
import connectDB from './config/db'; 

const app = express();

// Conectează la MongoDB
connectDB();

app.use(cors());
app.use(express.json());

//rute

//start server
const port : number = Number(process.env.PORT) || 3000;
app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
});
