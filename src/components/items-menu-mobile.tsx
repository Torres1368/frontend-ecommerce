import { Menu } from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile= ()=>{
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categorias/producto1" className="block">Producto1</Link>
                <Link href="/categorias/producto2" className="block">Producto 2 </Link>
                <Link href="/categorias/producto3" className="block">Producto 3</Link>
            </PopoverContent>
        </Popover>
    );
}
export default ItemsMenuMobile;