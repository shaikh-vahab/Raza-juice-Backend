import express from "express"
import dotenv from 'dotenv'
import RazaRouter from "./Routers/RazaRoute.js";
import mongoose from "mongoose";


dotenv.config()
const app = express();
const port = process.env.PORT;
const databaseUrl = process.env.DATABASEURL


mongoose.connect(databaseUrl).then((result) =>
    console.log('Connected To Database Success')
).catch((err) => {
    console.log('Error Occured Connect Databse Time')
})

app.use(express.json())
// app.use('/  ', RazaRouter)


app.listen(port, () => {
    console.log(`server started at port ${port}`)
}
)