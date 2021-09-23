import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Item extends BaseEntity {
   @PrimaryGeneratedColumn()
   id!: number
   name!: string
   price!: number
}