import InvitationRepository from "../repository/InvitationRepository.js";
import { validateInvitationRequest, validateInvitationRequestUpdate } from "../requests/invitationRequest.js";
import PeopleRepository from "../repository/PeopleRepository.js";
import crypto from "crypto";
import dotenv from 'dotenv';
const invitationController = {};
invitationController.getInvitation = async (req, res) => {
  const response = await new InvitationRepository().getInvitation();
  res.json(response);
};
invitationController.getInvitationById = async (req, res) => {
  const { id } = req.params;
  const repository = new InvitationRepository();
  const response = await repository.getById({id});
  res.json(response);
};
invitationController.createInvitation = async (req, res) => {
  const { data } = validateInvitationRequest(req.body);
  const repository = new InvitationRepository();
  const people= await invitationController.getPeople(data.people);
  const uuid = crypto.randomUUID();
  const link = invitationController.getLink();
  const response = await repository.createInvitation({...data, people, link,uuid});
  res.status(201).json(response);
};
invitationController.deleteInvitation = async (req, res) => {
  const { id } = req.params;
  const repository = new InvitationRepository();
  const response = await repository.deleteById({id});
  res.json(response);
};
invitationController.updateInvitation = async (req, res) => {
  const { id } = req.params;
  const { data, error } = validateInvitationRequestUpdate(req.body);
  const repository = new InvitationRepository();
  const response = await repository.updateBy({selector:{_id:id}, data});
  res.json(response);
};
invitationController.getPeople =  async(peopleName) => {
    const peopleRepository = new PeopleRepository();
    let people = [];
    return  new Promise((resolve, reject) => {
        peopleName.forEach( async(personName, index, array) => { 
            console.log(personName);   
            const person = await peopleRepository.createPeople({name:personName, status:"PENDING"});
            await people.push(person._id) 
            if (people.length === array.length ) resolve(people);
        });
    });
}
invitationController.getLink=()=>{
    dotenv.config();
    const url =process.env.WEB_URL;
    const id= crypto.randomUUID();
    const link = `${url}/invitations/${id}`;
    return link;

}
export default invitationController;