import ProductCard from './components/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default async function Home() {
  const response = await fetch('https://fakestoreapi.com/products?limit=10');
  const products: Product[] = await response.json();

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} currency='INR' />
        ))}
      </div>
    </div>
  );
}
