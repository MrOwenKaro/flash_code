import Link from 'next/link'
import React from 'react'



const Form = ({type,post,setPost,submitting,handleSubmit
}) => {
  return (
    <section className='w-full max-w-full flex-center flex-col'>
        <h1 className='head_text text-center'>{type}</h1>

        <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
          <lable>
            <span className='font-satoshi font-semibold text-base text-purple-900'>Your Contribution is always appreciated</span>
            <textarea
              value={post.prompt}
              onChange={(e)=> setPost({...post,
              prompt:e.target.value})}
              placeholder='Please Type your Prompt here'
              required
              className='form_textarea'
            >

            </textarea>
          </lable>
          <lable>
            <span className='font-satoshi font-semibold text-base text-purple-900'>Specify Prompt genre/field/subject{` `}
                <span className='font-normal'>(#python,#javascript,#vue.js,#front-end,#cookies)</span>
            </span>
            <input
              value={post.tag}
              onChange={(e)=> setPost({...post,
              tag:e.target.value})}
              placeholder='Please Type the field/genre/subject for reference here'
              required
              className='form_input'
            />

            
          </lable>
          <div className='flex-end mx-3 mb-5 gap-4'>
                <Link href="/" className='outline_btn'>
                    CANCEL
                </Link>
                <button
                  type='submit'
                  disabled={submitting}
                  className='purple_btn'
                >
                  {submitting ?'Sharing Prompt...':'Share'}
                </button>
          </div>
        </form>
    </section>
  )
}

export default Form