import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import connectDB from "./dbConnection/dbConnection.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth/", authRoute);

// Connect to the database before starting the server
const startServer = async () => {
    try {
        await connectDB(); // Connect to MongoDB
        const PORT = process.env.PORT || 5000; // Set a default port if not provided
        app.listen(PORT, () => {
            console.log(`App is running on port: ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to connect to the database:", err);
        process.exit(1); // Exit the process if the DB connection fails
    }
};

// Start the server
startServer();
