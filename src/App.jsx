import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Home from './pages/Home'
function App() {

  return (
    <div className='h-auto w-full relative app-main dark:bg-white overflow-hidden flex flex-col items-center'>
      <div className='w-full ' style={{maxWidth: "1500px"}}>
        <div className="absolute top-0 left-0 bottom-0 right-0 glass-effect p-5 mt-20 text-center" style={{zIndex: "2"}}></div>
        <Navbar/>
        <div className='relative flex flex-col justify-between'>
          <Home/>
          <div className='z-10'>
            <About/>
            <Project/>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
