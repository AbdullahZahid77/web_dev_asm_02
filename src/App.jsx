import Navbar from './components/admin/Navbar'
import CalendarCard from './components/admin/Footer'
import LatestProjects from './components/admin/LatestProjects'
import './App.css'
import Footer from './components/admin/Footer'
import MonthlySales from './components/admin/MonthlySales'

function App() {

  return (
    <>
     <Navbar />
     <Footer />
    <LatestProjects />  
    <MonthlySales />
    </>
  )
}

export default App
