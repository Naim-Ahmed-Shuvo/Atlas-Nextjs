import { Drawer } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Link from 'next/link'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { useStateValue } from '../store/StateProvider'


const useStyles = makeStyles({
    root: {
        background: 'rgb(240 253 250)',
        padding: 10,
        width: 200        
      },
})
const MenuDrawer = () => {
    const [{openMenuDrawer},dispatch] = useStateValue()
    const classes = useStyles();
    const [open,setOpen] = useState(true)
    const closeDrawer = ()=> {
        dispatch({
            type: "CLOSE_DRAWER"
        })
        setOpen(false)
   }
    return (
        <Drawer
        anchor={"left"}
        open={openMenuDrawer}
        onClose={closeDrawer}
        
        classes={{
           paper: classes.root
        }}
      >
         <section className='bg-gray-700 px-10'>
           <div className=' mt-10'>
                
                <span className="flex items-center mx-3 my-5">
                    <Link href={'/blog'}>Blog</Link>
                </span>
                <span className="flex items-center mx-3 my-5">
                    <Link href={'/shop'}>Shop</Link>                    
                </span>
                <span className="flex items-center mx-3 my-5">
                    <Link href={'/cart'}>Cart</Link>                    
                </span>
                <span className="flex items-center mx-3 my-5">
                    <Link href={'/checkout'}>Checkout</Link>                    
                </span>
                <span className="flex items-center mx-3 my-5">
                    <Link href={'/profile'}>Profile</Link>

                </span>
           </div>
         </section>
      </Drawer>
    )
}

export default MenuDrawer
