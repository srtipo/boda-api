import { Schema } from "mongoose";
const  invitationSchema = new Schema({
    family:{
        type:String,
        required:true
    },
    invitationMessage:{
        type:String,
        required:true
    },
    people:[{
        type:Schema.Types.ObjectId,
        ref:"people",
        required:true
    }]
    ,
    link:{
        type:String,
        required:true
    },
    event:[{
        type:Schema.Types.ObjectId,
        ref:"event",
        required:true
    }],
    uuid:{
        type:String,
        required:true
    }

})
invitationSchema.set('toJSON', {
    transform(doc, returnedObject) {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
export default invitationSchema;