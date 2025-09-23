const Title = ({ title, subtitle = title }) => {
  return (
    <div className="section-title mt-5"  data-aos="fade-up">
      <h2>{subtitle}</h2>
      <p>{title}</p>
    </div>

  )
}

export default Title