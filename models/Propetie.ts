import { ENETDOWN } from "constants";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ImagesPropetie } from "./ImagesPropetie";
import { Reservation } from "./Reservation";
import { User } from "./User";

@Entity()
export class Propetie extends BaseEntity{
    @PrimaryGeneratedColumn()
    PropetieId!:number;
    @Column()
    description?:string;
    @Column()
     rua!:string
    @Column()
     cidade!:string
    @Column()
     estado!:string
    @Column()
     pais!:string
    @Column({nullable:false})
    longitude?:string
    @Column({nullable:false})
    latitude?:string
    @Column()
     vagas!:number
    @Column()
     preco_diaria!:number
    @OneToMany(()=>ImagesPropetie,imagens=>imagens.pro)
    imagens?:ImagesPropetie[];
    @OneToMany(() => Reservation, reservation => reservation.pro)
    public reservation?: Reservation[];
    @ManyToOne(() => User, user => user.pro)
    user!: User;
}