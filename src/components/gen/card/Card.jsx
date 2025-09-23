import { Link } from "react-router-dom"

const Card = ({ img, title, body, duracion, id, link }) => {

  return (
    <div className="course-item">
      <img src={img} className="img-fluid" alt="..." />
      <div className="course-content">
        <div className="justify-content-between align-items-center mb-3 d-flex">
          {link ? '' : <h4>Duración</h4>}
          <p className="price">{duracion}</p>
        </div>
        {link
          ?
          <h3>
            <Link to={link}>{title}</Link>
          </h3>
          :
          <h3>
            <Link to={`/carrera/${id}`}>{title}</Link>
          </h3>
        }
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Card