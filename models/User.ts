import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Phone} from './Phone';
import { Reservation } from "./Reservation";
import 'reflect-metadata'

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    private UserId!:number;
    @Column()
    private name!:string
    @Column()
    private last_name!:string
    @Column()
    private password!:string
    @Column()
    born_date?:string
    @Column()
    private cpf!:string
    @Column()
    private hostess!:boolean
    @Column()
    private guest!:boolean
    @OneToMany(() => Phone, phone => phone.user)
    phone?: Phone[]; 
    @OneToMany(() => Reservation, reservation => reservation.user)
    public reservation!: Reservation[];
    
}