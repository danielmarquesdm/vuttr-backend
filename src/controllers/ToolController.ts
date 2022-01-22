import { Request, Response } from "express";
import { ToolService } from "../services/ToolService";
import { ToolRequest } from "./dto/ToolRequest";

export class ToolController {
    async handle(req: Request, res: Response) {
        // const {title, link, description, tags} = req.body;
        const toolRequest = req.body;
        const service = new ToolService();
        // const toolRequest = new ToolRequest(title, link, description, tags);
        // const result = await service.execute(toolRequest);
        const result = await service.execute(toolRequest);
        if(result instanceof Error) {
            return res.status(400).json(result.message);
        }
        return res.status(201).json(result);
    }
}