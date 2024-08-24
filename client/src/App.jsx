import Footer from './component/Footer';
import AppRoutes from './routes/AppRoutes';
import NavBar from './component/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function App() {
  
  return (
    <>
      <NavBar />
      <AppRoutes/>
      <Footer/>
    </>
  )
}

export default App
