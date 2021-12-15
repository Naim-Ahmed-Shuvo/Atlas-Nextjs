import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Login from "../components/Login";
import Nav from "../components/Nav"

import { useStateValue } from "../store/StateProvider";

const Layout = ({children}) => {
    
    return (
        <>
        
        
             <Nav/>
               {children}
             <Footer/>
       
        </>
    )
}

export default Layout

