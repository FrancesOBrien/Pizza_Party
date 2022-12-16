const React = require("react");


class New extends React.Component {
  render() {
    return (
      <div>
        <body>
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
          <input type='submit' name='' value='SUBMIT' />
        </form>
        </body>
      </div>
    );
  }
}

module.exports = New