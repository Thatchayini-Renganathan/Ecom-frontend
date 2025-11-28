import './App.css'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Login from './pages/Login'
import { Home } from 'lucide-react'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import SellerDashboard from './pages/SellerDashboard'
import SellerHomePage from './pages/SellerHomePage'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
        <Route path='/seller' element={<SellerHomePage/>}/>
        <Route path='/seller-dash' element={<SellerDashboard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
