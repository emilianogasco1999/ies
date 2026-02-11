import { Routes, Route, useLocation } from "react-router-dom";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./components/spec/footer/Footer";
import Navbar from "./components/spec/navbar/Navbar";
import Carreras from "./pages/carreras/Carreras";
import Contacto from "./pages/contacto/Contacto";
import Home from "./pages/home/Home";
import Inscripciones from "./pages/inscripciones/Inscripciones";
import Nosotros from "./pages/nosotros/Nosotros";
import Carrera from "./components/gen/carrera/Carrera";
import Error404 from "./pages/error/Error404";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/carreras" element={<Carreras />}></Route>
        <Route path="/inscripciones" element={<Inscripciones />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/carrera/:id" element={<Carrera />}></Route>
        <Route path="/error404" element={<Error404 />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
