import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='bordeer-none outline-none h-0.5 bg-primary w-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='bordeer-none outline-none h-0.5 bg-primary w-auto hidden'/>
            </NavLink >
            <NavLink to="/about">
                <li className='py-1'>ABOUT</li>
                <hr className='bordeer-none outline-none h-0.5 bg-primary w-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='bordeer-none outline-none h-0.5 bg-primary w-auto hidden'/>
            </NavLink>
        </ul>
        <div>
            <button>Create account</button>
        </div>
    </div>
  )
}

export default Navbar