import Link from 'next/link'
import React from 'react'

import Layout from '../layout/Layout'

const NotFound = () => {
    return (
        <Layout>


        <div className='container mx-auto  py-8 text-center my-32'>
            <p>Sorry! This Page is not Available</p>

            <Link href={'/'} passHref>
               <a className='bg-blue-500 text-white px-5 py-2 inline-block mt-5'>Please Back</a>
            </Link>
        </div>
        </Layout>
    )
}

export default NotFound
