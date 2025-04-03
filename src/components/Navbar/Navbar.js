import { Link } from 'react-router';
import './Navbar.css';
import { LuBriefcase, LuSearch, LuLifeBuoy, LuBadgePercent, LuUser, LuShoppingBag } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='w-full shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),_0px_10px_10px_-5px_rgba(0,0,0,0.04)]'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center py-4'>
                <Link to='/'>
                    <div className='w-[50px] cursor-pointer hover:scale-110 transition'>
                        <img className='rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbbFkbxmm68be0_zk2B_wrYa9YmWXeoo7kA&s' />
                    </div>
                </Link>
                <nav className='w-2/3'>
                    <ul className='w-full flex justify-evenly items-center'>
                        <li className='nav-item'>
                            <LuBriefcase className='text-xl' />
                            <span>Swiggy Corporate</span>
                        </li>
                        <li className='nav-item'>
                            <LuSearch className='text-xl' />
                            <span>Search</span>
                        </li>
                        <li className='nav-item'>
                            <LuBadgePercent className='text-xl' />
                            <span>Offer</span>
                        </li>
                        <Link to='/support'>
                            <li className='nav-item'>
                                <LuLifeBuoy className='text-xl' />
                                <span>Help</span>
                            </li>
                        </Link>

                        <li className='nav-item'>
                            <LuUser className='text-xl' />
                            <span>Sign In</span>
                        </li>
                        <li className='nav-item'>
                            <LuShoppingBag className='text-xl' />
                            <span>Cart</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navbar;