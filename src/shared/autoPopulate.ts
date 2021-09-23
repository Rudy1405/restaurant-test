import { Injectable } from '@nestjs/common';
import { randomfy } from "../../node_modules/randomfy"

@Injectable()
export class PopulateService {
  createUser(): any {
    return {
            id: randomfy("number_id"),
            name: randomfy("name","eng","firstName")
           };
  }

  createItem(): any {
    return {
            id: randomfy("number_id"),
            name: randomfy("name","eng","stuff"),
            price: randomfy("number","money","dlls","total")
           };
  }

  createOrderItem(): any {
    return {
            id: randomfy("number_id"),
           };
  }

  createOrder(): any {
    return {
            id: randomfy("number_id"),
            vat: randomfy("nubmer","int","1-16"),
            subtotal: randomfy("number","money","dlls","total"),
            total: randomfy("number","money","dlls","total"),
            token: randomfy("token"),
            total_items: randomfy("nubmer","int","1-16"),
            customer_name: randomfy("name","eng","firstName") + randomfy("name","eng","LastName"),
            status: randomfy("httpStatus")
           };
  }

}

