import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useTheme} from 'next-themes'
import Hero from '../components/Hero'
import FeaturedPosts from '../components/FeaturedPosts'
import PopularPosts from '../components/PopularPosts'
import RecentPosts from '../components/RecentPosts'
import NewsLetter from '../components/NewsLetter'
import { useStateValue } from '../store/StateProvider'
import Router from 'next/router'
import { useEffect } from 'react'
import Login from '../components/Login'

export default function Home() {
 
  return (
    <>
      <Login/>
    </>
  )
}
