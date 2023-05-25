'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { useSession } from 'next-auth/react'
import { useRouter ,usePathname } from 'next/navigation'

const PromptCard = ({post,handleTagClick,handleEdit, handleDelete}) => {
  const pathName = usePathname();
  const {data:session} = useSession();
  const [copied, setCopied] = useState("")

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>setCopied(""),1500)
  }
  return (
    <div className='prompt_card'>
        <div className='flex justify-between items-start gap-5'>
          <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
            <Image
              src={post.creator.image}
              alt='img/img'
              width={40}
              height={40}
              className='rounded-full object-contain'
            />
            <div className='flex flex-col'>
                <h3 className='font-satoshi font-semibold text-purple-900'>{post.creator.username}</h3>
                <p className='font-inter text-sm text-purple-500'>{post.creator.email}</p>
            </div>
          </div>

          <div className='copy_btn' onClick={handleCopy}>
            {copied === post.prompt
              ? <AssignmentTurnedInOutlinedIcon style={{color:"purple"}}/>
              : <ContentCopyOutlinedIcon style={{color:"purple"}}/>
              }
      
            
          </div>

        </div>
        <p className='my-4 font-satoshi text-sm'>{post.prompt}</p>
        <p className='font-inter text-purple-500 text-sm cursor-pointer font-bold animate-pulse' onClick={()=>handleTagClick && handleTagClick(post.tag)}><span className='text-black'>Subject/Genre/Field{` `}:{` `}</span>{post.tag}</p>
        {session?.user.id === post.creator._id && (
          pathName === '/profile' && (
            <div>
                <p className='font-inter text-sm mt-3 cursor-pointer purple_btn' onClick={handleEdit}>
                  Edit
                </p>
                <p className='font-inter text-sm mt-3 cursor-pointer outline_btn' onClick={handleDelete}>
                  Delete
                </p>
            </div>
          )
        )}
    </div>
  )
}

export default PromptCard