import React from 'react'
import RRPImg from '../../public/images/image-retro-pcs.jpg'
import Toplaptop from '../../public/images/image-top-laptops.jpg'
import GoG from '../../public/images/image-gaming-growth.jpg'

export default function FooterNews() {
  return (
    <footer className='mt-20 xl:flex xl:mt-10   '>
        <div className='flex basis-4/12 my-5'>
            <img src={RRPImg} alt='footerNewsImg' className='basis-2/12 h-40'/>
            <div className='basis-10/12 ml-4'>
                <h2>01</h2>
                <h4 className='my-3 text-darkBlue hover:text-text-softRed cursor-pointer'>Reviving Retro PCs</h4>
                <p className='text-text-darkGrayishBlue'>
                    What happens when old PCs are given modern upgrades?
                </p>
            </div>
        </div>
        <div className='flex basis-4/12 my-5'>
            <img src={Toplaptop} alt='footerNewsImg' className='basis-2/12 h-40'/>
            <div className='basis-10/12 ml-4'>
                <h2>02</h2>
                <h4 className='my-3 text-darkBlue hover:text-text-softRed cursor-pointer'>Top 10 Laptops of 2022</h4>
                <p className='text-text-darkGrayishBlue'>
                    Our best picks for various needs and budgets.
                </p>
            </div>
        </div>
        <div className='flex basis-4/12 my-5'>
            <img src={GoG} alt='footerNewsImg' className='basis-2/12 h-40'/>
            <div className='basis-10/12 ml-4'>
                <h2>03</h2>
                <h4 className='my-3 text-darkBlue hover:text-text-softRed cursor-pointer'>The Growth of Gaming</h4>
                <p className='text-text-darkGrayishBlue'>
                    How the pandemic has sparked fresh opportunities.
                </p>
            </div>
        </div>
    </footer>
  )
}
