import { useEffect } from "react";
import Footer from "../components/Footer"
import Login from "../components/Login";
import Nav from "../components/Nav"

import { useStateValue } from "../store/StateProvider";

const Layout = ({children}) => {
    const [{isAuthenticated}, dispatch] = useStateValue();

    useEffect(()=>{

    })
    return (
        <>
        {!isAuthenticated?<Login/>:<>
        
             <Nav/>
               {children}
             <Footer/>
        </>}
        </>
    )
}

export default Layout

