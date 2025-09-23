import Breadcrumbs from '../../components/gen/breadcrumbs/Breadcrumbs'
import Card from '../../components/gen/card/Card'
import Title from '../../components/gen/title/Title'
import CarrerasComponent from '../../components/spec/carreras/CarrerasComponent.jsx'
import { progresar } from '../../utils/carreras/carreras-info.js'

const Carreras = () => {
  return (
    <>
      <Breadcrumbs
        title={'Oferta Académica'}
        subtitle={'Carreras'}
      />

      <div className="courses">
        <div className="container">
          <Title title={'Carreras'}/>
          <CarrerasComponent />
          <Title title={'Estímulo Académico'} />
          <div className="row">
            {progresar.map((result, i) => (
              <div className="col-lg-4 col-md-6 d-flex mb-3" data-aos="fade-up" key={i}>
                <Card
                  img={result.img}
                  title={result.title}
                  body={result.body}
                  link={'https://www.argentina.gob.ar/educacion/progresar'}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Carreras