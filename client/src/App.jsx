import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import HomePage from './Pages/Home'
import Hackoverflow from './User/Events/HackoverFlow/Hackoverflow';

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hackoverflow" element={<Hackoverflow />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App;
