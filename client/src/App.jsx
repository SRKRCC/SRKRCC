
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './Pages/Home'
import Hackoverflow from './User/Events/HackoverFlow/Hackoverflow';
import { Routes, Route } from "react-router-dom";
import IconCoderz from './User/Events/IconCoderz/Iconcoderz';
import Hridayam from './User/Events/Hridayam/Hridayam';


const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/hackoverflow" element={<Hackoverflow />} />
          <Route path="/events/iconcoderz" element={<IconCoderz />} />
          <Route path="/events/hridayam" element={<Hridayam />} />
        </Routes>
        <Footer />
    </div>
  )
}


export default App;
