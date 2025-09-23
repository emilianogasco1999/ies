import React from 'react'
import Breadcrumbs from '../../components/gen/breadcrumbs/Breadcrumbs'
import Title from '../../components/gen/title/Title'

const Inscripciones = () => {
  return (
    <>
      <Breadcrumbs
        title={'Inscripciones 2025'}
        subtitle={'Requisitos para aspirantes'}
      />
      <div className="container">
        <Title
          title={'Inscripciones Abiertas'}
        />
        <div className="about">
          <p>Se dio inicio a las inscripciones para el Ciclo Lectivo 2025.</p>
          <p>El trámite de inscripción se deberá llevar a cabo en nuestra Institución de Lunes a Viernes de 19:00 a 22:00 hs.</p>
          <p> La documentación solicitada es la siguiente:</p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <i className="far fa-check-circle me-1"></i>
              Acta de nacimiento
            </li>
            <li className='list-group-item'>
              <i className="far fa-check-circle me-1"></i>
              Fotocopia de DNI.
            </li>
            <li className='list-group-item'>
              <i className="far fa-check-circle me-1"></i>
              Constancia de título secundario en trámite o fotocopia de título autenticado.
            </li>
            <li className='list-group-item'>
              <i className="far fa-check-circle me-1"></i>
              Carpeta A4 transparente.
            </li>
          </ul>
          <p>La propuesta académica responde a la demanda laboral de los sectores socio-productivos de la región y áreas estratégicas de valor agregado.</p>
        </div>
      </div>
    </>
  )
}

export default Inscripciones