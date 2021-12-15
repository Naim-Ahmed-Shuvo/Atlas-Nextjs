import Link from "next/link";
import {BsChevronDown,BsCloudSun,BsFillMoonFill,BsMenuUp,BsPinterest,BsSearch,BsTwitter, BsYoutube} from "react-icons/bs"
import {AiFillFacebook,AiFillInstagram, AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import {useTheme} from 'next-themes'
import { useRouter } from "next/router";
import { useStateValue } from "../store/StateProvider";

const Nav = () => {
    const {theme, setTheme} = useTheme()
    const [{cart},dispatch] = useStateValue()
    const router = useRouter();
    const handleClick = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const toggleDrawer = ()=> {
         dispatch({
             type: "TOGGLE_DRAWER"
         })
    }
    return (
        <nav className="w-full z-50 bg-blue-50 dark:bg-gray-800" style={{
            position: "fixed",
            top:"0%",
            width: "100%"
        }}>
            <div className="container mx-auto py-5  xs:px-2 sm:px-2 flex items-center justify-between ">

                <div className="nav__logo__links flex items-center">
                        <Link href={"/"} passHref>
                            <div className=" logo flex items-center cursor-pointer">
                                <div className=" h-10  w-10 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                                    <span className="h-3  w-3 bg-white "></span>
                                </div>
                                <h4 className=" text-gray-800 dark:text-blue-100 font-bold">ATLAS</h4>
                            </div>
                        </Link>
                    <div className="links flex items-center ml-10 xs:hidden lg:flex">
                   
                    <span className="flex items-center mx-3">
                        <Link href={'/blog'}>Blog</Link>
                    </span>
                    <span className="flex items-center mx-3">
                        <Link href={'/shop'}>Shop</Link>     
                    </span>
                    </div>
                </div>

                <div className="nav_right_links  items-center xs:hidden  sm:hidden lg:flex ">
                    <div className="searchbox flex items-center border rounded overflow-hidden px-2 mr-8 dark:border-gray-400">
                        <BsSearch className=" text-gray-400 dark:text-gray-500"/>
                        <input type="text" placeholder="Search..." className=" border-0 outline-none p-2 bg-transparent"/>
                    </div>
                    <div className="links flex items-center">
                        <a className="mx-3 cursor-pointer">
                            <BsTwitter className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>
                        </a>
                        <a className="mx-3 cursor-pointer">
                            <AiFillFacebook className=" text-gray-500 dark:text-gray-400 text-lg font-popppins dark:hover:text-gray-200"/>
                        </a>
                        <a className="mx-3 cursor-pointer relative" onClick={()=>router.push("/cart")}>
                            <AiOutlineShoppingCart className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>
                            <span className=" absolute bottom-1 left-3 text-red-500">{cart?.length}</span>
                        </a>
                        <a className="mx-3 cursor-pointer">
                            <AiOutlineUser className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200" onClick={()=>router.push('/profile')}/>
                        </a>
                       
                        <a className="mx-3 cursor-pointer" onClick={()=>handleClick()}>
                            {theme=='dark'?<BsCloudSun className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>:<BsFillMoonFill className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>}
                            
                            
                        </a>
                    </div>
                </div>
                <div className=" cursor-pointer lg:hidden flex items-center">
                   <div className="relative cursor-pointer" onClick={()=>router.push("/cart")}>
                       <AiOutlineShoppingCart className=" sm:text-lg"/>
                       <span className=" absolute bottom-1 left-3 text-red-500">{cart?.length}</span>
                   </div>
                    <a className="mx-3 cursor-pointer" onClick={()=>handleClick()}>
                            {theme=='dark'?<BsCloudSun className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>:<BsFillMoonFill className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>}
                            
                            
                        </a>
                    <BsMenuUp className=" sm:text-lg" onClick={toggleDrawer}/>
                </div>
            </div>
        </nav>
    )
}

export default Nav
