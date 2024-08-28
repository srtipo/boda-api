
import mongoose from 'mongoose';
import { peopleSchema } from '../DB/Schemas/peopleSchema.js';
import DBError from '../errors/DBError.js';
export default class PeopleRepository {
    constructor() {
        this.people=mongoose.model('people', peopleSchema);
    }

     getPeople=async()=>{
        return await this.people.find({});
    }
    createPeople(data){
        const newPerson=new this.people(data);
        return newPerson.save().then(response=>{
            return response;
        }).catch(error=>{
    throw new DBError(`can't create person: ${data.name} with status: ${data.status}`, 'INVALID_DATA');
        });
    }

    getBy({selector}){
        console.log(selector);
        return this.people.find({selector}).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't get person by ${selector}`, 'INVALID_DATA');
        });
    }
    getById({id}){
        return this.people.findById(id).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't get person by id ${id}`, 'INVALID_DATA');
        });
    }

    updateBy({selector, data}){
        return this.people.findOneAndUpdate({...selector}, {$set:data}, {new:true}).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't update person by ${selector}`, 'INVALID_DATA');
        });
    }
    deleteById({id}){
        return this.people.findByIdAndDelete(id).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't delete person by id ${id}`, 'INVALID_DATA');
        });
    }


}