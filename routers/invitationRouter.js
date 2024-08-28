import { Router } from "express";
import invitationController from "../controllers/invitationControlle.js";
const invitationRouter = Router();
invitationRouter.get("/", invitationController.getInvitation);
invitationRouter.get("/:id", invitationController.getInvitationById);
invitationRouter.post("/", invitationController.createInvitation);
invitationRouter.delete("/:id", invitationController.deleteInvitation);
invitationRouter.put("/:id", invitationController.updateInvitation);
export default invitationRouter;