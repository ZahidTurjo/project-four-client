import { Link } from 'react-router-dom'

import logoImg from '../../../assets/favicon.png'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
      
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
             <div className='flex justify-center items-center'>
             <img
                className='hidden h-14 w-14 md:block'
                src={logoImg}
                alt='logo'
            
              />
              <div>
                <h2 className='text-3xl text-red-500 italic'>StayVisTa</h2>
             </div>
             </div>
             
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
       
      </div>
    </div>
  )
}

export default Navbar