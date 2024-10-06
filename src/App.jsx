import Navbar from './components/admin/Navbar'
import CalendarCard from './components/admin/Footer'
import LatestProjects from './components/admin/LatestProjects'
import './App.css'
import Footer from './components/admin/Footer'
import MonthlySales from './components/admin/MonthlySales'
import Visitors from './components/admin/Visitors'
import WeatherCard from './components/argon/WeatherCard'

function App() {

  return (
    <>
     <Navbar />
     <Footer />
    <LatestProjects />  
    <MonthlySales />
    <Visitors />
    <WeatherCard />
    </>
  )
}

export default App
