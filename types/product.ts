export type ProductType = {
    id: string;
    nombre: string;
    descripcion?: string;
    precio: number;
    stock: number;
    destacado?: boolean;
    categoriaId: string;
    imagenes?: {
        id: string;
        url: string;
        productoId: string;
        createdAt: string;
    }[];
};
