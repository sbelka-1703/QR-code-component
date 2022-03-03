import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  
  return (
    <div className=' flex h-screen  bg-blue-100 bg-auto m-auto'>
      <div className=' m-auto'>

        {/* main white container  */}
        <div className='w-64 h-96 bg-white rounded-lg drop-shadow-2xl'>
          
          
          {/* QR Image */}
          <div className=" flex justify-center p-4">
          <Image src='/image-qr-code.png' width={225} height={225} className="rounded-lg " />
          </div>
          {/* Bottom text */}
          <div className=' flex flex-col justify-center space-y-3 text-center'>
          <h1 className='font-bold mx-6'>Improve your front-end skills by building projects</h1>
          <p className='text-xs text-gray-500 mx-6 '>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </div>
  )
}
