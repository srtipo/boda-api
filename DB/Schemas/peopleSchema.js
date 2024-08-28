import { Schema } from "mongoose";
export const peopleSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum: ['ACCEPTED', 'PENDING', 'REJECTED'],
        required:true
    }
})
peopleSchema.set('toJSON', {
    transform(doc, returnedObject) {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
