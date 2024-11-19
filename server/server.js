import express from "express";
import 'dotenv/config';
import { authRoute } from "./Routes/auth-route.js";import connectDB from "./Utils/db.js";
;

const app = express();

app.use(express.json());


connectDB().then(() => {
    app.use("/api/v1", authRoute);
})

app.listen(process.env.SERVER_PORT, () => {
    console.log("Listening to port " + process.env.SERVER_PORT + "....");
})