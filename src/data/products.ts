
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 5,
    description: "Experience superior sound quality with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.",
    features: ["Active Noise Cancellation", "30-hour Battery", "Premium Materials", "Wireless Charging"],
    inStock: true,
  },
  {
    id: 2,
    name: "Ultra-Slim Laptop",
    price: 1299,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 4,
    description: "Powerful performance meets elegant design in this ultra-slim laptop perfect for professionals and creatives.",
    features: ["Intel i7 Processor", "16GB RAM", "512GB SSD", "14-inch Display"],
    inStock: true,
  },
  {
    id: 3,
    name: "Artisan Coffee Collection",
    price: 49,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Food & Beverage",
    rating: 5,
    description: "A carefully curated selection of premium coffee beans from around the world, perfect for the discerning coffee enthusiast.",
    features: ["Single Origin", "Freshly Roasted", "Organic Certified", "Premium Packaging"],
    inStock: true,
  },
  {
    id: 4,
    name: "Modern Workspace Setup",
    price: 899,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    rating: 4,
    description: "Transform your home office with this complete modern workspace setup featuring ergonomic design and premium materials.",
    features: ["Ergonomic Design", "Premium Wood", "Cable Management", "Adjustable Height"],
    inStock: true,
  },
  {
    id: 5,
    name: "Luxury Living Room Set",
    price: 2499,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Furniture",
    rating: 5,
    description: "Elevate your living space with this luxurious furniture set combining comfort, style, and premium craftsmanship.",
    features: ["Premium Upholstery", "Solid Wood Frame", "Contemporary Design", "Easy Assembly"],
    inStock: false,
  },
  {
    id: 6,
    name: "Professional Camera Kit",
    price: 1899,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    rating: 5,
    description: "Complete professional camera kit for photographers and content creators, including camera body, lenses, and accessories.",
    features: ["24MP Sensor", "4K Video", "Multiple Lenses", "Professional Accessories"],
    inStock: true,
  },
];

export const categories = [
  "All",
  "Electronics",
  "Furniture", 
  "Food & Beverage",
];