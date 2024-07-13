"use client"

import React from 'react'
import Image from 'next/image'
import aboutus from '../../../public/image/aboutusimage.webp'
import { Button } from './button'
import { MdOutlineReadMore } from 'react-icons/md'
import { useRouter } from 'next/navigation'

const AboutUniversity = () => {

  const router = useRouter()

  const handleRoute = () => {
    router.push('/about')
  }

  return (
    <div className='px-6 md:px-12 lg:px-36 py-10 md:py-16 lg:py-20'>
      <div className='flex flex-col lg:flex-row justify-center items-center shadow-2xl p-6 md:p-10'>
        <div className='w-full lg:w-1/2'>
          <Image src={aboutus} alt='aboutus' layout='responsive' width={3000} height={2000} className='rounded-md' />
        </div>

        <div className='mt-8 lg:mt-0 lg:ml-12 w-full lg:w-1/2'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-5'>ABOUT US</h1>
          <p className='text-sm md:text-base lg:text-md leading-relaxed'>
            It gives us immense pleasure to introduce you to Global Spectra Institute Of Hospitality Management (GSIHM). It is located in a small hamlet, Pradhan Nagar, in Siliguri the foothills of Darjeeling.
            <br /><br />
            We are an ISO 9001:2015 Certified Institute AFFILIATED with COUNCIL FOR VOCATIONAL EDUCATION & SKILL DEVELOPMENT licensed under Ministry of Corporate Affairs. GSIHM was formed in the Year 2017 by Industry Professionals coming from the Operations and HR background of Hospitality and Aviation. The Organisation has able and experienced faculties with good Academic Background and Professional Experience in the fields of Hotel, Aviation, Cruise and Travel Tourism.
          </p>

          <Button className='mt-5' onClick={handleRoute}  size={'lg'}>
            Read more 
            <div className='flex flex-col items-center justify-center h-8 w-8'>
              <MdOutlineReadMore size={20} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AboutUniversity;
