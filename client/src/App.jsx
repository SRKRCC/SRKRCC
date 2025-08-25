
// import { Route, Routes } from 'react-router-dom'
// import EventsPage from './Pages/Events/EventsPage'
// import Footer from './Components/Footer'
// import Navbar from './Components/Navbar'
// import HomePage from './Pages/Home'
// import Hackoverflow from './User/Events/HackoverFlow/Hackoverflow';
// import Alumni from './Pages/Alumni';
// import IconCoderz from './User/Events/IconCoderz/Iconcoderz';
// import Hridayam from './User/Events/Hridayam/Hridayam';
// import Affiliates from './Pages/Affiliates';
// import TeamPage from './Pages/TeamPage';
// import AdminLayout from './Admin/admin'


// const App = () => {
//   return (
//     <div>
//         <Navbar />
//         <Routes>
//           {/* <Route path="/" element={<HomePage />} /> */}
//           <Route path="/" element={<AdminLayout />} />
//           <Route path="/events" element={<EventsPage />} />
//           <Route path="/events/hackoverflow" element={<Hackoverflow />} />
//           <Route path="/events/iconcoderz" element={<IconCoderz />} />
//           <Route path="/events/hridayam" element={<Hridayam />} />
//           <Route path="/alumni" element={<Alumni />} />
//           <Route path='/team' element={<TeamPage/>}/>
//           <Route path="/affiliates" element={<Affiliates />} />
//         </Routes>
//         <Footer />
//     </div>

//   )
// }


// export default App;
import { Route, Routes, useLocation } from 'react-router-dom'
import EventsPage from './Pages/Events'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './Pages/Home'
import Hackoverflow from './User/Events/HackoverFlow/Hackoverflow'
import Alumni from './Pages/Alumni'
import IconCoderz from './User/Events/IconCoderz/Iconcoderz'
import Hridayam from './User/Events/Hridayam/Hridayam'
import Codequest from './User/Events/Codequest'
import Edgecase from './User/Events/Edgecase'
import Affiliates from './Pages/Affiliates'
import Registrations from './Pages/JoinUs'
import Contact from './Pages/Contact'
import TeamPage from './Pages/TeamPage'
import Admin from './Admin/admin'


const App = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div>
      {isAdminRoute ? (
        // Admin routes 
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      ) : (
        // Normal user routes with Navbar & Footer
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/hackoverflow" element={<Hackoverflow />} />
            <Route path="/events/iconcoderz" element={<IconCoderz />} />
            <Route path="/events/hridayam" element={<Hridayam />} />
            <Route path="/events/codequest" element={<Codequest />} />
            <Route path="/events/edgecase" element={<Edgecase />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/Joinus" element={<Registrations />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
