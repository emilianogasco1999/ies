import React from 'react'
import Breadcrumbs from '../../components/gen/breadcrumbs/Breadcrumbs'
import InputFrom from '../../components/gen/input/inputForm/InputFrom'
import TextArea from '../../components/gen/input/textArea/TextArea'

const Contacto = () => {
  return (
    <>
      <Breadcrumbs
        title={'Contacto'}
        subtitle={'Contacto'}
      />
      <div data-aos="fade-up">
        <iframe style={{
          border: '0',
          width: '100%',
          height: '350px',
          frameborder: '0',
          ariaHidden: "false",
          tabIndex: "0"
        }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14174.527853808062!2d-65.61170046458781!3d-27.35597232967429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf65f06b65f1%3A0xac02d58f1532902b!2sInstituto%20De%20Ense%C3%B1anza%20Superior%20Concepci%C3%B3n!5e0!3m2!1ses-419!2sar!4v1606075737798!5m2!1ses-419!2sar"

        />
      </div>
      <div className="container contact" >
        <div className="row mt-5 ">
          <div className="col-md-5" data-aos="fade-right">
            <div className="info">
              <div className="address">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Ubicación:</h4>
                <p>San Juan y Shipton (Altos)- Concepción - Tucumán</p>
              </div>

              <div className="email">
                <i className="fas fa-envelope"></i>
                <h4>Email:</h4>
                <p><a href="mailto:Info@iesconcepcion.edu.ar">Info@iesconcepcion.edu.ar</a></p>
              </div>

              <div className="phone">
                <i className="fas fa-phone-alt"></i>
                <h4>Llamar:</h4>
                <p>03865 - 420010</p>
              </div>

            </div>

          </div>
          <div className="col-md-7 mt-5 mt-md-0">
            <div className="alert alert-danger " role="alert">
              Formulario en Mantenimiento
            </div>
            <form >
              <div className="row">
                <div className="col-12 col-md-6 ">
                  <InputFrom
                    type={'text'}
                    id={'name'}
                    title={'Nombre'}
                  />
                </div>
                <div className="col-12 col-md-6 ">
                  <InputFrom
                    type={'email'}
                    id={'email'}
                    title={'Email'}
                  />
                </div>

                <div className="col-12">
                  <InputFrom
                    type={'text'}
                    id={'asunto'}
                    title={'Asunto'}
                  />
                </div>

                <div className="col-12">
                  <TextArea
                    id={'mensaje'}
                    title={'Por favor escribe algo para nosotros'}
                  />
                </div>

              </div>


              <div className="text-center mt-3">
                <button
                  className="btn-contac"
                  type="submit"
                >Enviar Mensaje
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto