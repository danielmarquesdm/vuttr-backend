import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("tools")
export class Toll {
    @PrimaryColumn()
    id: string;
    @Column()
    title: string;
    @Column()
    link: string;
    @Column()
    description: string;
    @Column()
    tags: string[];
    @CreateDateColumn()
    createdAt: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}