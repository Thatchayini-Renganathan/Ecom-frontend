import './App.css'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Login from './pages/Login'
import { Home } from 'lucide-react'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import SellerDashboard from './pages/SellerDashboard'
import SellerHomePage from './pages/SellerHomePage'
import SellerSingupPage from './pages/SellerSingupPage'
import ProtectedRoute from './components/ProtectedRoute'
function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/signup' element={<Signup/>}/>
        </Route>

        <Route path='/seller' element={<SellerHomePage/>}/>
        <Route path='/seller/createAccount' element={<SellerSingupPage/>}/>
        <Route element={<ProtectedRoute requiredRole="seller"/>}>
            <Route path='/seller/dashboard' element={<SellerDashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
