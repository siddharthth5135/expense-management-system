import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import "./config.js";

const app = express();
app.use(cookieParser());
app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // <--- THIS MUST BE TRUE for cookies to be sent/received cross-origin
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use("/api/user", userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
});
