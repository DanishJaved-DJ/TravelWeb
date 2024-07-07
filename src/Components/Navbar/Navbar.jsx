import React from 'react'
import { Link , NavLink} from 'react-router-dom';
import LogoImg from '../../assets/logo.png';
import {FaCaretDown} from 'react-icons/fa';

const dropDownLink=[
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
]

const Navbar = () => {
  return (
    <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md'>
      {/* detail */}
      <div className='bg-gradient-to-r from-primary to-secondary text-white '>
        <div className='container py-[2px] sm:block hidden'>
          <div className='flex justify-between'>
            <p>20% off on next booking</p>
            <p>Mobile NO. (+91)1234567890</p>
          </div>
        </div>
      </div>
     
     <div className='container py-3 sm:py-0'>
     <div className='flex justify-between items-center'>
           {/* logo section */}
      
      <div>
       <Link to='/'  onClick={()=> window.scrollTo(0,0)}>
       <img src={LogoImg} alt=""  className='h-16'/> 
       </Link>
      </div>
     
     {/* Destop-navLink-Section */}
     <div className='hidden md:block'>
         <ul className='flex items-center gap-6'>
          <li className='py-4' >
            <NavLink to='/' activeClassName='active' onClick={()=>window.scrollTo(0,0)}>
            Home
            </NavLink>
          </li>

          <li py-4>
            <NavLink activeClassName='active' to='/blogs' onClick={()=>window.scrollTo(0,0)}>
            Blogs
            </NavLink >
          </li>

          <li className='py-4' >
            <NavLink  activeClassName='active' to='/places' onClick={()=>window.scrollTo(0,0)}>
            Best Places
            </NavLink >
          </li>
 
          <li className='py-4' >
            <NavLink  activeClassName='active' to='/about' onClick={()=>window.scrollTo(0,0)}>
            About
            </NavLink >
          </li>

          {/* dropDown Section */}
          <li className='py-4 relative group cursor-pointer'>
            <div className='dropdown  flex items-center'>
              <span>Quick Links</span>
              <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
            </div>

            <div className='absolute -left-9 top-[57px] z-[9999] hidden group-hover:block shadow-md  text-black w-[150px] bg-white p-2 '>
              <ul>
                {
                  dropDownLink.map((data)=>{
                    return(
                      <li key={data.name}>
                      <a
                      className='inline-block w-full rounded-md p-2 hover:bg-primary/20' 
                      href={data.link}>{data.name}</a>
                    </li>
                    )
                  })
                }
              </ul>
            </div>
          </li>


         </ul>
     </div>

      {/* button    */}
      <div>
        <button className='bg-gradient-to-r from-primary to-secondary  hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white  px-3 py-1 rounded-full'>Book Now</button>

        
      </div>
   
     </div>

     </div>
    </div>
  )
}

export default Navbar;