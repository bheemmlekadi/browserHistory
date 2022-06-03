import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const deleteHistory = () => {
    deleteItem(id)
  }

  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="domain-container">
        <img src={logoUrl} className="logo" alt={title} />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button type="button" className="delete-button" onClick={deleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
