'use client'

import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState , useEffect } from 'react'
import { signIn , signOut , useSession , getProviders} from 'next-auth/react'

const Nav = () => {
    const {data:session} = useSession();
    const [providers, setProviders] = useState(null);
    const [togglemenu, setTogglemenu] = useState(false)

    useEffect(() => {
      const InitiateProviders = async () => {
        const response = await getProviders();

        setProviders(response);
      }

      


      InitiateProviders();
    }, [])
    
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image
                style={{borderRadius:"30px"}}
                width="80"
                height="80"
                src="/assets/images/logo2.png"
                alt='img/img'
            />
            <p  className='ml-3 font-bold text-purple-700 animate-bounce'>FLASHCODE</p>
        </Link>

      
        <div className='sm:flex hidden'>
        {session?.user ? (
            <div className='flex gap-3 md:gap-5'>
                <Tippy content="Click button to create a Prompt of your Own">
                    <Link href="/createPrompts" className='purple_btn'>
                        Prompt Creation
                    </Link>
                </Tippy>

                <Tippy content="Click button to Sign Out of Account">
                    <button onClick={signOut} type='button' className='outline_btn'>
                        Sign Out
                    </button>
                </Tippy>

                <Link href="/profile">
                    <Image
                        src={session?.user.image}
                        width="40"
                        height="40"
                        alt='img/img'
                        style={{borderRadius:"30px"}}
                    />
                </Link>
                
                
            </div>
        ):(
            <>
                {providers && Object.values(providers).map((provider)=> (
                    <button
                        type="button"
                        key={provider.name}
                        onClick={()=> signIn(provider.id)}
                        className='purple_btn'
                    >
                        Sign In
                    </button>
                ))}
            </>
        )}
        </div>

        <div className='sm:hidden flex relative'>
                    {session?.user ? (
                        <div className='flex'>
                             <Image className='hover:cursor-pointer'
                                    src={session?.user.image}
                                    width="40"
                                    height="40"
                                    alt='img/img'
                                    style={{borderRadius:"30px"}}
                                    onClick={()=>setTogglemenu((prev)=> !prev)}
                                />

                                {togglemenu && (
                                    <div className='dropdown'>
                                        <Link
                                            href="/profile"
                                            className='dropdown_link'
                                            onClick={()=>setTogglemenu(false)}
                                        >
                                            My Profile
                                        </Link>
                                        <Link
                                            href="/create-prompt"
                                            className='dropdown_link'
                                            onClick={()=>setTogglemenu(false)}
                                        >
                                            Create New Prompt
                                        </Link>
                                        <button className='mt-5 w-full purple_btn' type='button' onClick={()=>{ setTogglemenu(false), signOut()}}>
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                        </div>
                    ):(
                        <>
                        {providers && Object.values(providers).map((provider)=> (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={()=> signIn(provider.id)}
                                className='purple_btn'
                            >
                                Sign In
                            </button>
                        ))}
                        </>
                    )}
        </div>
    </nav>
  )
}

export default Nav