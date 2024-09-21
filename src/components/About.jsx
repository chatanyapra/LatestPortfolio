import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import lineCurve from "../assets/images/linecurve1.png"


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current, 
      {
        opacity: 0, 
        scale: 0.8, 
        y: 40     
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,   
        duration: 2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: false,    
          once: true,   
        }
      }
    );
  }, []);

  return (
    <div className='w-full h-auto relative top-0 z-10 about-main'>
        <img src={lineCurve} className='w-full h-full absolute top-0 left-0' alt="" />
        <div className='w-full flex max-md:flex-col-reverse relative px-4'>
            <div ref={aboutRef} className='md:w-2/4 min-h-96 about2-img float-start'>
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
  );
};

export default About;
