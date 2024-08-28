import EventRepository from "../repository/EventRepository.js";
import {validateEventRequest, validateEventRequestUpdate} from "../requests/eventRequest.js";
const eventController = {};

    eventController.getEvents=async(req, res)=>{
        const eventRepository=new EventRepository();
        res.json(await eventRepository.getEvent());
    }
    eventController.createEvent = async(req, res)=>{
        const eventRepository=new EventRepository();
        const data=validateEventRequest(req.body);
        res.status(201).json(await eventRepository.createEvent({data}));
    }
    eventController.getEventById = async(req, res)=>{
        const eventRepository=new EventRepository();
        const {id}=req.params;
        res.json(await eventRepository.getById({id}));
    }
    eventController.updateEvent =async(req, res)=>{
        const eventRepository=new EventRepository();
        const {id}=req.params;
        const data=validateEventRequestUpdate(req.body);
        res.json(await eventRepository.updateBy({selector:{_id:id}, data}));
    }
    eventController.deleteEvent = async(req, res)=>{
        const eventRepository=new EventRepository();
        const {id}=req.params;
        res.json(await eventRepository.deleteById({id}));
    }

export default eventController;