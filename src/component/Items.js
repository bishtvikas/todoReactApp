function Items({ listData, onRemoveHandler }) {
  return (
    <>
      {listData.map((item) => (
        <ul key={item.Name} className="list-group todo-item-container">
          <li className="list-group-item todo-item">
            <span>{item.Name}</span>
            <span>{item.Due}</span>
            <button
              type="button"
              className="btn btn-danger"
              onClick={(e) => {
                onRemoveHandler(e, item)
              }}
            >
              Remove
            </button>
          </li>
        </ul>
      ))}
    </>
  )
}
export default Items
