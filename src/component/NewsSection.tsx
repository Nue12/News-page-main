import React from 'react'
import mainImgDesk from '../../public/images/image-web-3-desktop.jpg'
import mainImgMobile from '../../public/images/image-web-3-mobile.jpg'

export default function NewsSection() {
  return (
    <section className='xl:basis-8/12'>
        <img src={mainImgDesk} alt='mainImg' className='hidden md:block'/>
        <img src={mainImgMobile} alt='mainImg' className='md:hidden' />
        <div className='xl:flex xl:space-x-15 xl:mt-5'>
          <h1 className='xl:basis-6/12 text-darkBlue my-5 mr-14 xl:mb-0'>The Bright Future of Web 3.0?</h1>
          <div className='xl:basis-6/12'>
            <p className='text-text-darkGrayishBlue leading-5 text-lg xl:my-2'>
                We dive into the next evolution of the web that claims 
                to put the power of the platforms back into the hands 
                of the people.But is it really fulfilling its promise?
            </p>
            <button className='bg-text-softRed text-offWhite py-3 px-8 button mt-5 mb-10 xl:mb-0 hover:bg-darkBlue transition-colors ease-in delay-75'>READ MORE</button>
          </div>
        </div>
    </section>
  )
}
