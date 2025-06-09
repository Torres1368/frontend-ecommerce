"use client";

import { useGetProducts } from "../../../api/getProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, loading, error } = useGetProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar: {error}</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default ProductList;