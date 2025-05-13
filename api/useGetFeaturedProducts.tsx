import { useEffect, useState } from "react";

export function useGetFeaturedProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?destacado=true&populate=*`;

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setResult(json.data || json); // depende de cómo venga la respuesta
            } catch (error: any) {
                console.error("Error al cargar productos:", error);
                setError(error.message || "Error");
            } finally {
                setLoading(false);
            }
        })();
    }, []); // NO pongas [url] si no quieres ese warning de React

    return { loading, result, error };
}
