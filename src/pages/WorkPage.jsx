import SlideImage from "../components/SlideImage"
import "./WorkPage.css"
const WorkPage = () => {
  return (
    <div className='z-10 h-auto w-full relative app-main dark:bg-white dark:text-black text-white overflow-hidden flex flex-col items-center m-auto pt-32 max-md:pt-12' style={{ maxWidth: "1600px" }}>
      <SlideImage />
    </div>
  )
}

export default WorkPage
