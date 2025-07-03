import './App.css'
import Landing from './pages/Landing'
import Experience from './pages/Experience'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact' 
import Navbar from './components/Navbar'
import { useState, useEffect, useRef } from 'react'

const App = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const pageIndex = Math.round(scrollTop / windowHeight)
        setCurrentPage(Math.min(pageIndex, 4)) // Cap at 4 since we have 5 pages (0-4)
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToPage = (pageIndex: number) => {
    if (scrollContainerRef.current) {
      const windowHeight = window.innerHeight
      scrollContainerRef.current.scrollTo({
        top: pageIndex * windowHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Navbar currentPage={currentPage} />
      <div className="app" ref={scrollContainerRef}>
        {/* Side Navigation Dots */}
        <div className="fixed right-12 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentPage === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Page Number */}
        <div className="fixed left-12 bottom-12 z-50">
          <span className="text-7xl font-thin text-gray-600/50">
            {String(currentPage + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="page-section">
          <Landing />
        </div>
        <div className="page-section">
          <Experience />
        </div>
        <div className="page-section">
          <About />
        </div>
        <div className="page-section">
          <Projects />
        </div>
        <div className="page-section">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
