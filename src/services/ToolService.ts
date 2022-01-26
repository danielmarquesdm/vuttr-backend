import { Any, createQueryBuilder, getRepository, In } from "typeorm";
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

    async getAll(tag, title) : Promise<Tool[] | Error>{
        const repo = getRepository(Tool);
        // const result = await repo.find({where: {tags: } });
        const result = createQueryBuilder(Tool)
        .where(`${tag} = ANY (tags)`)
        .orWhere(`title = ${title}`)
        .getMany();
        
        return result;
    }
}