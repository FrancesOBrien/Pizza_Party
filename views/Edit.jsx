const React = require('react') 
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
class Edit extends React.Component{
  render() {
    return (
        <div>
          <body style={pieStyle}>
      <form action={`/products/${this.props.product._id}?_method=PUT`}  method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.product.name}/>
          <br/>
          Include: <input type="text" name="description" defaultValue={this.props.product.description}/>
          <br />
          Stock: <input type="text" name="stockQuantity" defaultValue={this.props.product.stockQuantity}/>
          <br />
          Add Pineapple: <input type="checkbox" name="addPineapple" defaultValue={this.props.product.addPineapple}/>
          <br />
          <input style={buttonStyle} type="submit" value="Submit Changes"/>
      </form>
      </body>
      </div>)
  }
}
module.exports= Edit