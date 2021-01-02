import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {User} from './User'
@Entity()
export class Phone extends BaseEntity{
    @PrimaryGeneratedColumn()
    idTel?:number
    @Column()
    telefone?:string
     @ManyToOne(() => User, user => user.phone)
    user?: User; 
}