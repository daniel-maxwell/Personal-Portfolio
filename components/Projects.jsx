import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectPlaceholder from '../public/assets/projects/ProjectPlaceholder.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>// Projects
            </p>
            <h2 className='py-4'>What I&apos;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
               <ProjectItem 
                title='Project 1'
                backgroundImg={ProjectPlaceholder} 
                projectUrl='/project1'
                tech='Technology used'
                />
                <ProjectItem 
                title='Project 2'
                backgroundImg={ProjectPlaceholder} 
                projectUrl='/project1'
                tech='Technology used'
                />
                <ProjectItem 
                title='Project 3'
                backgroundImg={ProjectPlaceholder} 
                projectUrl='/project1'
                tech='Technology used'
                />
                <ProjectItem 
                title='Project 4'
                backgroundImg={ProjectPlaceholder} 
                projectUrl='/project1'
                tech='Technology used'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects