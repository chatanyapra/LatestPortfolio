import { useEffect } from 'react';
import backgroundLine from "../assets/images/background-line.png";
import BlogCard from "./BlogCard";
import { gsap } from "gsap";

const BlogSection = () => {
    useEffect(() => {
        const cards = gsap.utils.toArray(".blogCard");
    
        const animations = cards.map((card, index) =>
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.8,
              x: index % 2 === 0 ? -200 : 200,
              y: 40,
            },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 60%",
                scrub: false,
                once: true,
              },
            }
          )
        );
    
        return () => {
          animations.forEach((animation) => {
            if (animation.scrollTrigger) {
              animation.scrollTrigger.kill();
            }
            animation.kill(); 
          });
        };
      }, []);
 
    return (
        <div className='w-full mx-auto flex flex-col relative blogsection-bg-design'>
            <img src={backgroundLine} className='w-full h-full absolute -left-2 -right-14' alt="" />
            <div className='transparent-color px-4 py-1 text-4xl rounded-2xl w-fit mb-4 text-gradient h-fit flex ml-6'>
                <div className="rounded-full w-7 h-7 flex justify-center items-center mr-2 mt-1">
                    <div className="bg-gradient-radial w-5 h-5 m-auto rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out"></div>
                </div>
                <i>Blogs</i>
            </div>
            <div className='flex w-full justify-around max-lg:flex-col md:flex-wrap max-md:px-1'>
                <div className='blogCard '>
                    <BlogCard />
                </div>
                <div className='blogCard '>
                    <BlogCard />
                </div>
                {/* <div className='blogCard '>
                    <BlogCard />
                </div>
                <div className='blogCard '>
                    <BlogCard />
                </div> */}
            </div>
            <div className='text-2xl text-white text-right mr-20 cursor-pointer hover:text-blue-700 z-10'>
                See More...
            </div>
        </div>
    )
}

export default BlogSection
