import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/spec/footer/Footer"
import Navbar from "./components/spec/navbar/Navbar"
import Carreras from "./pages/carreras/Carreras"
import Contacto from "./pages/contacto/Contacto"
import Home from "./pages/home/Home"
import Inscripciones from "./pages/inscripciones/Inscripciones"
import Nosotros from "./pages/nosotros/Nosotros"
import Carrera from './components/gen/carrera/Carrera';
import Error404 from './pages/error/Error404';
// import Login from './pages/login/Login';



function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/carreras' element={<Carreras />}></Route>
          <Route path='/inscripciones' element={<Inscripciones />}></Route>
          <Route path='/nosotros' element={<Nosotros />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
          <Route path='/carrera/:id' element={<Carrera />}></Route>
          <Route path='/error404' element={<Error404 />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
