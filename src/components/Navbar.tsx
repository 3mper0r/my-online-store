import { Link, Router, RouterProvider } from 'react-router-dom'


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
