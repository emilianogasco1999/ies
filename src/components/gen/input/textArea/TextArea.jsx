const TextArea = ({ id, title }) => {
  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        placeholder={title}
        id={id}
        style={{ height: '100px' }}></textarea>
      <label
        htmlFor={id}
      >
        {title}
      </label>
    </div>
  )
}

export default TextArea