import React from 'react'

const Breadcrumbs = ({ title, subtitle, body }) => {
  return (
    <div className="breadcrumbs" data-aos="fade-down" >
      <div className="container">
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Breadcrumbs