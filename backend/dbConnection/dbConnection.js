import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connected:", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message); // Log only the message
        process.exit(1);
    }
};

export default connectDB;
