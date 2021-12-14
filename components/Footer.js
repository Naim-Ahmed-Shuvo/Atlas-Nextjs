import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiOutlineRight } from "react-icons/ai";
import { BsMailbox, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="container mx-auto py-4 mt-14 xs:px-2">
           <div className="footer_top flex items-center justify-between">
                <div className=" logo flex items-center">
                    <div className=" h-8  w-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                        <span className="h-2  w-2 bg-white "></span>
                    </div>
                    <Link href={"/"} passHref>
                    <h4 className=" text-gray-800 dark:text-blue-100 font-bold">ATLAS</h4>
                    </Link>
                </div>

                <button className="flex items-center p-2 border-slate-700 bg-white dark:bg-slate-700 rounded">
                    <span className="text-gray-700 dark:text-gray-100 text-sm mr-4">Contact Me</span>
                    <AiOutlineRight className="text-gray-500 dark:text-gray-100 text-sm"/>
                </button>
            </div>
            <div className="footer_mid  items-center mt-8 md:flex-row xs:flex xs:flex-col xs:px-2">
                <div className="footer_links flex  sm:justify-start basis-1/2">
                     <div className="links_left">
                         <h4 className=" font-medium text-gray-700 dark:text-gray-200 xs:text-sm">ATLAS</h4>
                         <p className="text-gray-500 dark:text-gray-300 text-sm my-2">Homepage</p>
                         <p className="text-gray-500 dark:text-gray-300 text-sm my-2">About</p>
                         <p className="text-gray-500 dark:text-gray-300 text-sm my-2">Contact</p>
                         <p className="text-gray-500 dark:text-gray-300 text-sm my-2">Article</p>
                     </div>
                     <div className="links_right ml-36 xs:ml-20">
                         <h4 className=" font-medium text-gray-700 dark:text-gray-200">Template</h4>
                         <p className="text-gray-500 dark:text-gray-300 text-sm my-2">Style GUid</p>
                         <p className="text-gray-500 dark:text-gray-300 text-sm my-2">Getting Started</p>
                         <p className="text-gray-500 dark:text-gray-300 text-sm my-2">ChangeLog</p>
                        
                     </div>
                </div>

                <div className="footer_news_letter xs:flex xs:flex-col sm:flex-row justify-end xs:mt-5">
                    <div className="icon mr-10">
                         <BsMailbox/>
                    </div>
                    <div className="info">
                       <h4 className=" capitalize text-lg font-medium text-gray-800 dark:text-gray-300">join the news letter and read the new posts first</h4>
                       <p className=" text-gray-500 dark:text-gray-400 text-sm max-w-xs my-3">
                           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                       </p>
                       <div className=" bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-400 flex rounded overflow-hidden p-1 mt-7">
                           <input placeholder="Email" type={"email"} className=" outline-none border-0 bg-transparent p-2 w-full placeholder:text-sm"/>
                           <button className=" bg-blue-500 border border-blue-500 px-7 rounded text-gray-100 dark:text-gray-100">Subscribe</button>
                       </div>
                    </div>
                </div>
            </div>

            <div className="footer_bottom xs:grid xs:grid-cols-1 sm:grid-cols-2 mt-32">
                  <div className="copy_right">
                      <p className=" text-gray-400 text-sm dark:text-slate-500"> @ 2021 | all rights reserved</p>
                  </div>
                  <div className="links flex items-center justify-end">
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
                         <BsPinterest className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>
                     </a>
                     <a className="mx-3 cursor-pointer">
                         <BsYoutube className=" text-gray-500 dark:text-gray-400 text-lg dark:hover:text-gray-200"/>
                     </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
