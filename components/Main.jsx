import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail }  from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>LET&apos;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-gray-700'>Hi, I&apos;m  
                        <span className='text-[#5651e5]'> Daniel
                        </span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>A Front-End Web Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I specialize in building (and ocasionally designing) digital experiences. Currently, I&apos;m focused on building responsive front-end web applications whilst learning back-end technologies.    
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-40 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-40 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-40 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-40 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;