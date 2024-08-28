import RequestError from "../errors/RequestError.js";
import {z} from "zod";
const errorMessage = 'INVALID_REQUEST';
const invitationRequestSchema = z.object({
  family: z.string().min(1).max(100),
  invitationMessage: z.string().min(1).max(1000),
  people: z.array(z.string().min(1).max(100)),
  event: z.array(z.string().min(1).max(100)),
});

export const validateInvitationRequest = (object) => {
  const {data, error} = invitationRequestSchema.safeParse(object);
  if (error) {
    throw new RequestError(error.message, errorMessage);
  }
  return {data};
};

export const validateInvitationRequestUpdate = (object) => {
  const {data, error} = invitationRequestSchema.partial().safeParse(object);
  if (error) {
    throw new RequestError(error.message, errorMessage);
  }
  return {data};
};
