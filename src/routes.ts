import {Router} from "express";
import { ToolController } from "./controllers/ToolController";

const routes = Router();
routes.post("/v1/tools", new ToolController().post);
routes.get("/v1/tools", new ToolController().getAll);

export {routes};