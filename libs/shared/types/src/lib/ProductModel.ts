export interface ProductModel {
  id: string;
  title: string;
  description: string;
  price: number;
  stockCount: number;
  imageUrl?: string;
  createdAt?: Date | string;
}