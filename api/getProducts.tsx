import { useEffect, useState } from "react"

export function useGetCategories(){
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}`
    const [result,setResult]= useState([])
    const [loading,setLoading]= useState(true)
    const [error,setError]= useState('')

    useEffect(()=>{
        (async()=>{
            try{
                const response = await fetch(`${url}/api/category`)
                const data = await response.json()
                setResult(data)
                setLoading(false)
                
            }catch(error:any){
                setError('')
                setLoading(false)
            }
        })()
    }, [url])

    return {result,loading,error}
}