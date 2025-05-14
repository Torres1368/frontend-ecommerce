import Link from "next/link";
import { buttonVariants } from "./ui/button";


const BannerProduct = () => {
  return (
    <>
    <div className="mt-4 text-center">
      <p>Explora todos los productos disponibles</p>
      <h4 className="mt-2 text-5xl font-extrabold uppercase">Productos de calidad</h4>
      <p className="my-2 text-lg">Encuentra lo que deseas en nuestra tienda</p>
      <Link href="#" className={buttonVariants()}>Comprar</Link>
    </div>
      <div className=" h-[350px] bg-cover  lg:h-[900px] bg-[url('/products1.jpg')] bg-center mt-5" />


    </>
  );
};

export default BannerProduct;