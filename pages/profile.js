import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Layout from "../layout/Layout"
import getUser from "../utils/user"

const Profile = () => {
    const router = useRouter()
    const {name,email,image} = getUser()
    useEffect(()=>{
        localStorage.getItem("USER") === null?router.push('/'):""
      },[])

      const handleSignOut = () => {
          localStorage.removeItem("USER");
          router.push('/')
      }
    return (
        <Layout>

            <section className="py-32">
               <div className="container mx-auto">
                   <div className="profilemain card border  text-center mx-auto p-6 dark:border dark:border-slate-600">
                        <div>
                            {/* <Image src={image} alt="img"/> */}
                            {image&&<Image src={image??""} alt="img" height={100} width={100} className="rounded"/>}
                           
                        </div>

                        <div className="usertext mt-5">
                             <h5 className=" text-gray-700 dark:text-gray-200 font-semibold">{name??""}</h5>
                             <p className=" text-gray-700 dark:text-gray-200 ">{email??""}</p>

                             <button className="bg-blue-500 text-white hover:shadow transition-all ease-in-out px-5 py-2 rounded mt-5" onClick={handleSignOut}>Sign Out</button>
                        </div>
                   </div>
               </div>
            </section>
        </Layout>
    )
}

export default Profile
