import { useState } from 'react'
import Logo from '../../public/images/logo.svg'
import Menu from '../../public/images/icon-menu.svg'
import Navipage from './Navipage'
import NewsSection from './NewsSection'
import SideNews from './SideNews'
import FooterNews from './FooterNews'
import MenuOpen from '../../public/images/icon-menu.svg'

export default function Newsmainpage() {

  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(preMenu => !preMenu);
  }
  console.log(menu)
  return (
    <main>
        <nav className='flex justify-between mb-10 items-center'>
            <img src={Logo} alt='logo' className=''/>
            <img src={MenuOpen} alt='menuOpen' className={`z-50 xl:hidden ${menu ? 'hidden' : 'block'}`} onClick={()=> toggleMenu()}/>
            <Navipage 
              menu={menu}
              toggleMenu={toggleMenu}
            />
            <div className={`absolute inset-0 z-10 ${menu && 'opacity-60 bg-gray-600'}`}></div>
        </nav>
        <section className='xl:flex xl:space-x-10'>
          <NewsSection />
          <SideNews />
        </section>
        <FooterNews />
    </main>
  )
}
