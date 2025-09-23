import { Link } from 'react-router-dom';

const Links = ({ direccion, title, icon }) => {
  return (
    <Link
      to={direccion}
    >

      {icon ?
        <i
          className={`me-1 fas ${icon} `}
          style={{ color: '#007abe' }}
        ></i> : ''}
      {title}
    </Link>
  )
}

export default Links