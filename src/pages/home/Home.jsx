
import Title from '../../components/gen/title/Title'
import CarrerasComponent from '../../components/spec/carreras/CarrerasComponent'
import Portada from '../../components/spec/portada/Portada'
import nosotros from '../../assets/img/nosotros.jpg'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <>
      <Portada
        titulo={'Pre-inscripciones 2025'}
        subtitulo={'Están abiertas las pre-inscripciones para las ofertas del Instituto de Enseñanza Superior de Concepción'}
        link={'https://forms.gle/JHd7hJBrw7ARJGDXA'}
      />
      <div className="about">
        <div className="container" data-aos="fade-up">
          <Title
          title={'Sobre nosotros'}
          subtitle={'Nosotros'}
          />
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src={nosotros} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>El Instituto de Enseñanza Superior Concepción nace como organismo nacional por Resolución Ministerial Nº 845</h3>
              <p className="font-italic">
                Fue creado mediante gestiones de la Profesora María Elvira Tolra, primera rectora de la Institución, y el Diputado Nacional Miguel Camel Nacul.</p>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'><i className="far fa-check-circle"></i> El Instituto funciona en las instalaciones de la Escuela de Comercio República de Panamá, Planta Alta.</li>
                <li className='list-group-item'><i className="far fa-check-circle"></i> Posee un laboratorio de primer nivel para las prácticas informáticas con 30 computadoras de última generación.</li>
              </ul>
         
              <p>
                Desde sus inicios el IES Concepción ofrece educación comprometida a jóvenes y adultos de la ciudad de Concepción y todas sus zonas de influencia: Famailla, Acheral, Monteros, Villa Quinteros, Río Seco, Gastona, Trinidad, Medinas, Alpachiri, Alto Verde, Aguilares, Lamadrid, Los Sarmientos, Alberdi, La Cocha y localidades aledañas, acrecentando cada año la cantidad de ingresantes.
              </p>
              <Link to='/nosotros' className='learn-more-btn'>Leer Más</Link>
            </div>
          </div>

        </div>

      </div>
      <div className="courses">
        <div className="container">
          <Title title={'Carreras'} />
          <CarrerasComponent />
        </div>
      </div>
    </>
  )
}

export default Home