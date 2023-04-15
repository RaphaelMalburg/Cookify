import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
    <main className='h-full  w-screen bg-bgImage bg-no-repeat bg-origin-border  bg-cover font-sans '>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
