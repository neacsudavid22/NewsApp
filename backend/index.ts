import express from 'express';
import cors from 'cors';
import connectDB from './config/db'
import articlesRouter from './routes/article-routes';
import usersRouter from './routes/user-routes';
import postsRouter from './routes/post-routes';

const app = express();

// Conectează la MongoDB
const connectToDB = async () => await connectDB();
connectToDB()

app.use(cors());
app.use(express.json());

//start server
const port : number = Number(process.env.PORT) || 3000;
app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
});

//routes

app.use('/article-api', articlesRouter);
app.use('/user-api', usersRouter);
app.use('/post-api', postsRouter);