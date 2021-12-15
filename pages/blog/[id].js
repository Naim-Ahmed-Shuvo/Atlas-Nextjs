
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsEye } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import Layout from '../../layout/Layout'

const BlogDetils = ({ post, user, comments }) => {

    console.log(post, " ", user, " ", comments);
    return (
        <Layout>
            <section className=' mt-32 xs:px-2'>
                <div className='container mx-auto'>
                    <Link href={'/blog'} passHref>
                     <button className='flex justify-center items-center mx-auto py-3 px-3 bg-blue-500 text-slate-50 my-5 rounded'> <BsArrowLeft/> </button>
                    </Link>
                    <div className="card p-2 bg-gray-50 dark:bg-slate-900 shadow border dark:border-slate-700" >

                        <div className="card_text">
                            <h4 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100 capitalize"> {post.title}</h4>
                            <p className="text-sm text-gray-400"> {post.body}</p>
                            <div className="card_social flex items-center mt-4">
                                <div className="flex items-center mr-7">
                                    <FiMessageSquare className="text-gray-400 text-xl mr-3" />
                                    <span className="text-gray-400 text-lg">3</span>
                                </div>
                                <div className="flex items-center">
                                    <BsEye className="text-gray-400 text-xl mr-3" />
                                    <span className="text-gray-400 text-lg">12.4k</span>
                                </div>
                            </div>
                            <div className='border p-5 mt-5 dark:border dark:border-slate-700'>
                                <h3>POsted By</h3>
                                <h4 className='text-sm font-medium'>Name: {user.name}</h4>
                                <span className='text-gray-800 dark:text-gray-200 text-sm block'>Email: {user.email}</span>
                                <span className='text-gray-800 dark:text-gray-200 text-sm block'>Phone: {user.phone}</span>
                            </div>
                            <div className='border p-5 mt-5 dark:border dark:border-slate-700'>
                                <h3>POsted comments</h3>
                                {comments.map(comment => (
                                    <div key={comment.id} className='my-2 border border-slate-300 p-4 dark:border dark:border-slate-700'>
                                        <span className='text-gray-800 dark:text-gray-200 text-sm block'>Comment by: <b>{comment.name}</b></span>
                                        <p className='text-gray-800 dark:text-gray-200 text-sm block my-3'>
                                            comment: 
                                            <code className='overflow-scroll block'>{comment.body}</code>
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>



                    </div>
                    {/* <div>
                    {comments.map(comnt=>(
                        <div key={comnt.id}>
                            <h6 className=" text-lg text-gray-800 font-medium my-3 dark:text-gray-100">commented by: {comnt.name}</h6>
                            <p className="text-sm text-gray-400"> {post.body}</p>
                        </div>
                    ))}
                </div> */}
                </div>
            </section>
        </Layout>
    )
}

export default BlogDetils

export const getServerSideProps = async (ctx) => {
    console.log(ctx.params.id)
    const post_id = ctx.params.id

    const post_res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const post = await post_res.json()

    //user for post
    const userid = post.userId
    const user_res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
    const user = await user_res.json()

    //post comments

    const comments_res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
    const comments = await comments_res.json()

    //
    //   console.log(post)

    return {
        props: { post, user, comments }
    }
}
