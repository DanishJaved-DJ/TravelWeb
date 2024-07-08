import React from 'react'
import {FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navbarLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Best Places",
      link: "/best-places",
    },
  ];
const ResponsiveMenu = ({showMenu,setShowMenu}) => {
  return (
    <div
    className={`${
      showMenu ? "left-0" : "-left-[100%]"
    } fixed bottom-0 top-0 z-20 flex h-screen w-[65%] flex-col bg-white dark:bg-white dark:text-black px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md shadow-black`}
  >
    <div className='Navbar_card'></div>
           {/* top section */}
          <div >
          <div className='flex items-center justify-start gap-4 bg-white shadow-md shadow-black h-20' >
            <FaUserCircle size={50} className='ml-2'/>
            <div>
                <h1>Hello User</h1>
                <h1 className='text-sm text-slate-500'>Premiun user</h1>
            </div>
           </div>
          </div>

          {/* NavLink Section */}
          <div className='text-black mt-12'>
            <ul className='space-y-4 text-xl'>
            {
                navbarLinks.map(({name,link})=>(
                    <li>
                        <Link to={link}
                        onClick={()=>setShowMenu(false)}
                        className='mb-5 inline-block'
                        >{name}</Link>
                    </li>
                ))
            }
            </ul>
          </div>


   </div>
  )
}

export default ResponsiveMenu;