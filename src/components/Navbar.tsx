import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, Router, RouterProvider } from 'react-router-dom'

import Hoodies from '../pages/Hoodies'
import Tanks from '../pages/Tanks'

const Navbar = () => {

    
    

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/hoodies">Hoodies</Link>
                <Link to="/top-tanks">Tanks</Link>
            </nav>             
        </>
    )
}

export default Navbar
