import {ProductModel} from '@monorepo/types';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService:PrismaService){}

  async getAllProducts(): Promise<ProductModel[]> {
    return await this.prismaService.product.findMany()
  }

  async getProductById(id: string): Promise<ProductModel>{
    const product = await this.prismaService.product.findFirst({
      where:{
        id:id
      }
    })

    if(product) {
      return product
    } else {
      throw new NotFoundException(`Product with id ${id} not found`)
    }
  }

  async createProduct(requestDto: CreateProductDto): Promise<ProductModel> {
    const createdProduct = await this.prismaService.product.create({
      data: requestDto
    })

    return createdProduct
  }

  async updateProduct (requestDto: UpdateProductDto, id:string): Promise<ProductModel> {
    await this.getProductById(id);

    const updatedProduct = await this.prismaService.product.update({
      data: requestDto,
      where: {
        id:id
      }
    })
    return updatedProduct
  }

  async deleteProduct (id: string): Promise<{message:string}> {
    await this.getProductById(id);
    await this.prismaService.product.delete({where:{id}});

    return {message: 'Product deleted'}
  }
}