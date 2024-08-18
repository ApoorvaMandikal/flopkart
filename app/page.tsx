import ProductCard from "./components/ProductCard";
import { IProduct } from "./types/product";
import Sidebar from "./components/SideBar";

export default async function Home() {
  let products: IProduct[] = [];

  try {
    const response = await fetch(
      "https://fakestoreapi.com/products?limit=10",
      {}
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    products = await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return (
    <div className="bg-gray-200">
      <div className=" flex">
        <Sidebar />
        <div className="container bg-white mx-auto px-4 py-8 lg:m-2">
          <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} currency="INR" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
