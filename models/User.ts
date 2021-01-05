import { BaseEntity, BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reservation } from "./Reservation";
import 'reflect-metadata'
import { Propetie } from "./Propetie";
import  EncryptPassword   from '../EncryptPassword';

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
    @OneToMany(() => Propetie, pro => pro.user,{
        eager:true
    })
    pro?: Propetie[];
    @BeforeUpdate()
    @BeforeInsert()
    async cryptoPassword(){
        if(this.password){
            this.password=await EncryptPassword(this.password)
        }
    }
    
}