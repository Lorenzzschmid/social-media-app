import express from 'express'; 
import bodyParser from 'body-parser';
import mongoose from 'mongoose'; 
import cors from 'cors'; 

const app = express(); 

app.use(express.json()); 

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true })); 
app.use(cors()); 

const PORT = process.env.PORT || 5000; 

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`, 
        { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message)); 

mongoose.set('useFindAndModify', false); 
