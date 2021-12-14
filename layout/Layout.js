import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Login from "../pages/login";
import { useStateValue } from "../store/StateProvider";

const Layout = ({children}) => {
    const [{isAuthenticated}, dispatch] = useStateValue();
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

