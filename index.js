import express from "express"
import dotenv from 'dotenv'
import compression from "compression";
import RazaRouter from "./Routers/RazaRoute.js";
import mongoose from "mongoose";


dotenv.config()
const app = express();
const port = process.env.PORT;
const databaseUrl = process.env.DATABASEURL

 
mongoose.connect(databaseUrl).then((result) =>
    console.log('Connected To Database Successfully')
).catch((err) => {
    console.log('Error Occured Connect Databse Time')
})

app.use(compression())
app.use(express.json());
app.use('/Raza', RazaRouter)


app.listen(port, () => {
    console.log(`server started at port ${port}`)
}
)