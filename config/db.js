import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_DEV)
        console.log(`Connected to MongoDb Successfully`);

    }catch(error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};