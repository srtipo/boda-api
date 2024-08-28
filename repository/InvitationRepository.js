import mongoose from "mongoose";
import invitationSchema from "../DB/Schemas/invitationSchema.js";
import DBError from "../errors/DBError.js";
export default class FamilyRepository {
    constructor() {
        this.invitation=mongoose.model('invitation', invitationSchema);
    }
    getInvitation=async()=>{
        return await this.invitation.find({}).populate('people').populate('event').then(response=>{
            return response;
        }).catch(error=>{
            console.log(error);
            throw new DBError(`can't get invitation`, 'INVALID_DATA');
        });
    }
    createInvitation(data){
        const newInvitation=new this.invitation(data);
        return newInvitation.save().then(response=>{
            return response;
        }).catch(error=>{
            console.log(error);
            throw new DBError(`can't create invitation: ${data.name}`, 'INVALID_DATA');
        });
    }
    getBy({selector}){
        return this.invitation.find(selector).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't get invitation by ${selector}`, 'INVALID_DATA');
        });
    }
    getById({id}){
        return this.invitation.findById(id).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't get invitation by id ${id}`, 'INVALID_DATA');
        });
    }

    updateBy({selector, data}){
        return this.invitation.findOneAndUpdate({...selector}, {$set:data}, {new:true}).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't update invitation by ${selector}`, 'INVALID_DATA');
        });
    }
    deleteById({id}){
        return this.invitation.findByIdAndDelete(id).then(response=>{
            return response;
        }).catch(error=>{
            throw new DBError(`can't delete invitation by id ${id}`, 'INVALID_DATA');
        });
    }
}