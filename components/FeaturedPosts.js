import Image from "next/image";
import img2 from "../public/blog/blog2.jpg"
import img3 from "../public/blog/blog3.jpg"
import img4 from "../public/blog/blog4.jpg"
import img5 from "../public/blog/blog5.jpg"
import {FiMessageSquare} from 'react-icons/fi';
import { BsArrowLeft, BsArrowRight, BsEye } from "react-icons/bs";

const FeaturedPosts = () => {
    return (
        <section className="featuredposts py-10">
            <div className="container mx-auto xs:px-2">
                 <div className="title my-5 flex justify-between">
                     <h4 className="text-lg text-gray-800 font-medium dark:text-gray-100">Featured posts</h4>
                     <div className="flex items-center">
                         <BsArrowLeft className=" mr-4 text-gray-300"/>
                         <BsArrowRight/>
                     </div>
                 </div>

                 <div className="cards grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 gap-20">
                     <div className="card p-2 bg-gray-50 dark:bg-slate-900 shadow border dark:border-slate-700">
                         <div className="card_img">
                             <Image src={img2} alt="img" className="w-full rounded"/>
                         </div>
                         <div className="card_text">
                             <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">To use a remote image, the src property should be a URL string, </h4>
                             <p className="text-sm text-gray-400">Sometimes you may want to access a remote image, but still use the built-in Next.js Image Optimization API. To do this, leave the loader at its</p>
                             <div className="card_social flex items-center mt-4">
                                  <div className="flex items-center mr-7">
                                      <FiMessageSquare className="text-gray-400 text-xl mr-3"/>
                                      <span className="text-gray-400 text-lg">3</span>
                                  </div>
                                  <div className="flex items-center">
                                      <BsEye className="text-gray-400 text-xl mr-3"/>
                                      <span className="text-gray-400 text-lg">12.4k</span>
                                  </div>
                             </div>
                         </div>
                     </div>
                     <div className="card p-2 bg-white dark:bg-slate-900 shadow border dark:border-slate-700">
                         <div className="card_img">
                             <Image src={img3} alt="img" className="w-full rounded"/>
                         </div>
                         <div className="card_text">
                             <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">To use a remote image, the src property should be a URL string, </h4>
                             <p className="text-sm text-gray-400">Sometimes you may want to access a remote image, but still use the built-in Next.js Image Optimization API. To do this, leave the loader at its</p>
                             <div className="card_social flex items-center mt-4">
                                  <div className="flex items-center mr-7">
                                      <FiMessageSquare className="text-gray-400 text-xl mr-3"/>
                                      <span className="text-gray-400 text-lg">3</span>
                                  </div>
                                  <div className="flex items-center">
                                      <BsEye className="text-gray-400 text-xl mr-3"/>
                                      <span className="text-gray-400 text-lg">12.4k</span>
                                  </div>
                             </div>
                         </div>
                     </div>
                     <div className="card p-2 bg-white dark:bg-slate-900 shadow border dark:border-slate-700">
                         <div className="card_img">
                             <Image src={img4} alt="img" className="w-full rounded"/>
                         </div>
                         <div className="card_text">
                             <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">To use a remote image, the src property should be a URL string, </h4>
                             <p className="text-sm text-gray-400">Sometimes you may want to access a remote image, but still use the built-in Next.js Image Optimization API. To do this, leave the loader at its</p>
                             <div className="card_social flex items-center mt-4">
                                  <div className="flex items-center mr-7">
                                      <FiMessageSquare className="text-gray-400 text-xl mr-3"/>
                                      <span className="text-gray-400 text-lg">3</span>
                                  </div>
                                  <div className="flex items-center">
                                      <BsEye className="text-gray-400 text-xl mr-3"/>
                                      <span className="text-gray-400 text-lg">12.4k</span>
                                  </div>
                             </div>
                         </div>
                     </div>
                     <div className="card p-2 bg-white dark:bg-slate-900 shadow border dark:border-slate-700">
                         <div className="card_img">
                             <Image src={img5} alt="img" className="w-full rounded"/>
                         </div>
                         <div className="card_text">
                             <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">To use a remote image, the src property should be a URL string, </h4>
                             <p className="text-sm text-gray-400">Sometimes you may want to access a remote image, but still use the built-in Next.js Image Optimization API. To do this, leave the loader at its</p>
                             <div className="card_social flex items-center mt-4">
                                  <div className="flex items-center mr-7">
                                      <FiMessageSquare className="text-gray-400 text-xl mr-3"/>
                                      <span className="text-gray-400 text-lg">3</span>
                                  </div>
                                  <div className="flex items-center">
                                      <BsEye className="text-gray-400 text-xl mr-3"/>
                                      <span className="text-gray-400 text-lg">12.4k</span>
                                  </div>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        </section>
    )
}

export default FeaturedPosts
