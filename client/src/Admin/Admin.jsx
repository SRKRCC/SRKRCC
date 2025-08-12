
import { Route, Routes } from 'react-router-dom'
import Affiliates from './Affliates';
import AdminLayout from './Sidebar';


const Admin = () => {
  return (
    <div>
        <AdminLayout/>
        <Routes>
            <Route path="/" element={<Affiliates/>} />
            <Route path="affiliates" element={<Affiliates />} />
        </Routes>
    </div>
  )
}


export default Admin;
