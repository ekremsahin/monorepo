import {ProductModel} from '@monorepo/types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService:PrismaService){}

  async getAllProducts(): Promise<ProductModel[]> {
    return await this.prismaService.product.findMany()
  }
}