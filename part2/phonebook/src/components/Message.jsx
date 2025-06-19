const Message = ({ message, successful }) => {
  const successfulMessageStyle = {
    color: 'green',
    background: 'lightgrey',
    borderWidth: 5,
    borderColor: 'green',
    opacity: 0.5,
    padding: '5px',
  }

  const notSuccessfulMessageStyle = {
    color: 'red',
    background: 'lightgrey',
    borderWidth: 5,
    borderColor: 'red',
    opacity: 0.5,
    padding: '5px',
  }

  return (
    <div>
      <h2 style={successful ? successfulMessageStyle : notSuccessfulMessageStyle}>{message}</h2>
    </div>
  )
}

export default Message