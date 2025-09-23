import Card from '../../gen/card/Card'
import { carreras } from '../../../utils/carreras/carreras-info'
const CarrerasComponent = () => {
  return (
    <div className="row">
      {carreras.map((result) => (
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-3" data-aos="fade-up" key={result.id}>
            <Card
              img={result.img}
              title={result.title}
              body={result.body}
              duracion={result.duarcion}
              id={result.id}
            />
          </div>
      ))}
    </div>
  )
}

export default CarrerasComponent