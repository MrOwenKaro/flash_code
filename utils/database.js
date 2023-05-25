import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('MongoDB is now live');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"ease_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
    } catch (error) {
        console.log(error)
    }
}