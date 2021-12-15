import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsEye } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import Layout from '../../layout/Layout'
import img2 from "../../public/blog/blog2.jpg"
import img3 from "../../public/blog/blog3.jpg"
import img4 from "../../public/blog/blog4.jpg"
import img5 from "../../public/blog/blog5.jpg"
import img6 from "../../public/blog/blog6.jpg"
import img7 from "../../public/blog/blog7.jpg"
import img8 from "../../public/blog/blog8.jpg"
import img9 from "../../public/blog/blog9.jpg";
import img10 from "../../public/blog/pexels-abo-adam-3876066.jpg";

const Blog = ({posts}) => {

    console.log(posts)
    return (
        <Layout>

        <section className="pupularposts py-10 mt-14">
            <div className="container mx-auto xs:px-2">
                <div className="title my-5 flex justify-between">
                     <h4 className="text-lg text-gray-800 font-medium dark:text-gray-100">Blogs</h4>
                     <div className="flex items-center">
                         <button>See All</button>
                     </div>
                 </div>
                 <div className="cards grid sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 gap-20">

                     {posts?posts.map((post)=>(
                         <Link key={post.id} href={`/blog/${post.id}`} passHref className="cursor-pointer">
                                
                            <div className="card p-2 bg-gray-50 dark:bg-slate-900 shadow border dark:border-slate-700" >
                                
                                <div className="card_text">
                                    <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">{post.title}</h4>
                                    <p className="text-sm text-gray-400">{post.body}</p>
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
                         </Link>

                     )):<p>Loading....</p>}
                     
                     
                     
                   
                 </div>
            </div>
        </section>
        </Layout>
    )
}

export default Blog

export const  getStaticProps = async()=> {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await res.json();

    // console.log(posts)
    return {
      props: {posts}, // will be passed to the page component as props
    }
  }
  