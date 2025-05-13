"use client"

import { useGetFeaturedProducts } from "../../api/useGetFeaturedProducts";
import { ProductType } from "../../types/product";
import { ResponseType } from "../../types/response";
import SkeletonSchema from "./skeletonSchema";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const FeaturedProducts = () =>{
    const {loading, result}:ResponseType= useGetFeaturedProducts();
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
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </Carousel>
    </div>
);
};
export default FeaturedProducts;