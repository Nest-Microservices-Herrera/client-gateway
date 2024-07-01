import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { PRODUCT_SERVICE, envs } from 'src/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [ProductsController],
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE, transport: Transport.TCP,
        options: {
          host: envs.producsMicroserviceHost,
          port: envs.producsMicroservicePort
        }
      }
    ])]
})
export class ProductsModule { }
