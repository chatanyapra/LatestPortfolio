import React from 'react'
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./Project.css"

const ProjectCard = () => {
    return (
        <div className="card-container my-5 flex max-md:w-[95%] max-md:h-[300px] overflow-hidden">
            <div className="card-project max-md:w-[85%] max-md:h-[300px] ">
                <div className="img-content ">
                    <img className='w-full h-full rounded-xl' src="//picsum.photos/1920/900" alt='...' />
                </div>
                <div className="content-project max-md:w-[85%] w-[80%] overflow-hidden ">
                    <p className="heading max-sm:text-xl text-3xl">Card Hover</p>
                    <p className='max-sm:text-xs'>
                        Lorem ipsum dolor sit amet, consectetur adipii
                        voluptas ten mollitia pariatur odit, ab
                        minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                        necessitatibus dignissimos molestias.
                    </p>
                </div>
            </div>
            <div className='flex m-auto flex-col h-full justify-around text-white'>
                <FaGithub className='text-4xl max-sm:text-3xl cursor-pointer'/>
                <FaArrowUpRightFromSquare className='text-3xl max-sm:text-2xl cursor-pointer'/>
            </div>
        </div>
    )
}

export default ProjectCard
