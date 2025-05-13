import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter =[
    {
        id: 1,
        name: "Sobre nosotros",
        link: "#"
    },

    {
        id: 2,
        name: "Productos",
        link: "#"
    },
    
    {
        id: 3,
        name: "Mi cuenta",
        link: "#"
    },

    {
        id: 4,
        name: "Politicas de privacidad",
        link: "#"
    },
]

const Footer=()=>{
    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>
                        <span className="font-bold">
                            DEV
                        </span>
                        E-commerce
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map((item)=>{
                            return (
                                <li key={item.id}>
                                    <Link href={item.link} className="mr-4 text-gray-500 hover:underline md:mr-6">{item.name}</Link>                
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Separator className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy; 2025 
                    <Link href="#">E-commerce</Link>
                     All rights reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;