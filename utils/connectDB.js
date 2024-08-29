import mongoose from "mongoose";
import dotenv from "dotenv";
import eventSchema from "../DB/Schemas/eventSchema.js";
import invitationSchema from "../DB/Schemas/invitationSchema.js";
import { peopleSchema } from "../DB/Schemas/peopleSchema.js";
dotenv.config();
const connectDB = async () => {
    let connectionString;
    if (process.env.NODE_ENV !== "dev") {
         connectionString = process.env.DB_CONNECTION;
         
     }else{
        console.log("dev");
         connectionString = process.env.DB_CONNECTION_DEV;
     }
    try {
        await mongoose.connect(connectionString);
        mongoose.model('event', eventSchema);
        mongoose.model('invitation', invitationSchema);
        mongoose.model('people', peopleSchema);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;

