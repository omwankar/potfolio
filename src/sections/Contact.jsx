import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs  from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:'',
    })


    const handleChange = ({target:{name, value}}) => {
        setForm({...form, [name]:value})
    }

    // /service_l1atn48
    const handleSubmit = async(e) => {
         e.preventDefault()
         setLoading(true)

         try {
           await  emailjs.send(
                'service_l1atn48',
                'template_tr17uig',
                {
                    from_name:form.name,
                    to_name:'Om Wankar',
                    from_email:form.email,
                    to_email:'omgajananwankar123@gmail.com',
                    message:form.message,
                },
                'hWuG9tMVf4NIinvHV')
                setLoading(false)
                alert('Your message has been sent!')
                setForm({
                    name:'',
                    email:'',
                    message:'',
                })
            
         } catch (error) {
            setLoading(false)
            console.log(error)
         }

    }
    return (
        <section className='c-space my-20'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal" className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text md:pt-9'>Contact Me</h3>
                    <p className='text-lg text-white'>Whether you're looking to build a new website improve your existing platform , or bring a unique project to life, I'm hear to help</p>
                    <form  ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input
                            type='text'
                            name='name'
                            
                            onChange={handleChange}
                            placeholder='john doe'
                            className='field-input'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input
                            type='email'
                            name='emai'
                            onChange={handleChange}
                            placeholder='johndoe@gmail.com'
                            className='field-input'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                            <textarea
                            type='message'
                            name='message'
                            required
                            rows={5}
                            onChange={handleChange}
                            placeholder="Hi, I wanna give you a job..."
                           className='field-input'
                            />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact