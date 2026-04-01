/**
 * Mock API for Guss Hairs
 */

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  subCategory?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Bone Straight Wig",
    price: 70000,
    image: "https://picsum.photos/seed/hair1/800/1000",
    description: "100% Human Hair, 22 inches, Grade 12A.",
    category: "Wigs",
    subCategory: "Bone Straight"
  },
  {
    id: 2,
    name: "Deep Wave Bundle",
    price: 45000,
    image: "https://picsum.photos/seed/hair2/800/1000",
    description: "Lustrous deep wave curls, 18 inches.",
    category: "Bundles",
    subCategory: "Deep Wave"
  },
  {
    id: 3,
    name: "Pixie Cut Wig",
    price: 35000,
    image: "https://picsum.photos/seed/hair3/800/1000",
    description: "Short and sassy, pre-plucked hairline.",
    category: "Wigs",
    subCategory: "Pixie Cut"
  },
  {
    id: 4,
    name: "Body Wave Frontal",
    price: 55000,
    image: "https://picsum.photos/seed/hair4/800/1000",
    description: "Natural body wave, 13x4 HD Lace.",
    category: "Frontals"
  },
  {
    id: 5,
    name: "Kinky Curly Ponytail",
    price: 15000,
    image: "https://picsum.photos/seed/hair5/800/1000",
    description: "Instant volume, easy wrap-around.",
    category: "Bundles",
    subCategory: "Kinky Curly"
  },
  {
    id: 6,
    name: "Silky Straight Frontal",
    price: 60000,
    image: "https://picsum.photos/seed/hair6/800/1000",
    description: "Smooth and shiny, 20 inches.",
    category: "Frontals"
  },
  {
    id: 7,
    name: "Luxury Bone Straight",
    price: 95000,
    image: "https://picsum.photos/seed/hair7/800/1000",
    description: "Double drawn bone straight, 24 inches.",
    category: "Wigs",
    subCategory: "Bone Straight"
  },
  {
    id: 8,
    name: "Short Pixie Wig",
    price: 30000,
    image: "https://picsum.photos/seed/hair8/800/1000",
    description: "Classic pixie cut, easy maintenance.",
    category: "Wigs",
    subCategory: "Pixie Cut"
  },
  {
    id: 9,
    name: "Deep Wave Wig",
    price: 58000,
    image: "https://picsum.photos/seed/hair9/800/1000",
    description: "Full lace deep wave wig, 20 inches.",
    category: "Wigs",
    subCategory: "Deep Wave"
  },
  {
    id: 10,
    name: "Straight Bundle Deal",
    price: 50000,
    image: "https://picsum.photos/seed/hair10/800/1000",
    description: "3 bundles of silky straight hair.",
    category: "Bundles",
    subCategory: "Straight"
  },
  {
    id: 11,
    name: "Body Wave Bundle",
    price: 48000,
    image: "https://picsum.photos/seed/hair11/800/1000",
    description: "Premium body wave bundles, 20 inches.",
    category: "Bundles",
    subCategory: "Body Wave"
  },
  {
    id: 12,
    name: "Kinky Curly Bundles",
    price: 52000,
    image: "https://picsum.photos/seed/hair12/800/1000",
    description: "Natural looking kinky curly bundles.",
    category: "Bundles",
    subCategory: "Kinky Curly"
  },
  {
    id: 13,
    name: "HD Lace Frontal",
    price: 65000,
    image: "https://picsum.photos/seed/hair13/800/1000",
    description: "Ultra thin HD lace, 13x6 frontal.",
    category: "Frontals"
  },
  {
    id: 14,
    name: "Blonde Straight Wig",
    price: 85000,
    image: "https://picsum.photos/seed/hair14/800/1000",
    description: "613 Blonde, 20 inches, 180% density.",
    category: "Wigs",
    subCategory: "Straight"
  },
  {
    id: 15,
    name: "Water Wave Bundles",
    price: 55000,
    image: "https://picsum.photos/seed/hair15/800/1000",
    description: "3 bundles of deep water wave curls.",
    category: "Bundles",
    subCategory: "Water Wave"
  },
  {
    id: 16,
    name: "Closure Wig",
    price: 45000,
    image: "https://picsum.photos/seed/hair16/800/1000",
    description: "4x4 closure wig, easy to wear.",
    category: "Wigs"
  },
  {
    id: 17,
    name: "Deep Wave Frontal",
    price: 58000,
    image: "https://picsum.photos/seed/hair17/800/1000",
    description: "Lustrous deep wave, 13x4 HD lace.",
    category: "Frontals"
  },
  {
    id: 18,
    name: "Straight Frontal Wig",
    price: 75000,
    image: "https://picsum.photos/seed/hair18/800/1000",
    description: "Silky straight frontal wig, 22 inches.",
    category: "Wigs",
    subCategory: "Straight"
  },
  {
    id: 19,
    name: "Kinky Straight Bundles",
    price: 60000,
    image: "https://picsum.photos/seed/hair19/800/1000",
    description: "Natural kinky straight texture, 3 bundles.",
    category: "Bundles",
    subCategory: "Kinky Straight"
  }
];

export async function fetchProducts(): Promise<Product[]> {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 800);
  });
}
