import x from '../../../assets/img/logo/logo-ministerio-de-educacion.png'
import { navegacion, carreras } from '../../../utils/navegacion/navegacion'
import Links from '../../gen/links/Links'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top mt-4 ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 footer-contact ">
              <h3>Dirección</h3>
              <p>
                <i className="fas fa-map-marker-alt me-1"></i>
                Instituto de Enseñanzas Superior - Concepción.<br />
                San Juan y Shipton (Altos).<br />
                Concepción - Tucumán<br />
                <i className="fas fa-phone-alt me-1"></i> <strong>Teléfono:</strong> 03865 - 420010<br />
                <i className="fas fa-envelope me-1"></i> <a href="mailto:Info@iesconcepcion.edu.ar" className="link-underline link-underline-opacity-0"> <strong>Email: </strong>Info@iesconcepcion.edu.ar</a><br />
              </p>
            </div>

            <div className="col-md-4 col-12 footer-links ">
              <h4>Carreras y Más</h4>
              <ul className="text-left link-underline">
                {carreras.map(carrera => (
                  <li key={carrera.direccion}>
                    <i className="fas fa-chevron-right"></i>
                    <Links
                      direccion={`/${carrera.direccion}`}
                      title={carrera.title}
                    />
                  </li>
                ))
                }
                <li>
                  <i className="fas fa-chevron-right"></i>
                  <Links
                    direccion={'https://www.argentina.gob.ar/educacion/progresar'}
                    title={'Progresar'}
                  />
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-12 footer-links ">
              <h4>Navegación</h4>
              <ul>
                {navegacion.map(direccion => (
                  <li key={direccion.direccion}>
                    <i className="fas fa-chevron-right"></i>
                    <Links
                      direccion={`/${direccion.direccion}`}
                      title={direccion.title}
                    />
                  </li>
                ))
                }
              </ul>
            </div>

            <div className="col-md-2 col-12 footer-links ">
              <h4>Redes</h4>
              <ul>
                <li><i className="fas fa-chevron-right"></i><a href="https://www.instagram.com/iesconcepcion/">Instagram</a></li>
                <li><i className="fas fa-chevron-right"></i><a href="https://www.facebook.com/ies.concepcion.3">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mr-md-auto text-center text-md-start ">
              <div className="copyright ">
                &copy; Copyright
                <strong>
                  <span>
                    <a href="https://www.facebook.com/Emiliano.A.Gasco" className="text-white ms-1">
                      Emiliano Gasco
                    </a>
                  </span>
                </strong>
                . Todos los derechos reservados
              </div>
              <div className="credits">
                Diseñado por:
                <a href="https://www.facebook.com/Emiliano.A.Gasco" className='ms-1'>
                  Emiliano Gasco
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 social-links text-center pt-3 pt-md-0 ">
            <img src={x} alt="" className='float-md-end' />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer