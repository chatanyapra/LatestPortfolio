import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js"
import connectDB from "./dbConnection/dbConnection.js";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth/", authRoute);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    connectDB();
    console.log("App is running on port : "+ PORT);
})

