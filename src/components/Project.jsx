import React from 'react'
import ProjectCard from './ProjectCard'
import backgroundLine from "../assets/images/background-line.png"

const Project = () => {
  return (
    <div className='w-full my-10 mx-auto flex flex-col relative'>
        <img src={backgroundLine} className='w-full h-fit absolute -left-2 top-1/3 min-h-96' alt="" />
        <h1 className='transparent-color px-4 py-1 text-4xl rounded-2xl w-fit mb-4 text-gradient h-fit'><i>Projects</i> </h1>
        <div className='flex w-full justify-around flex-wrap'>
            <ProjectCard/>
            <ProjectCard/>
        </div>
        <div className='flex w-full justify-around flex-wrap'>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>
  )
}

export default Project
