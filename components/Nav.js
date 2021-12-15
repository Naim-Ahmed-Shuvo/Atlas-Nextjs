import Link from "next/link";
import {BsChevronDown,BsCloudSun,BsFillMoonFill,BsMenuUp,BsPinterest,BsSearch,BsTwitter, BsYoutube} from "react-icons/bs"
import {AiFillFacebook,AiFillInstagram, AiOutlineUser} from "react-icons/ai"
import {useTheme} from 'next-themes'
import { useRouter } from "next/router";

const Nav = () => {
    const {theme, setTheme} = useTheme()
    const router = useRouter();
    const handleClick = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <nav className="w-full z-50 bg-blue-50 dark:bg-gray-800" style={{
            position: "fixed",
            top:"0%",
            width: "100%"
        }}>
            <div className="container mx-auto py-5  xs:px-2 sm:px-2 flex items-center justify-between ">

                <div className="nav__logo__links flex items-center">
                    <div className=" logo flex items-center">
                        <div className=" h-10  w-10 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                            <span className="h-3  w-3 bg-white "></span>
                        </div>
                        <Link href={"/"} passHref>
                        <h4 className=" text-gray-800 dark:text-blue-100 font-bold">ATLAS</h4>
                        </Link>
                    </div>
                    <div className="links flex items-center ml-10 xs:hidden lg:flex">
                    <span className="flex items-center mx-3">
                        <Link href={'/categories'}>Categories</Link>
                        <BsChevronDown/>
                    </span>
                    <span className="flex items-center mx-3">
                        <Link href={'/about'}>About Me</Link>
                    </span>
                    <span className="flex items-center mx-3">
                        <Link href={'/blog'}>Blog</Link>
                    </span>
                    <span className="flex items-center mx-3">
                        <Link href={'/ontact'}>Contact</Link>
                        
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
                        <a className="mx-3 cursor-pointer">
                            <AiFillInstagram className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>
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
                    <a className="mx-3 cursor-pointer" onClick={()=>handleClick()}>
                            {theme=='dark'?<BsCloudSun className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>:<BsFillMoonFill className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>}
                            
                            
                        </a>
                    <BsMenuUp className=" sm:text-lg"/>
                </div>
            </div>
        </nav>
    )
}

export default Nav
