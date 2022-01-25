import { Entity, Column, PrimaryColumn } from "typeorm";

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
}