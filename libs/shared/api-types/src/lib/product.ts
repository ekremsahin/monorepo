export interface CreateProductRequest {
  title: string;
  description: string;
  price: number;
  stockCount: number;
  imageUrl?: string;
}

export interface UpdateProductRequest {
  title?: string;
  description?: string;
  price?: number;
  stockCount?: number;
  imageUrl?: string;
}