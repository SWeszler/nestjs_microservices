import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order-request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  createOrder(request: CreateOrderRequest) {
    return this.ordersRepository.create(request);
  }

  getOrders() {
    return this.ordersRepository.find({});
  }
}
