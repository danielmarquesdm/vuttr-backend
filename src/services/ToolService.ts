import { ParsedQs } from "qs";
import { Any, createQueryBuilder, getRepository, In } from "typeorm";
import winston from "winston";
import { Tool } from "../entities/Tool";

type ToolRequest = {
    title: string;
    link: string;
    description: string;
    tags: string[];
}

export class ToolService {
    async create({title, link, description, tags}: ToolRequest): Promise<Tool | Error> {
        const repo = getRepository(Tool);

        if(await repo.findOne({title})) {
            return new Error("Tool already exists");
        }

        const tool = repo.create({title, link, description, tags});
        await repo.save(tool);
        return tool;
    }

    async getAll(queryParams: ParsedQs) : Promise<Tool[] | Error>{
        const repo = getRepository(Tool);
        
        const query =  repo.createQueryBuilder("tools");

        if(queryParams.tag != null) {
            query.orWhere(":tag = any(tools.tags)", {tag: queryParams.tag});
        } else if(queryParams.title != null) {
            query.orWhere("tools.title = :title", {title: queryParams.title});
        }
        
        const result = query.getMany();
        return result;
    }

    async delete(id: string){
        const repo = getRepository(Tool);
        
        if(!(await repo.findOne(id))) {
            return new Error("Tool doesn't exists");
        }

        await repo.delete(id);
    }
}