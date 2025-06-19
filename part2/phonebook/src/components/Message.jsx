const Message = ({ message }) => {
  const messageStyle = {
    color: 'green',
    background: 'lightgrey',
    borderWidth: 5,
    borderColor: 'green',
    opacity: 0.5,
    padding: '5px',
  }

  return (
    <div>
      <h2 style={messageStyle}>{message}</h2>
    </div>
  )
}

export default Message