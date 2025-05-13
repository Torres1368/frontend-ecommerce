"use client"

import { Expand, ShoppingCart } from "lucide-react";
import { useGetFeaturedProducts } from "../../api/useGetFeaturedProducts";
import { ProductType } from "../../types/product";
import { ResponseType } from "../../types/response";
import SkeletonSchema from "./skeletonSchema";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import IconButton from "./icon-buttom";
import { useRouter } from "next/navigation";

const FeaturedProducts = () =>{
    const {loading, result}:ResponseType= useGetFeaturedProducts();
    const router = useRouter();
    return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
        <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
        <Carousel>
            <CarouselContent className="ml-2 md:-ml-4">
                {loading && (
                    <SkeletonSchema grid={3} />
                )}
                {result !== null && result.map((product: ProductType) => {
                    const { id, imagenes, nombre, precio, stock } = product;
                    const imagenUrl = imagenes?.[0]?.url;

                    return (
                        <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                            <div className="p-1">
                                <Card className="py-4 border border-gray-200 shadow-none">
                                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                                        {imagenUrl ? (
                                            <img
                                                src={imagenUrl}
                                                alt="Imagen destacada"
                                                className="object-cover w-full h-48"
                                            />
                                        ) : (
                                            <span className="text-gray-400">Sin imagen</span>
                                        )}
                                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                            <div className="flex justify-center gap-x-6">
                                                <IconButton onClick={() => router.push(`/products/${id}`)} icon={<Expand size={20}/>}
                                                className="text-gray-600"/>

                                                <IconButton onClick={() => console.log("agregar al carrito")} icon={<ShoppingCart size={20}/>}
                                                className="text-gray-600"/>                                                   

                                            </div>
                                        </div>
                                    </CardContent>
                                    <div className="flex justify-between gap-4 px-5">
                                        <h3 className="text-lg font-bold">{nombre}</h3>
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">$ {precio}</p>
                                        </div>

                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext className="hidden sm:flex"/>
        </Carousel>
    </div>
);
};
export default FeaturedProducts;