import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Propetie } from "./Propetie"
import { User } from "./User"

@Entity()
export class Reservation extends BaseEntity {
    @PrimaryGeneratedColumn()
     ReservationId!:number    
    @Column()
     data_entrada!:string
    @Column()
     data_saida!:string
    @Column()
     avaliacao?:string
    @Column()
     nota?:string

    @ManyToOne(() => Propetie, pro => pro.reservation)
     pro!: Propetie

    @ManyToOne(()=>User,user=>user.reservation)
     user!:User

}