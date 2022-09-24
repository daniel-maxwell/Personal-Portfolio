import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div className='w-full lg:h p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppsercase text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>Technologies I&apos;ve worked with</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assets/skills/html.png' width='64px' height='64px' alt='/'/>

                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assets/skills/css.png' width='64px' height='64px' alt='/'/>

                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assets/skills/javascript.png' width='64px' height='64px' alt='/'/>

                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assets/skills/react.png' width='64px' height='64px' alt='/'/>

                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assets/skills/tailwind.png' width='64px' height='64px' alt='/'/>

                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assets/skills/nextjs.png' width='64px' height='64px' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>NextJS</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assets/skills/node.png' width='64px' height='64px' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>NodeJS</h3>
                </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src='/../public/assets/skills/python.png' width='64px' height='64px' alt='/'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Python</h3>
                </div>
                </div>
            </div>
            
            </div>
            </div>
    </div>
  )
}

export default Skills