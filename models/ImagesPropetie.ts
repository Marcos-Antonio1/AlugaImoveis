import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Propetie } from "./Propetie";
@Entity()
export class ImagesPropetie extends BaseEntity{
    @PrimaryGeneratedColumn()
    number?:number
    @Column()
    source?:string
    /* @PrimaryColumn() */
    @ManyToOne(() => Propetie, pro => pro.imagens)
    pro?: Propetie;
}