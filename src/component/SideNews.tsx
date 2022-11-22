import React from 'react'

export default function SideNews() {
  return (
    <aside className='xl:basis-4/12'>
        <div className='bg-darkBlue my-5 px-5 py-8 h-full xl:my-0'>
            <h2 className='text-text-softOrange'>New</h2>
            <div className='divide-y'>
                <div className='mb-6'>
                    <h4 className='text-offWhite hover:text-text-softOrange mb-3 mt-6  cursor-pointer'>Hydrogen Vs Electric Cars</h4>
                    <p>
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
                </div>
                <div className='mb-6'>
                    <h4 className='text-offWhite mb-3 mt-6 hover:text-text-softOrange cursor-pointer'>The Downsides of AI Artistry</h4>
                    <p>
                        What are the possible adverse effects of on-demand AI image generation?
                    </p>
                </div>
                <div>
                    <h4 className='text-offWhite mb-3 mt-6 hover:text-text-softOrange cursor-pointer'>
                        Is VC Funding Drying Up?
                    </h4>
                    <p>
                        Private funding by VC firms is down 50% YOY.We take a look at what that means.
                    </p>
                </div>
            </div>
        </div>
    </aside>
  )
}
