"use client"

import React from 'react'
import { useState } from 'react'
import { socialMedia } from '@/data'
import Button from './ui/Button'
import { IoIosSend } from "react-icons/io"

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <footer
      className='w-full min-h-[350px] relative bg-no-repeat bg-cover bg-center'
      style={{
        backgroundImage: 'url("/footer-grid.svg")',
        height: 'auto'
      }}
      id="contact"
    >
      <div className='container mx-auto px-4 py-20'>
        <div className='relative flex flex-col items-center'>
          <h1 className='heading lg:max-w-[45vw] mb-8'>
            Let's Get in Touch
          </h1>

          <form onSubmit={handleSubmit} className='w-full max-w-lg'>
            <div className='mb-4'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 rounded-lg backdrop-blur-lg bg-black-200 bg-opacity-75 border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='mb-4'>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 rounded-lg backdrop-blur-lg bg-black-200 bg-opacity-75 border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='mb-4'>
              <textarea
                name='message'
                placeholder='Your Message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className='w-full px-4 py-2 rounded-lg backdrop-blur-lg bg-black-200 bg-opacity-75 border border-black-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <Button
              type='submit'
              disabled={status === 'sending'}
              text={status === 'sending' ? 'Sending...' : 'Send Message'}
              icon={<IoIosSend size={20} />}
              position="right"
              className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={(e) => !status === 'sending' && handleSubmit(e)}
            />

            {status === 'success' && (
              <p className='mt-2 text-green-500'>Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className='mt-2 text-red-500'>Failed to send message. Please try again.</p>
            )}
          </form>
        </div>

        <div className='flex flex-col md:flex-row mt-16 justify-between items-center'>
          <p className='md:text-base text-sm md:font-normal py-5 font-light'>
            Copyright © 2024 Arsalan
          </p>
          <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((profile) => (
              <a
                key={profile.id}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer" 
              >
                <div key={profile.id} className='w-14 h-14 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-full border border-black-300'>
                  <img src={profile.img} className='w-8' alt={profile.id} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer