import mongoose from "mongoose";
import dotenv from "dotenv";
import eventSchema from "../DB/Schemas/eventSchema.js";
import invitationSchema from "../DB/Schemas/invitationSchema.js";
import { peopleSchema } from "../DB/Schemas/peopleSchema.js";
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        mongoose.model('event', eventSchema);
        mongoose.model('invitation', invitationSchema);
        mongoose.model('people', peopleSchema);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;

