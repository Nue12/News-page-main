import React from 'react'
import CloseTag from '../../public/images/icon-menu-close.svg'

type Naviprops = {
  menu: boolean,
  toggleMenu: ()=> void
}

export default function Navipage({menu, toggleMenu}: Naviprops) {
  return (
    <div className='absolute top-0 right-0 w-3/4 h-screen z-40 overflow-hidden xl:h-auto xl:static xl:w-auto'>
      <div className={`duration-500 absolute top-0 right-0 flex flex-col w-full h-screen bg-white xl:static xl:h-auto xl:inline-block xl:-translate-x-0 ${menu ? '-translate-x-0' : 'translate-x-full'}`} >
        <img src={CloseTag} alt='closeTag' className='absolute top-3 right-5 xl:hidden cursor-pointer' onClick={toggleMenu}/>
        <ul className='xl:flex xl:space-x-12 xl:mt-0 xl:ml-0 xl:text-text-darkGrayishBlue mt-24 ml-7 text-lg'>
          <li className='py-2 cursor-pointer transition-colors ease-in hover:text-text-softRed'>Home</li>
          <li className='py-2 cursor-pointer transition-colors ease-in hover:text-text-softRed'>New</li>
          <li className='py-2 cursor-pointer transition-colors ease-in hover:text-text-softRed'>Popular</li>
          <li className='py-2 cursor-pointer transition-colors ease-in hover:text-text-softRed'>Trending</li>
          <li className='py-2 cursor-pointer transition-colors ease-in hover:text-text-softRed'>Categories</li>
        </ul>
      </div>
    </div>
  )
}
