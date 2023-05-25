import Feed from '@/components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Add a little speed to your coding skills
            <br className='max-md:hidden'/>
            <span className='purple_gradient text-center'>By Asking the right Prompts at the right time.</span>

        </h1>
        <p className='desc text-center'>FlashCode is a tool for modern developers to have quick access to the most likely to be used prompts . Reducing the learning curve when working with modern AI assistants.</p>
        <Feed/>
    </section>
  )
}

export default Home