"use client"
import Link from 'next/link'
import { useGetCategories } from '../../api/getProducts';
import { ResponseType } from '../../types/response';
import { CategoryType } from '../../types/category';

const ChooseCategory = () => {
     const {result,loading}:ResponseType = useGetCategories()
     
  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 sm:px-24'>
      <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu categoria de productos</h3>

      <div className='grid gap-5 sm:grid-cols-3'>
            {!loading && result !== undefined &&(
                result.map((category:CategoryType)=>(

                    <p>{category.nombre}</p>
                ))
            )}
      </div>
    </div>
  );
};
export default ChooseCategory;