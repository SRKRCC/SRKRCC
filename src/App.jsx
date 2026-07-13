import { Route, Routes, useLocation } from 'react-router-dom'
import EventsPage from './Pages/Events'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './Pages/Home'
import Hackoverflow from './Events/HackoverFlow/Hackoverflow'
import Alumni from './Pages/Alumni'
import IconCoderz from './Events/IconCoderz/Iconcoderz'
import Hridayam from './Events/Hridayam/Hridayam'
import Codequest from './Events/Codequest'
import Edgecase from './Events/Edgecase'
import Affiliates from './Pages/Affiliates'
import Registrations from './Pages/JoinUs'
import Contact from './Pages/Contact'
// import TeamPage from './Pages/TeamPage'
// import Admin from './Admin/Admin'
import FlashNews from './Components/FlashNews'
import Popup from './Components/PopUp'


const App = () => {
  const location = useLocation()
  // const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div>
      {/* {isAdminRoute ? (
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      ) : ( */}
        <>
          <Navbar />
          {/* <FlashNews /> */}
          {/* <Popup/> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/hackoverflow" element={<Hackoverflow />} />
            <Route path="/events/iconcoderz" element={<IconCoderz />} />
            <Route path="/events/hridayam" element={<Hridayam />} />
            <Route path="/events/codequest" element={<Codequest />} />
            <Route path="/events/edgecase" element={<Edgecase />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/Joinus" element={<Registrations />} />
          </Routes>
          <Footer />
        </>
      {/* )} */}
    </div>
  )
}

export default App
