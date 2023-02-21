import express from 'express'; 
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; 
import cors from 'cors'; 

const app = express(); 

app.use(express.json()); 

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })); 
app.use(cors()); 

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
    )
    .then(()=> {
        console.log("Database connected! 😃");
    })
    .catch((error) => {
        console.log(error.message);
        console.log("🤨")
    }); 
//Routers
