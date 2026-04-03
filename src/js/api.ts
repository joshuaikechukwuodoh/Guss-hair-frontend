import { trpc } from './trpc';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  subCategory?: string;
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    const items = await trpc.getItems.query();
    return items.map((item) => ({
      id: item.id,
      name: item.name,
      price: parseFloat(item.price || "0"),
      image: item.image,
      description: item.description,
      category: item.category || 'Wigs',
      subCategory: item.subCategory || undefined,
    }));
  } catch (error) {
    console.error('Error fetching products from tRPC:', error);
    return [];
  }
}
