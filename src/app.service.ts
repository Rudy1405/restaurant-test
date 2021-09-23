import { Injectable } from '@nestjs/common';
import { createConnection } from "typeorm";
import { Item } from './entity/item';
import { Order } from './entity/Order';
import { OrderItem } from './entity/Orderitem';
import { User } from './entity/User';
import { PopulateService } from './shared/autoPopulate';




@Injectable()
export class AppService {
  populateDB(): any {
    return createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "admin",
      database: "test",
      entities: [
          __dirname+"/entity/*.ts"
      ],
      synchronize: true,
      logging: false
    }).then(async connection => {
    
      //here we could make a cycle
      let populate : PopulateService;
      let user = new User();
          user = populate.createUser();
    
      let item = new Item();
          item = populate.createItem();    
      
      let orderItem = new OrderItem();
      let order = new Order();
      
          order = populate.createOrder();
          order.order_items = orderItem; 
    
          orderItem = populate.createOrderItem(); 
          orderItem.order = order;
          orderItem.item = item;
    
    
        await connection.manager.save(user);
        console.log("user N has been saved");
        await connection.manager.save(item);
        await connection.manager.save(orderItem);
        await connection.manager.save(order);
        console.log("Order N has been saved");
    }).catch(error => console.log(error));
  }

  getAllOrders(): any {
    createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "admin",
      database: "test",
      entities: [
          __dirname+"/entity/*.ts"
      ],
      synchronize: true,
      logging: false
    }).then(async connection => {
       let OrderRepository = connection.getRepository(Order);
       let allOrders = await OrderRepository.find();
       return allOrders;
      
    }).catch(error => error);
  }

}

