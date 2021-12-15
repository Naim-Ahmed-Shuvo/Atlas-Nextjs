import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import FeaturedPosts from '../components/FeaturedPosts'
import Hero from '../components/Hero'
import NewsLetter from '../components/NewsLetter'
import PopularPosts from '../components/PopularPosts'
import RecentPosts from '../components/RecentPosts'
import Layout from '../layout/Layout'
import MenuDrawer from '../utils/MenuDrawer'

const Home = () => {
    const router = useRouter()
    useEffect(()=>{
        localStorage.getItem("USER") === null?router.push('/'):""
      },[])
    return (
        <>
            <Layout>
                <Hero/>
                <FeaturedPosts/>
                <PopularPosts/>
                <RecentPosts/>
                <NewsLetter/>
               
            </Layout>
        </>
    )
}

export default Home
