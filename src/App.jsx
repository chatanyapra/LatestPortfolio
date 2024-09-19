import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className='h-auto w-full relative app-main overflow-hidden flex flex-col' style={{minHeight:"2500px"}}>
      <div className="absolute top-0 left-0 bottom-0 right-0 glass-effect p-5 mt-20 text-center" style={{zIndex: "2"}}></div>
      <Navbar/>
      <Home/>
      <About/>
    </div>
  )
}

export default App
