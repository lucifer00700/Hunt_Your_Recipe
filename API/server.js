import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/user.js'
import recipeRouter from "./Routes/recipe.js"
import bodyParser from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.use(bodyParser.json())
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.use('/api',userRouter)  
app.use('/api',recipeRouter)



const port = process.env.PORT || 3000;
const db = process.env.MONGO_DB_URL;


mongoose.connect(db,{
    dbName: "MERN_recipe_maker",
}).then(() => console.log("Mongo DB is connected..!"))
.catch( (err) => console.log(err.message));


app.listen(port, () => console.log(`Server is running on PORT ${port}`))


// username: kshitijc659
// password: mnozF9CS3s53UhAK