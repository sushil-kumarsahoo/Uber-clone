import dotenv from "dotenv"
dotenv.config()
import cors from ("cors");
import express from ('express');
const app = express();
import connectToDb from './db/db';

connectToDb();

app.use(cors());


app.get('/', (req,res) => {
    res.send('hello world');
});

module.exports = app;