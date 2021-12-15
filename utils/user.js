import { useEffect, useState } from "react";

const getUser = () =>  {
    const [user,setUser] = useState({
        name: "",
        email: "",
        image:""
    })
   

   useEffect(() => {
     let user = JSON.parse(typeof window !== "undefined" ? localStorage.getItem("USER"):"");
       setUser({
           ...user,
           name: user? user.name:"",
           email: user? user.email: "",
           image: user?user.image:""

       })
      
   }, [])

   return user
}

export default getUser;