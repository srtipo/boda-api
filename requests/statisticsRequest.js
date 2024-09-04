import {z} from 'zod';
import RequestError from '../errors/RequestError.js';
const errorMessage='INVALID_REQUEST';
const statisticsRequest =z.object( {
    total: z.number().min(1).max(100),
    status: z.enum(['ACCEPTED', 'PENDING', 'REJECTED']).default('PENDING').optional(),
});
export function validateStatisticsRequest(object) {
    const{data, error} = statisticsRequest.partial().safeParse(object);
    if (error) {
        throw new RequestError(error.message, errorMessage);
    }    
    return {data};
    
}