import { ENETDOWN } from "constants";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ImagesPropetie } from "./ImagesPropetie";
import { Reservation } from "./Reservation";

@Entity()
export class Propetie extends BaseEntity{
    @PrimaryGeneratedColumn()
    private PropetieId!:number;
    @Column()
    description?:string;
    @Column()
    private rua!:string
    @Column()
    private cidade!:string
    @Column()
    private estado!:string
    @Column()
    private pais!:string
    @Column()
    longitude?:string
    @Column()
    latitude?:string
    @Column()
    private vagas!:number
    @Column()
    private preco_diaria!:number
    @OneToMany(()=>ImagesPropetie,imagens=>imagens.pro)
    imagens?:ImagesPropetie[];
    @OneToMany(() => Reservation, reservation => reservation.pro)
    public reservation!: Reservation[];
    
}