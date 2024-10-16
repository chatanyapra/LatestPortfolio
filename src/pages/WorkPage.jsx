import SlideImage from "../components/SlideImage"
import "./WorkPage.css"
const WorkPage = () => {
  return (
    <div className='z-10 h-auto w-full relative dark:text-black text-white overflow-hidden flex flex-col md:px-12 m-auto pt-32 max-md:pt-12 pb-12'>
      <div className="w-[100%] min-h-96 transparent-color rounded-[50px] flex max-md:flex-col justify-between p-10 ">
        <div>
          <h1 className="text-4xl pb-10">Project Name 1</h1>
          <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam perferendis accusamus temporibus animi pariatur, est facere, eaque, molestias ad aut magni vero consequuntur repudiandae minima quaerat? Optio laudantium provident dolorum?</p>
          <p className="text-gray-400 pt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam perferendis accusamus temporibus animi pariatur, est facere, eaque, molestias ad aut magni vero consequuntur repudiandae minima quaerat? Optio laudantium provident dolorum?</p>
        </div>
        <SlideImage />
      </div>
      <div className='mt-12 z-10 transparent-color px-4 py-1 text-4xl rounded-2xl w-fit mb-4 text-gradient h-fit flex ml-3'>
        <div className="rounded-full w-7 h-7 flex justify-center items-center mr-2 mt-1">
          <div className="bg-gradient-radial w-5 h-5 m-auto rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out"></div>
        </div>
        <i> Tech Stack</i>
      </div>
      <div className="w-[100%] transparent-color rounded-[50px] flex max-md:flex-col justify-between p-10">
        
      </div>
    </div>
  )
}

export default WorkPage
