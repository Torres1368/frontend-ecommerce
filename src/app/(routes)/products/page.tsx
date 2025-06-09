import ProductList from "@/components/products/ProductList";

export default function ProductosPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Productos</h1>
      <ProductList />
    </div>
  );
}