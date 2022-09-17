import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import UserRoute from './Routes/UserRoute.js'
import RecipeRoute from './Routes/RecipeRoute.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json())
const port = 4500;

app.use("/recipe", RecipeRoute)
app.use("/user", UserRoute)
app.use("/signup", UserRoute)
app.use("login", UserRoute)

app.listen(port, () => {
    console.log(`Recipe App is running at port ${port}`)
});