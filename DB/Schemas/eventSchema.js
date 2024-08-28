import { Schema } from "mongoose";
const  eventSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    ubication:{
        type:String,
        required:true
    }
})
eventSchema.set('toJSON', {
    transform(doc, returnedObject) {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
export default eventSchema;
