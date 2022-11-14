import React from 'react'
import CloseTag from '../../public/images/icon-menu-close.svg'

type Naviprops = {
  menu: boolean,
  toggleMenu: ()=> void
}

export default function Navipage({menu, toggleMenu}: Naviprops) {
  return (
    <div className='absolute top-0 right-0 w-3/4 h-screen z-40 overflow-hidden xl:h-auto xl:static xl:w-auto'>
      <div className={`duration-500 absolute top-0 right-0 flex flex-col justify-center items-center w-full h-screen bg-white xl:static xl:h-auto xl:inline-block xl:-translate-x-0 ${menu ? '-translate-x-0' : 'translate-x-full'}`} >
        <img src={CloseTag} alt='closeTag' className='absolute top-3 right-5 xl:hidden' onClick={toggleMenu}/>
        <ul className='self-center xl:flex xl:space-x-12'>
          <li className=''>Home</li>
          <li className=''>New</li>
          <li className=''>Popular</li>
          <li className=''>Trending</li>
          <li className=''>Categories</li>
        </ul>
      </div>
    </div>
  )
}
