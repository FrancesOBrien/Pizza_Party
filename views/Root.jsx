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

class Root extends React.Component {
  render() {
    return (
      <div>
        <body style={pieStyle}>
        <h1>Welcome to the Pizza Party!</h1>
        <form action='/products' method='GET'>
          <input style={buttonStyle} type='submit' name='' value='ENTER' />
        </form>
        </body>
      </div>
    );
  }
}

module.exports = Root

