import Image from "next/image"
import { BsEye } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import img1 from '../public/blog/250x300-1 (1).jpg';
import img2 from '../public/blog/250x300-1 (2).jpg';
import img3 from '../public/blog/250x300-1 (3).jpg';
import img4 from '../public/blog/250x300-1 (4).jpg';
import img5 from '../public/blog/250x300-1 (5).jpg';

const RecentPosts = () => {
    return (
        <section className="recentposts py-10 xs:px-2">
            <div className="container mx-auto">
                <div className="title my-5 flex justify-between">
                     <h4 className="text-lg text-gray-800 font-medium dark:text-gray-100">Recent posts</h4>
                 </div>
                 <div className="cards grid lg:grid-cols-2 xs:grid-cols-1 gap-10">
                       <div className="card flex xs:flex-col sm:flex-row  border dark:border-slate-600 p-5">
                             <div className="card-img  xs:flex  xs:justify-center">
                                <Image src={img1} alt="img" height={200} width={200}/>
                             </div>
                             <div className="card_content ml-7">
                                 <h2 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">Lorem Ipsum is not simply random text. It has roots in a piece of classical</h2>
                                 <p className="text-sm text-gray-400">, from a Lorem Ipsum passage, and going through the cites of the</p>
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
                       <div className="card flex xs:flex-col sm:flex-row  border dark:border-slate-600 p-5">
                             <div className="card-img">
                                <Image src={img2} alt="img" height={200} width={200}/>
                             </div>
                             <div className="card_content ml-7">
                                 <h2 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">Lorem Ipsum is not simply random text. It has roots in a piece of classical</h2>
                                 <p className="text-sm text-gray-400">, from a Lorem Ipsum passage, and going through the cites of the</p>
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
                       <div className="card flex xs:flex-col sm:flex-row  border dark:border-slate-600 p-5">
                             <div className="card-img">
                                <Image src={img3} alt="img" height={200} width={200}/>
                             </div>
                             <div className="card_content ml-7">
                                 <h2 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">Lorem Ipsum is not simply random text. It has roots in a piece of classical</h2>
                                 <p className="text-sm text-gray-400">, from a Lorem Ipsum passage, and going through the cites of the</p>
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
                       <div className="card flex xs:flex-col sm:flex-row  border dark:border-slate-600 p-5">
                             <div className="card-img">
                                <Image src={img4} alt="img" height={200} width={200}/>
                             </div>
                             <div className="card_content ml-7">
                                 <h2 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">Lorem Ipsum is not simply random text. It has roots in a piece of classical</h2>
                                 <p className="text-sm text-gray-400">, from a Lorem Ipsum passage, and going through the cites of the</p>
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

                 <div className="pagination mt-10">
                      <div className="pages flex items-center max-w-lg mx-auto justify-center">
                          <span className="px-4 py-1 bg-blue-500 rounded-lg text-gray-100 cursor-pointer">1</span>
                          <span className="mx-4 text-gray-500 text-sm cursor-pointer">1</span>
                          <span className="mx-4 text-gray-500 text-sm cursor-pointer">1</span>
                          <span className="mx-4 text-gray-500 text-sm cursor-pointer">1</span>
                          <span className="mx-4 text-gray-500 text-sm cursor-pointer">...</span>
                          <span className="mx-4 text-gray-500 text-sm cursor-pointer">8</span>
                          <span className="mx-4 text-gray-500 text-sm cursor-pointer">
                              <AiOutlineRight/>
                          </span>
                      </div>
                 </div>
            </div>
        </section>
    )
}

export default RecentPosts
