import Navbar from './components/admin/Navbar'
import CalendarCard from './components/admin/Footer'
import LatestProjects from './components/admin/LatestProjects'
import './App.css'
import Footer from './components/admin/Footer'
import MonthlySales from './components/admin/MonthlySales'
import Visitors from './components/admin/Visitors'
import WeatherCard from './components/argon/WeatherCard'
import SocialPost from './components/argon/SocialPost'
import PostingRectangular from './components/argon/PostingRectangular'
import Navbar2 from './components/argon/Navbar2'
import ListingCard from './components/argon/ListingCard'
function App() {

  return (
    <>
     <Navbar />
     <Footer />
    <LatestProjects />  
    <MonthlySales />
    <Visitors />
    <WeatherCard />
    <SocialPost />
    <PostingRectangular />
    <Navbar2 />
    <ListingCard />
    </>
  )
}

export default App
