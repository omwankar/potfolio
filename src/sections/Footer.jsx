import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pb-3 pt-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p></p>
            <p>Privicy Policy</p>
        </div>
        <div className='flex gap-3'>
            <div className='social-icon'>
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
            </div>
            <div className='social-icon'>
                <img src="/assets/linkedin.svg" alt="github" className='w-1/2 h-1/2 invert-0' />
            </div>
        </div>
    </section>
  )
}

export default Footer