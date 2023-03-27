import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}: any) => {

    return (

        <div className="main-layout">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout