"use client"
import { useEffect, useState } from "react";
import { ProductType } from "../types/product";


export function useGetProducts(){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading]= useState(true)
    const [error, setError] = useState("")
    
    useEffect(()=>{
        (async () =>{
            try {
                const response = await fetch(`${url}/api/products`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError("Error: " + error)
            }finally{
                setLoading(false)
            }
        })();
    },[url])

    return(
        {products , loading, error}
    )
}