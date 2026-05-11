import { Controller, Get } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService:ProductService){}

  @Get()
  async getProducts(){
    return await this.productsService.getAllProducts()
  }
}