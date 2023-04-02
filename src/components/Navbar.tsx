import { Link } from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import {RiUser3Line} from 'react-icons/ri'
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

    return (
        <>
            <nav className='flex flex-row-'>
            <GiHamburgerMenu/>
            <span className='logo'>BeastWear</span>
            <FiSearch/>
            <RiUser3Line />
            <AiOutlineHeart/>
            <AiOutlineShoppingCart/>
            </nav>             
        </>
    )
}

export default Navbar
