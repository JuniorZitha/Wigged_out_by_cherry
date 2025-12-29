import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  length: string;
  texture: string;
  price: number;
  description: string;
  images: string[];
  inStock: boolean;
  features: string[];
  colors?: string[];
  customOptions?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[] = [
    // Brazilian 14A Silky Straight Wigs
    {
      id: 1,
      name: 'Brazilian 14A Silky Straight',
      category: 'Silky Straight',
      length: '18"',
      texture: 'Single Drawn (4x4)',
      price: 2200,
      description: 'Premium Brazilian 14A silky straight wig with natural shine and smooth texture. Perfect for a sleek, elegant look.',
      images: [
        'https://via.placeholder.com/500x600/FFC0D3/4A4A4A?text=18+Silky+Straight',
        'https://via.placeholder.com/500x600/FFE5ED/4A4A4A?text=Side+View',
        'https://via.placeholder.com/500x600/FF91B0/4A4A4A?text=Back+View'
      ],
      inStock: true,
      features: [
        'Brazilian 14A Grade Hair',
        'Single Drawn Quality',
        '4x4 Lace Closure',
        'Natural Hairline',
        'Can be dyed and styled',
        'Long-lasting'
      ],
      colors: ['Natural Black', '1B', '2'],
      customOptions: ['HD Lace available on preorder', 'Custom colors available']
    },
    {
      id: 2,
      name: 'Brazilian 14A Silky Straight',
      category: 'Silky Straight',
      length: '20"',
      texture: 'Single Drawn (4x4)',
      price: 2500,
      description: 'Premium Brazilian 14A silky straight wig in 20 inches. Luxurious length with beautiful natural movement.',
      images: [
        'https://via.placeholder.com/500x600/FFC0D3/4A4A4A?text=20+Silky+Straight',
        'https://via.placeholder.com/500x600/FFE5ED/4A4A4A?text=Side+View',
        'https://via.placeholder.com/500x600/FF91B0/4A4A4A?text=Back+View'
      ],
      inStock: true,
      features: [
        'Brazilian 14A Grade Hair',
        'Single Drawn Quality',
        '4x4 Lace Closure',
        'Natural Hairline',
        'Can be dyed and styled',
        'Long-lasting'
      ],
      colors: ['Natural Black', '1B', '2'],
      customOptions: ['HD Lace available on preorder', 'Custom colors available']
    },
    {
      id: 3,
      name: 'Brazilian 14A Silky Straight',
      category: 'Silky Straight',
      length: '20"',
      texture: 'Single Drawn (13x4)',
      price: 2700,
      description: 'Premium Brazilian 14A silky straight wig with 13x4 lace frontal for maximum styling versatility.',
      images: [
        'https://via.placeholder.com/500x600/FFC0D3/4A4A4A?text=20+Silky+Straight+13x4',
        'https://via.placeholder.com/500x600/FFE5ED/4A4A4A?text=Front+View',
        'https://via.placeholder.com/500x600/FF91B0/4A4A4A?text=Side+View'
      ],
      inStock: true,
      features: [
        'Brazilian 14A Grade Hair',
        'Single Drawn Quality',
        '13x4 Lace Frontal',
        'Ear to Ear Lace',
        'Natural Hairline',
        'Maximum styling options',
        'Can be dyed and styled'
      ],
      colors: ['Natural Black', '1B', '2'],
      customOptions: ['HD Lace available on preorder', 'Custom colors available']
    },
    {
      id: 4,
      name: 'Brazilian 14A Silky Straight',
      category: 'Silky Straight',
      length: '22"',
      texture: 'Single Drawn (4x4)',
      price: 3000,
      description: 'Stunning 22-inch Brazilian 14A silky straight wig. Long, luxurious hair for a dramatic, glamorous look.',
      images: [
        'https://via.placeholder.com/500x600/FFC0D3/4A4A4A?text=22+Silky+Straight',
        'https://via.placeholder.com/500x600/FFE5ED/4A4A4A?text=Side+View',
        'https://via.placeholder.com/500x600/FF91B0/4A4A4A?text=Back+View'
      ],
      inStock: true,
      features: [
        'Brazilian 14A Grade Hair',
        'Single Drawn Quality',
        '4x4 Lace Closure',
        'Natural Hairline',
        'Extra long length',
        'Can be dyed and styled',
        'Long-lasting'
      ],
      colors: ['Natural Black', '1B', '2'],
      customOptions: ['HD Lace available on preorder', 'Custom colors available']
    },
    
    // Curly Hair Wigs
    {
      id: 5,
      name: 'Water Wave / Jerry Curl',
      category: 'Curly',
      length: '14"',
      texture: 'Water Wave (4x4)',
      price: 2400,
      description: 'Beautiful water wave pattern with bouncy, defined curls. Perfect for a natural, beachy look.',
      images: [
        'https://via.placeholder.com/500x600/FFC0D3/4A4A4A?text=14+Water+Wave',
        'https://via.placeholder.com/500x600/FFE5ED/4A4A4A?text=Curl+Pattern',
        'https://via.placeholder.com/500x600/FF91B0/4A4A4A?text=Side+View'
      ],
      inStock: true,
      features: [
        'Natural water wave pattern',
        '4x4 Lace Closure',
        'Bouncy curls',
        'Low maintenance',
        'Can be straightened',
        'Tangle-free'
      ],
      colors: ['Natural Black', '1B'],
      customOptions: ['HD Lace available on preorder', 'Custom colors available']
    },
    {
      id: 6,
      name: 'Kinky Curly',
      category: 'Curly',
      length: '14"',
      texture: 'Kinky Curly',
      price: 2300,
      description: 'Tight, kinky curls for a bold, voluminous look. Natural texture that mimics afro-textured hair beautifully.',
      images: [
        'https://via.placeholder.com/500x600/FFC0D3/4A4A4A?text=14+Kinky+Curly',
        'https://via.placeholder.com/500x600/FFE5ED/4A4A4A?text=Curl+Detail',
        'https://via.placeholder.com/500x600/FF91B0/4A4A4A?text=Full+View'
      ],
      inStock: true,
      features: [
        'Tight kinky curl pattern',
        'Natural texture',
        'Full volume',
        'Low maintenance',
        'Tangle-resistant',
        'Can be styled versatile'
      ],
      colors: ['Natural Black', '1B'],
      customOptions: ['HD Lace available on preorder']
    },
    {
      id: 7,
      name: 'Water Wave / Jerry Curl',
      category: 'Curly',
      length: '18"',
      texture: 'Water Wave (4x4)',
      price: 2600,
      description: 'Gorgeous 18-inch water wave wig with soft, flowing curls. Perfect length for a romantic, feminine style.',
      images: [
        'https://via.placeholder.com/500x600/FFC0D3/4A4A4A?text=18+Water+Wave',
        'https://via.placeholder.com/500x600/FFE5ED/4A4A4A?text=Wave+Pattern',
        'https://via.placeholder.com/500x600/FF91B0/4A4A4A?text=Back+View'
      ],
      inStock: true,
      features: [
        'Natural water wave pattern',
        '4x4 Lace Closure',
        'Soft, flowing curls',
        'Medium length',
        'Low maintenance',
        'Can be straightened',
        'Tangle-free'
      ],
      colors: ['Natural Black', '1B'],
      customOptions: ['HD Lace available on preorder', 'Custom colors available']
    },
    {
      id: 8,
      name: 'Loose Deep Curl',
      category: 'Curly',
      length: '20"',
      texture: 'Loose Deep Curl',
      price: 2800,
      description: 'Stunning loose deep curl pattern with luxurious movement. Perfect for a glamorous, red-carpet ready look.',
      images: [
        'https://via.placeholder.com/500x600/FFC0D3/4A4A4A?text=20+Loose+Deep+Curl',
        'https://via.placeholder.com/500x600/FFE5ED/4A4A4A?text=Curl+Pattern',
        'https://via.placeholder.com/500x600/FF91B0/4A4A4A?text=Side+View'
      ],
      inStock: true,
      features: [
        'Loose deep curl pattern',
        'Luxurious movement',
        'Full body and bounce',
        'Long-lasting curls',
        'Can be straightened',
        'Minimal shedding'
      ],
      colors: ['Natural Black', '1B', '2'],
      customOptions: ['HD Lace available on preorder', 'Custom colors available']
    },
    
    // Premium 15A SDD Hair
    {
      id: 9,
      name: 'Premium 15A SDD Hair',
      category: 'Premium',
      length: '18"',
      texture: 'Bone Straight',
      price: 3600,
      description: 'The ultimate luxury - Premium 15A SDD bone straight hair. Silkiest, softest, most luxurious hair available.',
      images: [
        'https://via.placeholder.com/500x600/FFC0D3/4A4A4A?text=18+Premium+SDD',
        'https://via.placeholder.com/500x600/FFE5ED/4A4A4A?text=Texture+Detail',
        'https://via.placeholder.com/500x600/FF91B0/4A4A4A?text=Side+View'
      ],
      inStock: true,
      features: [
        'Premium 15A Grade - Highest Quality',
        'SDD (Super Double Drawn)',
        'Bone straight texture',
        'Ultra silky and soft',
        'Minimal to no shedding',
        'Can hold curls beautifully',
        'Long-lasting luxury',
        'Natural shine'
      ],
      colors: ['Natural Black', '1B', '2', '4'],
      customOptions: ['HD Lace available on preorder', 'Custom colors available', 'Custom lengths available']
    }
  ];

  constructor() { }

  // Get all products
  getAllProducts(): Product[] {
    return this.products;
  }

  // Get product by ID
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  // Get products by category
  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  // Get all categories
  getCategories(): string[] {
    return [...new Set(this.products.map(product => product.category))];
  }
}