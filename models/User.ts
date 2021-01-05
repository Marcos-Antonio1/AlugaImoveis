import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reservation } from "./Reservation";
import 'reflect-metadata'

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
     UserId?:number;
    @Column()
     name?:string
    @Column()
     last_name?:string
    @Column()
     password?:string
    @Column()
    born_date?:string
    @Column()
     cpf?:string
    @Column()
    phone1?:string
    @Column()
    phone2?:string
    @Column()
     hostess?:boolean
    @Column()
     guest?:boolean
    @OneToMany(() => Reservation, reservation => reservation.user)
    public reservation!: Reservation[];
    
}