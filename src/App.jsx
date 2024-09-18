import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <div className='h-full w-full relative app-main overflow-hidden' style={{minHeight:"1500px"}}>
      <div className="absolute top-0 left-0 bottom-0 right-0 glass-effect p-5 mt-20 text-center" style={{zIndex: "2"}}></div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
