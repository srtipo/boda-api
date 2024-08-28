import { Router } from "express";
import eventController from "../controllers/eventController.js";

const eventRouter = Router();
eventRouter.get("/", eventController.getEvents);
eventRouter.get("/:id", eventController.getEventById);
eventRouter.post("/", eventController.createEvent);
eventRouter.delete("/:id", eventController.deleteEvent);
eventRouter.put("/:id", eventController.updateEvent);
export default eventRouter;