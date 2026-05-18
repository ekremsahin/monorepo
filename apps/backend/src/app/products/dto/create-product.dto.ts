import {IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min} from 'class-validator'

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  title!:string

  @IsString()
  @IsNotEmpty()
  description!: string

  @IsNumber()
  @Min(0)
  price!: number

  @IsInt()
  @Min(0)
  stockCount!:number

  @IsString()
  @IsOptional()
  imageUrl?: string

}