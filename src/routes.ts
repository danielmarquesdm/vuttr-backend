import {Router} from "express";
import { ToolController } from "./controllers/ToolController";

const routes = Router();
routes.post("/v1/tools", new ToolController().post);
routes.get("/v1/tools", new ToolController().getAll);
routes.get("/v1/tools/query", new ToolController().getByTag);

export {routes};