import { ProductType } from "../../../types/product";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img
        src={product.imagenes?.[0]?.url || "/no-image.png"}
        alt={product.nombre}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-xl font-bold mt-2">{product.nombre}</h3>
      <p className="text-gray-600">${product.precio}</p>
    </div>
  );
};

export default ProductCard;