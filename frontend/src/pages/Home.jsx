import { useEffect, useRef } from "react";
import BouncingBall from '../components/BouncingBall'
import "./Home.css"
import HomeImage from "../assets/images/frontlook boy.png";
import Iconimage from "../assets/images/img-case.png";
import myImage from "../assets/personsImages/profile-pic.png";
import TypewriterEffect from '../components/Typewriter';
import About from '../components/About'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'
import Project from '../components/Project'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";
import { gsap } from "gsap";
import Skills from "../components/Skills";
import Working from "../components/Working";

const Home = () => {
  const homeimage = useRef(null);
  
  useEffect(() => {
    // Initialize GSAP animations
    const animation1 = gsap.fromTo(
      homeimage.current,
      { x: "-100vw" },
      {
        x: "0vw",
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          gsap.to(homeimage.current, {
            x: "-20px",
            duration: 0.2,
            ease: "power2.out",
            yoyo: true,
          });
        }
      }
    );

    const animation2 = gsap.fromTo(
      ".imageUser",
      { scale: 0 },
      { scale: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
    );

    // Cleanup function to stop the animations when the component unmounts
    return () => {
      animation1.kill(); // Stop the first animation
      animation2.kill(); // Stop the second animation
    };
  }, []);

  return (
    <div className='relative flex flex-col justify-between'>
      <div className='w-full h-full relative mt-10 md:mt-24 pt-10'>
        <BouncingBall />
        <div className="flex max-md:flex-col justify-evenly w-full min-h-96 p-4 md:mt-14 absolute top-0 z-10">
          <div className="w-2/4 max-md:w-full h-full text-gray-50 dark:text-black md:ml-16">
            <div className='m-auto text-left'>
              <h5 className='text-xl py-2'>Welcome to my world</h5>
              <div className='text-6xl max-md:text-5xl font-bold py-4'>Hi,</div>
              <div className='text-6xl max-md:text-5xl font-bold py-4'> I&apos;m <span className='text-gradient'>Chatanya</span></div>
              <span className='text-3xl font-bold py-4 max-md:text-4xl flex'>
                a
                <span className='sm:pl-3'>
                  <TypewriterEffect />
                </span>
              </span>
              <p>I create seamless, high-performance websites where every line of code serves a purpose—combining functionality with user-friendly experiences.</p>
            </div>
            <div ref={homeimage} className='my-14 text-3xl flex max-sm:justify-center text-white dark:text-black'>
              <FaLinkedinIn className='m-1.5' />
              <span className='btn-gradient w-14 mt-5 mx-2'></span>
              <FaGithub className='m-1.5' />
              <span className='btn-gradient w-14 mt-5 mx-2'></span>
              <FaInstagram className='m-1.5' />
            </div>
          </div>
          <div className="w-2/4 max-md:w-full h-full relative">
            <div className="w-96 m-auto home-image max-sm:scale-75 max-sm:w-[370px] max-sm:-left-9" style={{ borderRadius: "100px", height: "500px" }}></div>
            <div className="w-96 bg-gray-400 m-auto absolute top-0 overflow-hidden max-sm:scale-75" style={{ borderRadius: "100px", height: "500px", left: "calc(50% - 192px)" }}>
              <img src={HomeImage} className="w-full h-full" style={{ objectFit: "cover" }} alt="" />
            </div>
            <img src={Iconimage} className="imageUser moving-img-2 rounded-full" alt="" />
            <div className="imageUser moving-img bg-gray-200 flex py-3 px-4 rounded-2xl h-20">
              <img src={myImage} className="w-14 h-14 rounded-full" style={{ boxShadow: "0 16px 36px rgba(0, 0, 0, .25)" }} alt="" />
              <div className="block">
                <div className="pl-3 pt-2 flex flex-col">
                  <span className="font-bold">Chatanya Pratap</span>
                  <small className="-mt-1 font-extralight text-gray-500">@chatanya</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='z-10'>
        <About />
        <Project />
        <Skills />
        <Working />
        <BlogSection />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
