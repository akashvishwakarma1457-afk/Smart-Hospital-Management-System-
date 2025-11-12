import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect("mongodb+srv://akashvishwakarma:y0eAMPKoC8nJTpGc@cluster0.p37yva7.mongodb.net/college-project?retryWrites=true&w=majority&appName=Cluster0")

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.