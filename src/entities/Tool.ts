import { Entity, Column, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("tools")
export class Tool {
    @PrimaryColumn()
    id: string;
    @Column()
    title: string;
    @Column()
    link: string;
    @Column()
    description: string;
    @Column("varchar", {array: true})
    tags: string[];

    constructor(id: string) {
        if(!this.id) {
            this.id = uuid()
        }
    }
}