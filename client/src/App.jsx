
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './Pages/Home'
import Hackoverflow from './User/Events/HackoverFlow/Hackoverflow';
import Alumni from './Pages/Alumni';
import { Routes, Route } from "react-router-dom";
import IconCoderz from './User/Events/IconCoderz/Iconcoderz';
import Hridayam from './User/Events/Hridayam/Hridayam';
import TeamPage from './Pages/TeamPage';

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hackoverflow" element={<Hackoverflow />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/events/hackoverflow" element={<Hackoverflow />} />
          <Route path="/events/iconcoderz" element={<IconCoderz />} />
          <Route path="/events/hridayam" element={<Hridayam />} />
          <Route path='/team' element={<TeamPage/>}/>
        </Routes>
        <Footer />
    </div>
  )
}


export default App;
