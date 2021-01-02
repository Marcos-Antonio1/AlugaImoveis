import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Propetie } from "./Propetie"
import { User } from "./User"

@Entity()
export class Reservation extends BaseEntity {
    @PrimaryGeneratedColumn()
    public ReservationId!:number
    @Column()
    public data_entrada!:string
    @Column()
    public data_saida!:string
    @Column()
    public avaliacao?:string
    @Column()
    public nota?:string

    @ManyToOne(() => Propetie, pro => pro.reservation)
    public pro!: Propetie

    @ManyToOne(()=>User,user=>user.reservation)
    public user!:User

}