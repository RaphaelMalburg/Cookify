import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"
function App() {


  return (
         <SkeletonTheme
      baseColor="#939393"
      highlightColor="#eeeeee"
      ><main className='h-full  w-screen  font-sans  bg-gradient-to-r  from-green30 via-green50 to-green20'>

        <div className='sticky '>
          <Navbar  />
        </div>
        <Outlet />
        <Footer />

    </main>
    </SkeletonTheme>
  )
}

export default App
