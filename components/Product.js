import Image from 'next/image'
import React from 'react'
import { BsEye } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import {MdAddShoppingCart} from "react-icons/md"
import { useStateValue } from '../store/StateProvider'

const Product = ({name,image,description,price,id}) => {

    const [{ cart},dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                name,
                image,
                description,
                price,
                id,
            },
        });
    }
    console.log(cart);
    
    return (
        <div className="card p-2 bg-gray-50 dark:bg-slate-900 shadow border dark:border-slate-700">
        <div className="card_img">
            <Image src={image} alt="img" className="w-full rounded" width={350} height={300}/>
        </div>
        <div className="card_text">
            <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">{name} </h4>
            <p className="text-sm text-gray-400">{description}</p>
            <div className="card_social flex items-center justify-between mt-4">
                <span className="text-gray-400 text-lg">${price}</span>
                <MdAddShoppingCart className="text-gray-400 text-xl mr-3 cursor-pointer" onClick={addToCart}/>
            </div>
        </div>
    </div>
    )
}

export default Product
