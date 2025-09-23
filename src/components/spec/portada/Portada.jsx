import { Link } from "react-router-dom"

const Portada = ({ titulo, subtitulo, link }) => {
  return (
    <section id="hero" className="d-flex justify-content-center align-items-center">
      <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <Link to={link} className="btn-get-started">Pre-inscribirme</Link>
      </div>
    </section>
  )
}

export default Portada