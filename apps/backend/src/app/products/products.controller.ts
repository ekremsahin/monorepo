import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService:ProductService){}

  @Get()
  async getProducts(){
    return await this.productsService.getAllProducts()
  }

  @Get(':id')
  async getProductById(@Param('id') id:string){
    return await this.productsService.getProductById(id)
  }

  @Post()
  async createProduct(@Body() dto:CreateProductDto){
    return await this.productsService.createProduct(dto)
  }

  @Patch(':id')
  async updateProduct(@Param('id') id:string, @Body() dto:UpdateProductDto){
    return await this.productsService.updateProduct(dto,id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id:string) {
    return await this.productsService.deleteProduct(id)
  }
}