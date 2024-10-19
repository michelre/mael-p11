import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

const Root = () => {
    return  <>
        <div className="container">
            <Header />
            <Outlet/>
        </div>        
        <Footer /> 
        
    </>
}

export default Root;