import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo/logo.png';
import Links from '../../gen/links/Links';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import { navegacion } from '../../../utils/navegacion/navegacion';

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isActive) {
      document.body.classList.add('mobile-nav-active');
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [isActive]);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <header id="header" className="fixed-top">
      <ScrollToTop />
      <div className="container d-flex align-items-center">
        <Link to="/" className="logo me-auto">
          <img src={logo} alt="" className="img-fluid" />
        </Link>
        <nav className={isActive ? 'mobile-nav d-lg-none' : 'nav-menu d-none d-lg-block'}>
          <ul>
            {navegacion.map(direccion => (
              <li key={direccion.direccion}>
                <Links
                  direccion={`/${direccion.direccion}`}
                  title={direccion.title}
                  icon={direccion.icon}
                />
              </li>
            ))
            }
            {/* 
           
            <li className="drop-down">
              <a href="#">Finales <i className="fas fa-chevron-down"></i></a>
              <ul>
                <li><a href="finales-redes.php?f=Tec. Sup. Comp. y Redes">Téc. Sup. en Comp. y Redes</a></li>
                <li><a href="finales-bio.php?f=Tec. Sup. Bioenergia">Téc. Sup. en Bioenergia</a></li>
                <li><a href="finales-mec.php?f=Tray. de Form. Prof. en Máq. Industriales">Tra. de Form. Prof. en Mec.</a></li>
              </ul>
            </li>
            <li><a href="contacto.php">Contacto</a></li>
            <li>
              <a href="contacto.php">
                Inicial Sesion
                <i
                  className='ms-1 fas fa-user'
                  style={{ color: '#007abe' }}
                ></i>
              </a>
            </li> */}

          </ul>
        </nav>
        <button
          type="button"
          className="mobile-nav-toggle d-lg-none"
          onClick={toggleClass}>
          <i className="fas fa-bars"></i>
        </button>

      </div>
      {isActive && <div className="mobile-nav-overly" onClick={toggleClass}></div>}
    </header>
  );
};

export default Navbar;