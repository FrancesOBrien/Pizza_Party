const React = require("react");
const pieStyle = {
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Tahoma',
  color: '#990000',
  backgroundColor: '#FFFF99',

}
const buttonStyle = {
  color: '#ffffff',
  backgroundColor: '#556b2f'
}
class New extends React.Component {
  render() {
    return (
      <div>
        <body style={pieStyle}>
        <h1>Go off-menu!</h1>
        <form action='/products' method='POST'>
          Name: <input type='text' name='name' />
          <br />
          Description: <input type='text' name='description'/>
          <br /> 
          Price: $30
          <br />
          Quantity: <input type='text' name='stockQuantity' defaultValue={1}/>
          <br />
          <input style={buttonStyle} type='submit' name='' value='SUBMIT' />
        </form>
        </body>
      </div>
    );
  }
}

module.exports = New