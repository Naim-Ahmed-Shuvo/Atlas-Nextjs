import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { MdRemoveShoppingCart } from 'react-icons/md';
import Layout from '../layout/Layout'
import { useStateValue } from '../store/StateProvider';
import { getSubtotal } from '../store/reducer';
import Link from 'next/link';
const Cart = () => {
    const [{ cart},dispatch] = useStateValue();
    const router = useRouter()
   
    useEffect(()=>{
        localStorage.getItem("USER") === null?router.push('/'):""
      },[])

    const removeFromCArt = (id) => {
        // alert(id)
        dispatch({
            type: "REMOVE_FROM_CART",
            id  
        })
    }

    return (
        <Layout>
              <section className="recentposts py-10 xs:px-2 mt-36">
                    <div className="container mx-auto">
                        <div className="title my-5 flex justify-between">
                                <h4 className="text-lg text-gray-800 font-medium dark:text-gray-100">Cart Items</h4>

                                <p><b>Subtotal: </b> ${getSubtotal(cart)}</p>
                            </div>
                            <div className="cards grid lg:grid-cols-2 xs:grid-cols-1 gap-10">
                                {cart.length !== 0? cart.map(item=>(

                                <div className="card flex xs:flex-col sm:flex-row  border dark:border-slate-600 p-5" key={Math.random()}>
                                        <div className="card-img  xs:flex  xs:justify-center">
                                        <Image src={item.image} alt="img" height={200} width={200}/>
                                        </div>
                                        <div className="card_content ml-7">
                                            <h2 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">Lorem Ipsum is not simply random text. It has roots in a piece of classical</h2>
                                            <p className="text-sm text-gray-400">, from a Lorem Ipsum passage, and going through the cites of the</p>
                                            <div className="card_social flex items-center justify-between mt-4">
                                                <span>{item.price}</span>
                                                <MdRemoveShoppingCart className="text-gray-400 text-xl mr-3 cursor-pointer" onClick={()=>removeFromCArt(item.id)}/>
                                                
                                        </div>
                                        </div>
                                </div>       
                                )):<div className='text-center text-gray-800 dark:text-slate-100 border col-span-12 py-5 dark:border-slate-600 md:col-span-12 xs:col-span-1'>
                                        <h4>No Cart Items...</h4>
                                        <button onClick={()=>router.push('/shop')} className='flex justify-center items-center mx-auto py-3 px-3 bg-blue-500 text-slate-50 my-5 rounded'> <BsArrowLeft/> <span className='ml-4'>Please Buy Some Products</span> </button>
                                    </div>}
                            </div>
                           {
                               cart.length !== 0&&
                                    <Link href={'/checkout'} passHref>
                                    <button className='bg-blue-500 px-3 py-2  text-slate-50 flex items-center mx-auto mt-10 rounded'> <span className='mr-3'>Check Out</span> <BsArrowRight/></button>
                                    </Link>
                           }
                    </div>
            </section>
        </Layout>
    )
}

export default Cart
