import 'dotenv/config'; 
import cors from 'cors';
import express from 'express';
const app = express();
import connectToDb from './db/db.js';
import useRoutes  from "./routes/user.routes.js";
import captainRoutes from './routes/captain.routes.js'
import cookieParser from 'cookie-parser';


connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.get('/', (req,res) => {
    res.send('hello world');
});

app.use('/users',useRoutes);
app.use('/captains',captainRoutes);


export default app;