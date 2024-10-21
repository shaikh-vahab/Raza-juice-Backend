import express from "express";
import dotenv from 'dotenv';
import compression from "compression";
import cors from 'cors'; // Import the cors package
import RazaRouter from "./Routers/RazaRoute.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT;
const databaseUrl = process.env.DATABASEURL;

// Connect to MongoDB
mongoose.connect(databaseUrl)
    .then(() => console.log('Connected To Database Successfully'))
    .catch((err) => console.log('Error Occurred Connecting to Database:', err));

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

app.use(compression());
app.use(express.json());
app.use('/Raza', RazaRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
