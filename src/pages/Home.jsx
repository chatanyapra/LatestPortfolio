import React from 'react'
import BouncingBall from '../components/BouncingBall'
import "./Home.css"
import HomeImage from "../assets/images/frontlook boy.png";
import Iconimage from "../assets/images/img-case.png";
import myImage from "../assets/personsImages/profile-pic.png";
import TypewriterEffect from '../components/Typewriter';
import { FaLinkedinIn, FaGithub, FaInstagram  } from "react-icons/fa6";

const Home = () => {
  const words = [" Developer", " Full-Stack Coder", " Problem Solver", " Creative Thinker"];
  return (
    <div className='w-full h-full relative'>
      <BouncingBall />
      <div className="flex max-md:flex-col justify-evenly w-full min-h-96 p-4 md:mt-14 absolute top-0 z-10">
        <div className="w-2/4 max-md:w-full h-full max-md:mb-14 text-gray-50 md:ml-16">
          <div className='m-auto text-left'>
            <h5 className='text-xl py-2'>Welcome to my world</h5>
            <div className='text-6xl max-md:text-5xl font-bold py-4'>Hi,</div>
            <div className='text-6xl max-md:text-5xl font-bold py-4'> I'm <span className='text-gradient'>Chatanya</span></div>
            <span className='text-4xl font-bold py-4 max-md:text-4xl flex'>
              a
              <span className='pl-3 text-gradient'>
                <TypewriterEffect words={words} typingSpeed={100} deletingSpeed={50} delayBetweenWords={1500} />
              </span>
            </span>
            <p>I create seamless, high-performance websites where every line of code serves a purpose—combining functionality with user-friendly experiences.</p>
          </div>
          <div className='my-14 text-3xl flex'>
            <FaLinkedinIn className='text-white m-1.5'/>
            <span className='btn-gradient w-14 mt-5 mx-2'></span>
            <FaGithub className='text-white m-1.5'/>
            <span className='btn-gradient w-14 mt-5 mx-2'></span>
            <FaInstagram className='text-white m-1.5'/>
          </div>
        </div>
        <div className="w-2/4 max-md:w-full h-full relative">
          <div className="relative">
            <div className="w-96 m-auto home-image" style={{ borderRadius: "100px", height: "500px" }}></div>
            <div className="w-96 bg-gray-400 m-auto absolute top-0 overflow-hidden" style={{ borderRadius: "100px", height: "500px", left: "calc(50% - 192px)" }}>
              <img src={HomeImage} className="w-full h-full" style={{ objectFit: "cover" }} alt="" />
            </div>
            <img src={Iconimage} className="moving-img-2 rounded-full" alt="" />
            <div className="moving-img bg-gray-200 flex py-3 px-4 rounded-2xl">
              <img src={myImage} className="w-14 h-14 rounded-full" style={{ boxShadow: "0 16px 36px rgba(0, 0, 0, .25)" }} alt="" />
              <div className="pl-3 pt-2 flex flex-col">
                <span className="font-bold">Chatanya Pratap</span>
                <small className="-mt-1 font-extralight text-gray-500">chatanya@</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
