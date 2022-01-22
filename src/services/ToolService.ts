import { getRepository } from "typeorm";
import { ToolRequest } from "../controllers/dto/ToolRequest";
import { Tool } from "../entities/Tool";

export class ToolService {
    async execute(toolRequest: ToolRequest): Promise<Tool | Error> {
        const repo = getRepository(Tool);

        if(await repo.findOne(toolRequest.title)) {
            return new Error("Tool already exists");
        }

        const tool = repo.create(toolRequest);
        await repo.save(tool);
        return tool;
    }
}