import mongoose from "mongoose";
import eventSchema from "../DB/Schemas/eventSchema.js";
import DBError from "../errors/DBError.js";
export default class EventRepository {
    constructor() {
        this.event=mongoose.model('event', eventSchema);
    }
    getEvent=async()=>{
        return await this.event.find({}).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't get event`, 'INVALID_DATA');
        });
    }
    createEvent({data}){
        const newEvent=new this.event(data);
        return newEvent.save().then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't create event: ${data.name}`, 'INVALID_DATA');
        });
    }
    getBy({selector}){
        return this.event.find(selector).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't get event by ${selector}`, 'INVALID_DATA');
        });
    }
    getById({id}){
        return this.event.findById(id).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't get event by id ${id}`, 'INVALID_DATA');
        });
    }

    updateBy({selector, data}){
        console.log(data);
        return this.event.findOneAndUpdate({...selector}, {$set:data}, {new:true}).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't update event by ${selector}`, 'INVALID_DATA');
        });
    }
    deleteById({id}){
        return this.event.findByIdAndDelete(id).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't delete event by id ${id}`, 'INVALID_DATA');
        });
    }

}