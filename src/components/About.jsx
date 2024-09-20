import React from 'react'
import lineCurve from "../assets/images/linecurve1.png"
import "./About.css"

const About = () => {
  return (
    <div className='w-full h-auto relative top-0 z-10 about-main max-md:mt-52'>
        <img src={lineCurve} className='w-full h-full absolute top-0 left-0' alt="" />
        <div className='w-full flex max-md:flex-col-reverse relative'>
            <div className='md:w-2/4 min-h-96 about2-img max-sm:scale-75 float-start'>
                <div className="w-96 m-auto about-image" style={{ borderRadius: "100px"}}></div>
            </div>
            <div className='md:w-2/4 min-h-96 mt-14 pr-10 max-md:px-4 text-white'>
                <h1 className='transparent-color px-4 py-1 text-2xl rounded-2xl w-fit mb-4 text-gradient'><i>About</i> </h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, iste magnam. Explicabo dignissimos dolores, 
                temporibus laboriosam aperiam eum. Voluptatum consequuntur ducimus, odit quo blanditiis debitis, dolorem illum nulla consectetur atque dolorum eos harum
                 eum! Ea quia quidem dolor rerum distinctio laudantium, minima atque tenetur quaerat ad, id aperiam consequuntur optio vero dolore rem eius magni? Consequatur qui, eius eligendi aperiam doloribus repellat nam 
            </div>
        </div>
    </div>
  )
}

export default About
