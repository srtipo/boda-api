import {z} from 'zod';
import RequestError from '../errors/RequestError.js';
const errorMessage='INVALID_REQUEST';
const peopleRequest = z.object({
    name: z.string().min(2).max(100),
    status: z.enum(['ACCEPTED', 'PENDING', 'REJECTED']).default('PENDING').optional(),
});
const peopleGetRequest = z.object({
    name: z.string().min(2).max(100),
    status: z.enum(['ACCEPTED', 'PENDING', 'REJECTED']),
});

export function validatePeopleRequest(object) {
    const{data, error} = peopleRequest.safeParse(object);
    if (error) {
        throw new RequestError(error.message, errorMessage);
    }    
    return {data};
    
}

export function validatePartialPeopleRequest(object) {
    const{data, error} = peopleRequest.partial().safeParse(object);
    if (error) {
        throw new RequestError(error.message, errorMessage);
    }    
    return {data};
    
}

export function validatePartialPeopleGetRequest(object) {
    const{data, error} = peopleGetRequest.partial().safeParse(object);
    if (error) {
        throw new RequestError(error.message, errorMessage);
    }    
    return {data};
    
}
