
import {auth} from '../utils/firebase';
import firebase from "firebase"
import { useEffect, useState } from "react";
import { useStateValue } from "../store/StateProvider";
import { useRouter } from 'next/router';
const Login = () => {
  const  [{},dispatch] = useStateValue()
  const router = useRouter();

  useEffect(()=>{
    localStorage.getItem("USER") !== null?router.push('/home'):""
  },[])
  

    const handleClick = () => {
        var provider = new firebase.auth.GoogleAuthProvider()

        auth.signInWithPopup(provider).then(res=>{
            // console.log(res.user.displayName)
            // console.log(res.user.email)
            // console.log(res.user.photoURL)
            

            localStorage.setItem("USER",JSON.stringify({
                name: res.user.displayName,
                email: res.user.email,
                image: res.user.photoURL
            }));
            
            dispatch({
                type: "SET_LOGIN"
            }) 
            
            router.push('/home') 
            console.log("user: ",JSON.parse(localStorage.getItem("USER")));
        }).catch(err=>{
            console.log(err)
        })
    

    //    alert();
    }

   


    return (
        <div className=" h-screen w-full bg-slate-200 flex items-center justify-center">
            <div className="bg-gray-100  w-80 h-80 mx-auto flex items-center justify-center">
                <button className="bg-blue-500 text-white p-4 rounded" onClick={()=>handleClick()}>Sign In By Google</button>
            </div>
        </div>
    )
}

export default Login

