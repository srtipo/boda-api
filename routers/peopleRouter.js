import { Router } from "express";
import peopleController from "../controllers/peopleController.js";

const peopleRouter = Router();

peopleRouter.get("/", peopleController.getPeople);
peopleRouter.get("/:id", peopleController.getPeopleById);
peopleRouter.post("/", peopleController.createPeople);
peopleRouter.delete("/:id", peopleController.deletePeople);
peopleRouter.put("/:id", peopleController.updatePeople);

export default peopleRouter;