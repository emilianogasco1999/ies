const InputFrom = ({ type, id, title }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={title}
      />
      <label
        htmlFor={id}
      >
        {title}
      </label>
    </div>
  )
}

export default InputFrom