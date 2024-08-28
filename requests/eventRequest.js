
import RequestError from '../errors/RequestError.js';
import {z} from 'zod';
const errorMessage='INVALID_REQUEST';
const eventRequest=z.object({
    name:z.string(),
    date:z.string().max(300),
    place:z.string().max(300),
    ubication:z.string().max(500).url(),
});

export function validateEventRequest(object){
    const {data,error} = eventRequest.safeParse(object);
    if(error){
        throw new RequestError(error,errorMessage);
    }
    return data;
}

export function validateEventRequestUpdate(object){
    const {data,error} = eventRequest.partial().safeParse(object);
    if(error){
        throw new RequestError(error,errorMessage);
    }
    return data;
}