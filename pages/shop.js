import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { BsArrowLeft, BsArrowRight, BsEye } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import Product from '../components/Product'
import Layout from '../layout/Layout'
import img2 from "../public/blog/blog2.jpg"
import img3 from "../public/blog/blog3.jpg"
import img4 from "../public/blog/blog4.jpg"
import img5 from "../public/blog/blog5.jpg"
import { products } from '../utils/products'

const Shop = () => {
    const router = useRouter()
    useEffect(()=>{
        localStorage.getItem("USER") === null?router.push('/'):""
      },[])
    return (
        <Layout>
             <section className="featuredposts py-10 mt-36">
            <div className="container mx-auto xs:px-2">
                 <div className="title my-5 flex justify-between">
                     <h4 className="text-lg text-gray-800 font-medium dark:text-gray-100">Products</h4>
                    
                 </div>

                 <div className="cards grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 gap-20">
                     {products.map(product=>(
                        <Product name={product.name} image={product.image} price={product.price} description={product.description} id={product.id} key={product.id}/>
                     ))}
                    
                 </div>
            </div>
        </section>
        </Layout>
    )
}

export default Shop
