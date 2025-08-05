import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Hackoverflow from './User/Events/HackoverFlow/Hackoverflow';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/" element={<Hackoverflow />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App;
