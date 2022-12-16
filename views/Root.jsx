const React = require("react");


class Root extends React.Component {
  render() {
    return (
      <div>
        <body>
        <h1>Welcome to the Pizza Party!</h1>
        <form action='/products' method='GET'>
          <input type='submit' name='' value='ENTER' />
        </form>
        </body>
      </div>
    );
  }
}

module.exports = Root

