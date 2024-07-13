import React from 'react'

const Location = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-10'>
<h1 className='text-4xl text-primary font-bold my-3 text-center'>Our Location</h1>
        </div>

        <div className='w-[100%]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5621664431287!2d88.41355227513883!3d26.72643096807171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441fdd1c11c7f%3A0xd05eeffa24dfe48a!2sGlobal%20Spectra%20Institute!5e0!3m2!1sen!2sin!4v1720854361011!5m2!1sen!2sin" className='w-full h-80' loading="lazy" ></iframe>
        </div>
    </div>
  )
}

export default Location