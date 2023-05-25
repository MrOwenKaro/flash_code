import React from 'react'
import '../styles/global.css'
import Provider from '@/components/Provider'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
    title: "FlashCode",
    description: 'Add a little more speed to your coding skills'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>

            </div>
            <main className='app'>
                <Nav/>
                {children}
                <Footer/>
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout