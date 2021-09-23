import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from "typeorm";
import "reflect-metadata";
import { Item } from './entity/item';
import { OrderItem } from './entity/Orderitem';
import { Order } from './entity/Order';
import { User } from './entity/User';
import { PopulateService } from './shared/autoPopulate';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
