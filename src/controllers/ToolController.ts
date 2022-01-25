import { Request, Response } from "express";
import winston from "winston";
import { ToolService } from "../services/ToolService";

export class ToolController {
    async post(req: Request, res: Response) {
        const {title, link, description, tags} = req.body;
        const service = new ToolService();
        const logger = winston.createLogger();
        
        logger.info("Starting request for creating a new tool");

        const result = await service.create({title, link, description, tags});
        
        if(result instanceof Error) {
            logger.error("An error has ocurred")
            return res.status(400).json(result.message);
        }
        
        logger.info("Finishing request for creating a new tool");
        return res.status(201).json(result);
    }

    async getAll(req: Request, res: Response) {
        const service = new ToolService();
        const logger = winston.createLogger();
    
        logger.info("Starting request for getting all tools");

        const result = await service.getAll();
        return res.status(200).json(result);
    }

    async getByTag(req: Request, res: Response) {
        const service = new ToolService();
        const logger = winston.createLogger();

        const tag = req.query.tag;
    
        logger.info("Starting request for getting tools by tag");

        const result = await service.getByTag(tag);
        return res.status(200).json(result);
    }
}