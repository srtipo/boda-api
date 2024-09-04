import { Router } from "express";
import statisticsController from "../controllers/statisticsController.js";

const statisticsRouter = Router();

statisticsRouter.get('/', statisticsController.getStatistics);

export default statisticsRouter;