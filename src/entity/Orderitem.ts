import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";
import { Item } from "./User";
@Entity()
export class OrderItem extends BaseEntity {
   @PrimaryGeneratedColumn()
id!: number
@ManyToOne(type => Order, order => order.id) @JoinColumn() order!: Order
@OneToOne(type => Item) @JoinColumn()
item!: Item
}