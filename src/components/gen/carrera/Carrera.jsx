import React, { useEffect } from 'react'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import Title from '../title/Title'
import 'bootstrap/js/dist/tab.js'
import { useParams, useNavigate } from 'react-router-dom';
import { carreras } from '../../../utils/carreras/carreras-info'


const Carrera = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const carrera = carreras.find(carrera => carrera.id === parseInt(id));;

  useEffect(() => {
    if (carrera == undefined || null) {
      navigate('/error404');
    }
  }, [carrera, navigate]);

  if (carrera == undefined || null) {
    return null;
  }
  const planDeEstudio = carrera.planDeEstudio;
  const planDeEstudioArray = Object.values(planDeEstudio);

  return (
    <>
      <Breadcrumbs
        title={carrera.title}
      />
      <section className="about">
        <div className="container" data-aos="fade-up">
          <Title
            title={'carrera'}
            subtitle={'perfil del egresado'}
          />

          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src={carrera.img} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>{carrera.title}</h3>
              <p className="font-italic">{carrera.body} </p>
              <ul>
                {carrera.tareas.map((item, index) => (
                  <li key={index}>
                    <i className="far fa-check-circle"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Title
            title={'Plan de estudios'}
          />

          <section className="cource-details-tabs">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-3">
                  <ul className="nav nav-tabs flex-column" id="myTab" role="tablist">

                    {
                      planDeEstudioArray.map((item, index) => (
                        <li className="nav-item" role="presentation" key={item.id}>
                          <a
                            className={`nav-link ${index === 0 ? 'active' : ''}`}
                            id={`${item.id}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#${item.id}-tab-pane`}
                            type="button"
                            role="tab"
                            aria-controls={`${item.id}-tab-pane`}
                            aria-selected="true"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))
                    }


                  </ul>
                </div>
                <div className="col-lg-9 mt-4 mt-lg-0">
                  <div className="tab-content" id="myTabContent">
                    {
                      planDeEstudioArray.map((item, index) => (
                        <div className={`tab-pane fade ${index === 0 ? 'show active' : ''}`} id={`${item.id}-tab-pane`} role="tabpanel" aria-labelledby={`${item.id}-tab`} tabIndex="0">
                          <div className="row">
                            <div className="col-lg-12 details order-2 order-lg-1">
                              <h3>{item.title}</h3>
                              <div className="content">
                                <ul>
                                  {item.materias.map((materia, i) => (
                                    <li><i className="far fa-check-circle" key={i}></i>{materia}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section >
    </>
  )
}

export default Carrera