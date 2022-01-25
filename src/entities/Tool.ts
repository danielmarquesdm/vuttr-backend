import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

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
    @Column()
    tags: string[];
    @CreateDateColumn()
    createdAt: Date;
}