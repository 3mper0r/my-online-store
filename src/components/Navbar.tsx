import { Link } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import {RiUser3Line} from 'react-icons/ri'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

    return (
        <>
            <nav className='grid grid-flow-col items-center bg-black p-2'>
                <div className='flex items-center'>
                    <GiHamburgerMenu className='text-white'/>
                    <h1 className='logo text-white ml-2'><span className='logo text-red-500'>Beast</span> Wear</h1>
                </div>
                <div className='grid grid-flow-col justify-end icons'>
                    <FiSearch className='mr-4 text-white'/>
                    <RiUser3Line className='mr-2 text-white'/>
                    <AiOutlineHeart className='mr-2 text-white'/>
                    <AiOutlineShoppingCart className='mr-2 text-white'/>    
                </div>
            </nav>             
        </>
    )
}

export default Navbar
